<template>
  <div class="container-fluid">
    <!-- Card Pengunjung -->
    <h2>Profil smk negri 4 Tasikmalaya</h2>
    <div class="row">
      <div class="col-lg-6">
        <div class="card bg-pengunjung rounded-5">
          <div class="card-body">
            <!-- Optional: Content for the card can go here -->
          </div>
        </div>
      </div>
    </div>

    <!-- Sejarah sekolah -->
    <section class="sambutan">
      <h2>Sejarah Sekolah</h2>
      <p>
        Sejalan dengan Program Pemerintah dibidang pendidikan Menengah Kejuruan pada saat itu yakni pemerataan
        akses ditambah pula dengan banyaknya keinginan masyarakat yang mengharapkan adanya SMK Negeri di daerah
        Kecamatan Purbaratu Kota Tasikmalaya, terutama untuk menampung tamatan dari SLTP yang ingin melanjutkan ke SMK.
        Maka beberapa tokoh masyarakat, unsur pejabat pemerintah di Kecamatan Purbaratu Kota Tasikmalaya mengusulkan
        kepada pemerintah Kota Tasikmalaya dan Pemerintah Provinsi Jawa Barat, agar berdirinya SMK Negeri di Kecamatan
        Purbaratu Kota Tasikmalaya. Setelah melalui perjuangan yang sangat panjang dari berbagai pihak khususnya
        Disdik Kota Tasikmalaya dan pihak-pihak terkait lainnya sesuai prosedur dan ketentuan yang berlaku pada waktu
        itu dengan mengucapkan syukur Alhamdulillah akhirnya pada tahun pelajaran 2010/2011 SMK Negeri 4 Tasikmalaya
        mulai berdiri, pada awalnya membuka Kompetensi Keahlian Teknik Komputer dan Jaringan dengan pendaftar peserta
        Didik Baru pada waktu itu berjumlah 44 orang. Pada awalnya tempat belajar menumpang di SMP Negeri 17 Kota
        Tasikmalaya, dan sekolah induknya adalah SMK Negeri 2 Kota Tasikmalaya. Untuk Tenaga pendidik dan Tenaga
        Kependidikan masih dibantu sepenuhnya oleh kedua sekolah tersebut.
      </p>

      <!-- Visi and Misi in Separate Boxes -->
      <div class="row">
        <div class="col-md-6">
          <div class="visi-box">
            <h1>Visi</h1>
            <p>
              "TERWUJUDNYA LULUSAN YANG CERDAS, AKTIF, KOMPETITIF, ADAPTIF, DAN PRODUKTIF BERLANDASKAN IMAN DAN TAKWA"
              "(CAKAP BERIMTAK)"
            </p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="misi-box">
            <h1>Misi</h1>
            <ul>
              <li>Menyiapkan Sumber Daya Manusia yang cerdas dan kompeten baik hardskill maupun softskill.</li>
              <li>Meningkatkan dan mengembangkan aktifitas serta kreatifitas seluruh warga sekolah dalam berbagai
                kegiatan positif.</li>
              <li>Mewujudkan manajemen pengelolaan yang efektif, efesien, transparan, akuntabel dan layanan prima.</li>
              <li>Menumbuhkan dan mengembangkan potensi dan kemampuan Sumber Daya Manusia yang berdaya saing tinggi
                melalui berbagai kegiatan akademik maupun non akademik.</li>
              <li>Menyelenggarakan berbagai program kegiatan dalam upaya meningkatkan Sumber Daya Manusia yang mampu
                menyesuaikan dengan perkembangan.</li>
              <li>Mengembangkan sarana prasarana dan lingkungan sekolah yang menyenangkan sebagai wadah
                menumbuhkembangkan daya kreasi dan inovasi untuk menghasilkan produk teknologi tepat guna.</li>
              <li>Membangun jiwa wirausaha yang handal melalui pembelajaran Teaching Factory (TEFA) dan Kelas Industri.
              </li>
              <li>Menjalin dan mengembangkan kemitraan dengan Industri dan Dunia Kerja (IDUKA) serta lembaga lainnya
                yang relevan.</li>
              <li>Menanamkan dan membudayakan sikap dan perilaku yang baik pada aktivitas di sekolah maupun dalam
                kehidupan sehari-hari.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Identitas Sekolah in Boxes -->
      <h2>Identitas Sekolah</h2>

      <div class="identitas-sekolah">
        <div class="box">
          <h1>Nama Sekolah</h1>
          <p>SMK Negeri 4 Tasikmalaya</p>
        </div>

        <div class="box">
          <h1>NPSN</h1>
          <p>20276063</p>
        </div>

        <div class="box">
          <h1>Nomor Statistik Sekolah</h1>
          <p>401327810004</p>
        </div>

        <div class="box">
          <h1>Alamat</h1>
          <p>Jalan Depok RT 02 RW 05</p>
        </div>

        <div class="box">
          <h1>Telepon</h1>
          <p>+(62)265312059</p>
        </div>

        <div class="box">
          <h1>Email</h1>
          <p>info@smkn4tsm.sch.id</p>
        </div>
      </div>

      <!-- By Aura Box -->
      <div class="by-aura-box">
        <p>Copyright SMKN 4 Tasikmalaya 2024 - 2024</p>
        <h2>Made with By Aura</h2>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
/* General Styles */
.container-fluid {
  padding: 20px;
}

/* Card Pengunjung */
.card {
  height: 250px;
  box-shadow: 3px 1px 10px #424242;
}

.card.bg-pengunjung {
  margin-top: 5%;
  background-image: url('~/assets/poto.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.9;
}

.card-body h2 {
  color: white;
  text-align: center;
  font-family: Arial, sans-serif;
}

/* Sejarah Sekolah Section */
.sambutan {
  margin-top: 30px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.sambutan h2 {
  text-align: center;
  color: #007bff;
}

.sambutan p {
  text-align: justify;
  line-height: 1.6;
}

/* Visi Box */
.visi-box {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.visi-box h1 {
  color: #007bff;
}

.visi-box p {
  text-align: justify;
  line-height: 1.6;
  color: #1a1b1b;
}

/* Misi Box */
.misi-box {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.misi-box h1 {
  color: #388e3c;
}

.misi-box ul {
  list-style-type: none;
  padding: 0;
}

.misi-box li {
  margin-bottom: 10px;
  color: #1a1b1b;
}

/* Identitas Sekolah Section */
.identitas-sekolah {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.identitas-sekolah h2 {
  margin-top: 20px;
  margin-bottom: 20px;
  color: #1a1b1b;
  text-align: center;
}

.identitas-sekolah .box {
  flex: 1 1 calc(33% - 20px);
  background: #f0f4f7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.identitas-sekolah h1 {
  color: #1a1b1b;
  font-size: 16px;
}

.identitas-sekolah p {
  font-size: 12px;
  margin-top: 10px;
}

/* By Aura Box */
.by-aura-box {
  background-color: #535658;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
  text-align: center;
}

.by-aura-box h2 {
  color: #fff;
  font-size: 24px;
}

.by-aura-box p {
  color: #333;
  font-size: 16px;
}
</style>
