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
  
      <!-- Sambutan Kepala Sekolah -->
      <section class="sambutan">
        <h2>Sambutan Kepala Sekolah</h2>
        <img src="~/assets/kepsek.jpg" alt="Foto Kepala Sekolah" class="profile-pic" />
        <p>Assalamu'alaikum warahmatullahi wabarakatuh,</p>
        <p>
            Sambutan Kepala Sekolah
Assalamualaikum Warahmatullahi Wabarakatuh
Selamat datang di SMKN 4 Tasikmalaya. Segala puji dan syukur kita panjatkan kehadirat Allah SWT, semoga kita semua ada dalam lindungan-Nya. Dan atas perkenan-Nya pula kami dapat menghadirkan website SMK Negeri 4 Tasikmalaya ini. Kami berharap dengan adanya website di SMK Negeri 4 Tasikmalaya ini para pengunjung dapat mengenal lebih jauh tentang sekolah kami sehingga dapat mempererat tali silaturrahmi antara sekolah dengan masyarakat demi kemajuan kita bersama. Tiada gading yang tak retak, website kami ini masih dalam proses pengembangan, masih banyak kekurangan yang harus kami perbaiki. Kritik dan sarannya yang membangun sangat kami harapkan untuk pengembangan ke depan.

Akhirnya, saya mengucapkan terimakasih yang sebesar-besarnya kepada semua pihak yang tidak dapat disebutkan satu segala bantuan dan persatu atas fasilitasnya
 yang telah diberikan semoga semua yang kita lakukan bermanfaat bagi masyarakat. Wassalamu'alaikum Warahmatullahi Wabarakatuh.
        </p>
        
        <p>Wassalamu'alaikum warahmatullahi wabarakatuh.</p>
        <p class="signature">
        </p>
        
        <h1>kompetensi keahlian</h1>



        <h2>Pengembangan Perangkat Lunak & Gim</h2>
       <p> 
Jurusan ini mempelajari cara merancang, mengembangkan, dan memelihara perangkat lunak, termasuk aplikasi berbasis desktop, web, dan mobile.
 Siswa juga diajarkan teknik pembuatan gim, seperti desain level, animasi, dan pemrograman gim, menggunakan teknologi dan perangkat lunak terkini.
</p>

<h2>Teknik Komputer & Jaringan Komputer</h2>
<p>
  Jurusan ini fokus pada penguasaan konsep dan praktik dalam membangun, mengelola, dan mengamankan jaringan komputer.
   Siswa akan mempelajari teknologi jaringan, administrasi server, troubleshooting, serta konfigurasi perangkat jaringan seperti router dan switch.</p>


   <h2>Teknik & Bisnis Sepeda Motor</h2>
   <p>
    Jurusan ini mempelajari teknik perawatan, perbaikan, dan modifikasi sepeda motor, 
    sekaligus menanamkan keterampilan kewirausahaan. Siswa diajarkan cara membuka dan mengelola bisnis bengkel, termasuk aspek pemasaran dan manajemen.</p>


    <h2>Desain Komunikasi Visual</h2>
    <p>
      Jurusan ini mengajarkan seni dan teknik dalam menciptakan desain visual yang komunikatif dan menarik.
       Materi meliputi desain grafis, fotografi, ilustrasi, dan media digital untuk kebutuhan branding, promosi, atau media publikasi.</p>


       <h2>Teknik Otomotif Industri</h2>
       <p>
        Jurusan ini berfokus pada teknologi otomotif yang diterapkan dalam skala industri.
         Siswa akan belajar tentang sistem mekanik kendaraan modern, produksi komponen otomotif, dan pengelolaan peralatan industri yang berkaitan dengan otomotif.</p>


        
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
  
  .card {
    height: 250px;
    box-shadow: 3px 1px 10px #424242;
  }
  
  .card.bg-pengunjung {
    margin-top: 5%;
    background-image: url('../assets/poto.jpeg');
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
  
  .profile-pic {
    display: block;
    max-width: 150px;
    margin: 0 auto 20px auto;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .signature {
    text-align: right;
    font-style: italic;
    margin-top: 20px;
  }
  </style>
  
  