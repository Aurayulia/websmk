<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <div class="card bg-pengunjung rounded-5">
          <div class="card-body">
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <!-- Sambutan Kepala Sekolah -->
    <section class="sambutan">
      <h2>Sambutan Kepala Sekolah</h2>

      <div class="sambutan-content">
        <img src="../assets/kepsek.jpg" alt="Kepala Sekolah" class="competency-image" />
        <p>
          Assalamualaikum Warahmatullahi Wabarakatuh
          Selamat datang di SMKN 4 Tasikmalaya. Segala puji dan syukur kita panjatkan kehadirat Allah SWT, semoga kita
          semua ada dalam lindungan-Nya. Dan atas perkenan-Nya pula kami dapat menghadirkan website SMK Negeri 4
          Tasikmalaya ini. Kami berharap dengan adanya website di SMK Negeri 4 Tasikmalaya ini para pengunjung dapat
          mengenal lebih jauh tentang sekolah kami sehingga dapat mempererat tali silaturrahmi antara sekolah dengan
          masyarakat demi kemajuan kita bersama. Tiada gading yang tak retak, website kami ini masih dalam proses
          pengembangan, masih banyak kekurangan yang harus kami perbaiki. Kritik dan sarannya yang membangun sangat
          kami harapkan untuk pengembangan ke depan.

          Akhirnya, saya mengucapkan terimakasih yang sebesar-besarnya kepada semua pihak yang tidak dapat disebutkan
          satu segala bantuan dan persatu atas fasilitasnya yang telah diberikan semoga semua yang kita lakukan
          bermanfaat bagi masyarakat. Wassalamu'alaikum Warahmatullahi Wabarakatuh.
        </p>
      </div>
    </section>
  </div>

  <div class="box-container">
    <div class="box">
      <h1>guru</h1>
      <p>60</p>
    </div>

    <div class="box">
      <h1>siswa</h1>
      <p>1116</p>
    </div>
  </div>

  <!-- Konsentrasi Keahlian Section -->
  <section class="konsentrasi-keahlian">
    <div class="konsentrasi-box">
      <h2>Konsentrasi Keahlian</h2>
    </div>

    <!-- Competency Section -->
    <div class="container-fluid">
      <section class="competency-box-container">
        <!-- Pengembangan Perangkat Lunak & Game Section -->
        <div class="competency-box">
          <div class="competency-content">
            <img src="../assets/rpl.jpg" alt="Pengembangan Perangkat Lunak" class="competency-image" />
            <div class="text-content">
              <h2>Pengembangan Perangkat Lunak</h2>
              <p>
                Jurusan ini mempelajari cara merancang, mengembangkan, dan memelihara perangkat lunak...
              </p>
            </div>
          </div>
        </div>

        <!-- Teknik Komputer & Jaringan Komputer Section -->
        <div class="competency-box">
          <div class="competency-content">
            <img src="../assets/tkj.jpg" alt="Teknik Komputer" class="competency-image" />
            <div class="text-content">
              <h2>Teknik Komputer & Jaringan Komputer</h2>
              <p>
                Jurusan ini mengajarkan seni dan teknik dalam menciptakan desain visual yang komunikatif...
              </p>
            </div>
          </div>
        </div>

        <!-- Teknik & Bisnis Sepeda Motor Section -->
        <div class="competency-box">
          <div class="competency-content">
            <img src="../assets/tsm.jpg" alt="Teknik & Bisnis Sepeda Motor" class="competency-image" />
            <div class="text-content">
              <h2>Teknik & Bisnis Sepeda Motor</h2>
              <p>
                Jurusan ini mempelajari teknik perawatan, perbaikan, dan modifikasi sepeda motor...
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Desain Komunikasi Visual Section -->
      <div class="competency-box">
        <div class="competency-content">
          <img src="../assets/dkv.jpg" alt="Desain Komunikasi Visual" class="competency-image" />
          <div class="text-content">
            <h2>Desain Komunikasi Visual</h2>
            <p>
              Jurusan ini mengajarkan seni dan teknik dalam menciptakan desain visual yang komunikatif...
            </p>
          </div>
        </div>
      </div>

      <!-- Teknik Otomotif Industri Section -->
      <div class="competency-box">
        <div class="competency-content">
          <img src="../assets/toi.jpg" alt="Teknik Otomotif Industri" class="competency-image" />
          <div class="text-content">
            <h2>Teknik Otomotif Industri</h2>
            <p>
              Jurusan ini berfokus pada teknologi otomotif yang diterapkan dalam skala industri...
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- "By Aura" Section -->
  <section class="by-aura-box">
    <div class="by-aura-content">
      <p>Copyright SMKN 4 Tasikmalaya 2024 - 2024</p>
      <h2>Made with by Aura</h2>
    </div>
  </section>
</template>

<style>
/* Add new style for the "By Aura" Box */
.by-aura-box {
  background-color: #535658;
  /* Coral color */
  padding: 50px;
  /* Increased padding for more space */
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
  width: 100%;
  max-width: 1200px;
  /* Increased max-width for wider box */
  margin: 50px auto;
  text-align: center;
}

.by-aura-content h2 {
  font-size: 28px;
  color: #fff;
  /* White color for the heading */
  margin-bottom: 15px;
}

.by-aura-content p {
  font-size: 16px;
  color: #fff;
  /* White color for the paragraph text */
  line-height: 1.6;
}

/* Other styles */
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

/* Competency Section */
.competency-box-container {
  margin-top: 50px;
}

.competency-box {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.competency-box h2 {
  color: #007bff;
  font-size: 20px;
  text-transform: capitalize;
}

.competency-box p {
  text-align: justify;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 10px;
}

/* Flexbox container for image and text */
.competency-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.competency-image {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.text-content {
  flex: 1;
  font-size: 14px;
}

/* Sambutan Section */
.sambutan {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
}

.sambutan-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}

.sambutan-content img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
}

/* Box Layout for NPSN and Statistik School */
.box-container {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.box {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 48%;
}

.box h1 {
  color: #007bff;
  font-size: 20px;
}

.box p {
  font-size: 16px;
}

/* Konsentrasi Keahlian Section */
.konsentrasi-keahlian {
  text-align: center;
  margin-top: 40px;
}

.konsentrasi-box {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.konsentrasi-box h2 {
  color: #007bff;
  font-size: 24px;
  margin: 0;
  text-transform: capitalize;
}
</style>
