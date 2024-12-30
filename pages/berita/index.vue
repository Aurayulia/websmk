<template>
  <div class="box-wrapper">
    <div class="container"></div>
    <h1 class="berita-title">Berita</h1>
    <!-- Apply class for custom styling -->
    <div class="row"></div>
    <!-- First Box -->
    <div class="box-container">
      <div class="foto-item">
        <img src="~/assets/guru.jpg" alt="Foto Kepala Sekolah" class="profile-pic" />
      </div>
      <h1>Upacara Peringatan Hari Guru</h1>
      <p>Upacara Peringatan Hari Guru Nasional Ke-30, dan HUT PGRI Ke-79 Tahun 2024. "Guru Hebat Indonesia Kuat".</p>
    </div>

    <!-- Second Box -->
    <div class="box-container">
      <div class="foto-item">
        <img src="~/assets/berita1.jpg" alt="Foto Kepala Sekolah" class="profile-pic" />
      </div>
      <h1>Perencanaan Zona Integritas</h1>
      <p>Zona Integritas di Satuan Pendidikan Dinas Pendidikan Provinsi Jawa Barat, Wujudkan Wilayah Bebas dari Korupsi & Birokrasi Bersih dan Melayani.</p>
    </div>

    <!-- Third Box -->
    <div class="box-container">
      <div class="foto-item">
        <img src="~/assets/berita3.jpg" alt="Foto Kepala Sekolah" class="profile-pic" />
      </div>
      <h1>Skill Competition 2024</h1>
      <p>Skill Competition 2024 di selenggarakan oleh Safety Riding Center PT Daya Adicipta Motora Bandung.</p>
    </div>
  </div>
</template>

<style scoped>
/* Flex container for wrapping items */
.box-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
  justify-items: center;
  padding: 20px;
  /* Add some padding to the wrapper */
}

/* Box container styling */
.box-container {
  border: 2px solid #333;
  border-radius: 10px;
  padding: 12px;
  background-color: #f9f9f9;
  max-width: 30%;
  min-width: 200px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  /* Ensure that content is stacked vertically (image on top, text below) */
  align-items: center;
  /* Center-align the content */
}

/* Center the "berita" heading */
.berita-title {
  font-size: 2rem;
  /* Increase font size */
  color: #007bff;
  text-align: center;
  width: 100%;
  /* Ensure it spans the full width */
  margin-bottom: 20px;
  /* Add spacing below */
}

/* Heading styling for box containers */
h1 {
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  margin-top: 10px;
  /* Add some space above the heading */
}

/* Paragraph styling */
p {
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 8px;
  /* Add space between paragraph and heading */
}

/* Foto-item styling */
.foto-item {
  display: flex;
  justify-content: center;
  /* Center the image inside the container */
  width: 100%;
  /* Make sure the image takes the full width inside the container */
  margin-bottom: 15px;
  /* Add some space below the image */
}

/* Profile image styling */
.profile-pic {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

/* Styling for 'By Aura' Box */
.by-aura-box {
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #535658;
  border: 2px solid #fff;
  border-radius: 10px;
  text-align: center;
}

/* By Aura Content Styling */
.by-aura-content {
  width: 80%;
  max-width: 600px;
}

.by-aura-content h2 {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 10px;
}

.by-aura-content p {
  font-size: 1rem;
  color: #fff;
  line-height: 1.6;
  margin-top: 10px;
}
</style>
