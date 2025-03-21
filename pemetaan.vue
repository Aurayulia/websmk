<template>
  <div class="container">
    <!-- Input Pencarian -->
    <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="Cari..." class="search-input" />
      <input type="date" v-model="searchDate" class="date-input" />
    </div>

    <!-- Tabel -->
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th>No Surat</th>
            <th>No Berkas</th>
            <th>Nama Pemohon</th>
            <th>Jenis Permohonan</th>
            <th>No 302</th>
            <th>Nama Petugas Ukur</th>
            <th>No 307</th>
            <th>Nama Petugas Pemetaan</th>
            <th>Tanggal</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="loket in filteredData" :key="loket.id">
            <td>{{ loket.no_surat || '-' }}</td>
            <td>{{ loket.no_berkas || '-' }}</td>
            <td>{{ loket.nama_pemohon }}</td>
            <td>{{ loket.jenis_permohonan }}</td>
            <td>{{ loket.no302 || '-' }}</td>
            <td>{{ loket.nama_petugas || '-' }}</td>
            <td>{{ loket.no307 || '-' }}</td>
            <td>{{ loket.petugas_pemetaan || 'Tidak Ditemukan' }}</td>
            <td>{{ loket.tanggal || '-' }}</td>
            <td>
              <button @click="editItem(loket)" class="btn-edit">Edit</button>
            </td>
          </tr>
          <tr v-if="filteredData.length === 0">
            <td colspan="10" class="no-data">Tidak ada data tersedia</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Popup Edit -->
    <div v-if="showPopup" class="popup-overlay">
      <div class="popup-content">
        <h2 class="popup-title">Edit Pemetaan</h2>

        <label class="label">No 307</label>
        <input v-model="editData.no307" class="input" />

        <label class="label">Petugas Pemetaan</label>
        <select v-model="editData.petugas_pemetaan" class="input">
          <option v-for="petugas in daftarPetugas" :key="petugas.id" :value="petugas.nama">
            {{ petugas.nama }}
          </option>
        </select>

        <div class="popup-actions">
          <button @click="showPopup = false" class="btn-cancel">Batal</button>
          <button @click="simpanEdit" class="btn-save">Simpan</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { supabase } from '@/plugins/supabase';

const dataPemetaan = ref([]);
const daftarPetugas = ref([]);
const showPopup = ref(false);
const editData = ref({});
const searchQuery = ref('');
const searchDate = ref('');

const fetchPemetaan = async () => {
  try {
    const { data, error } = await supabase
      .from('loket')
      .select(`id, no_berkas, nama_pemohon, no_surat, no302, no307, jenis_permohonan, petugas_pemetaan, tanggal, petugas:petugas_id (nama)`);
    if (error) throw error;

    dataPemetaan.value = data.map(item => ({
      ...item,
      nama_petugas: item.petugas ? item.petugas.nama : 'Tidak Ditemukan'
    }));
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

const fetchPetugas = async () => {
  try {
    const { data, error } = await supabase.from('pemetaan').select('id, nama');
    if (error) throw error;
    daftarPetugas.value = data;
  } catch (error) {
    console.error('Error fetching petugas:', error.message);
  }
};

const editItem = (item) => {
  editData.value = { ...item };
  showPopup.value = true;
};

const simpanEdit = async () => {
  try {
    const { error } = await supabase
      .from('loket')
      .update({
        no307: editData.value.no307,
        petugas_pemetaan: editData.value.petugas_pemetaan,
      })
      .match({ id: editData.value.id });

    if (error) throw error;
    showPopup.value = false;
    fetchPemetaan();
  } catch (error) {
    console.error('Gagal menyimpan data:', error.message);
  }
};

const filteredData = computed(() => {
  return dataPemetaan.value.filter((item) => {
    const query = searchQuery.value.toLowerCase();
    const queryMatch = query ? ['nama_pemohon', 'jenis_permohonan', 'no_surat', 'no_berkas'].some(field => (String(item[field] || '')).toLowerCase().includes(query)) : true;
    const dateMatch = searchDate.value ? new Date(item.tanggal).toISOString().split('T')[0] === searchDate.value : true;
    return queryMatch && dateMatch;
  });
});

watch(showPopup, (newValue) => console.log("Popup status:", newValue));

onMounted(() => {
  fetchPemetaan();
  fetchPetugas();
});
</script>

<style scoped>
.container {
  width: 100%;
  margin: 20px auto;
  padding: 20px;
}

.search-container {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

.search-input,
.date-input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.table-container {
  overflow-x: auto;
}

.table th {
  background-color: #a59e98;
  color: white;
}

.no-data {
  text-align: center;
  font-style: italic;
}

.btn-edit {
  background-color: #f39c12;
  color: white;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-edit:hover {
  background-color: #e67e22;
}

.popup-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
