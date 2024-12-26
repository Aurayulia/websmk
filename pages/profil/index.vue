<template>
    <div class="container-fluid">
      <div class="row">
        <!-- Card Pengunjung -->
        <div class="col-lg-6">
          
            <div class="card bg-pengunjung rounded-5">
              <div class="card-body">
                
              </div>
            </div>
         
        </div>
      </div>
  
      <!-- Sejarah sekolah -->
      <section class="sambutan">
        <h2>Sejarah sekolah</h2>
        <img src="~/assets/kepsek.jpg" alt="Foto Kepala Sekolah" class="profile-pic" />

        <p>
            sejarah Sekolah
            Sejalan dengan Program Pemerintah dibidang pendidikan Menengah Kejuruan pada saat itu yakni pemerataan akses ditambah pula dengan banyaknya keinginan masyarakat yang mengharapkan adanya SMK Negeri di daerah Kecamatan Purbaratu Kota Tasikmalaya, terutama untuk menampung tamatan dari SLTP yang ingin melanjutkan ke SMK maka beberapa tokoh masyarakat, unsur pejabat pemerintah di Kecamatan Purbaratu Kota Tasikmalaya mengusulkan kepada pemerintah Kota Tasikmalaya dan Pemerintah Provinsi Jawa Barat, agar berdirinya SMK Negeri di Kecamatan Purbaratu Kota Tasikmalaya. Setelah melalui perjuangan yang sangat panjang dari berbagai pihak khususnya Disdik Kota Tasikmalaya dan pihak-pihak terkait lainnya sesuai prosedur dan ketentuan yang berlaku pada waktu itu dengan mengucapkan syukur Alhamdulillah akhirnya pada tahun pelajaran 2010/2011 SMK Negeri 4 Tasikmalaya mulai berdiri, pada awalnya membuka Kompetensi Keahlian Teknik Komputer dan Jaringan dengan pendaftar peserta Didik Baru pada waktu itu berjumlah 44 orang. Pada awalnya tempat belajar menumpang di SMP Negeri 17 Kota Tasikmalaya, dan sekolah induknya adalah SMK Negeri 2 Kota Tasikmalaya, Untuk Tenaga pendidik dan Tenaga Kependidikan masih dibantu sepenuhnya oleh kedua sekolah tersebut.
             Pada tahun 2012 keluarlah surat Izin Pendirian berdasarkan keputusan kepala Badan Pelayanan Perizinan Terpadu Kota Tasikmalaya No. 420/9/SK-BPPT/2012 Tanggal 06 Februari 2012.
        </p>
        
        <p class="signature">
        </p>
        

        <h2>Visi dan Misi</h2>

        <h1>Visi</h1>
       <p> 
        Visi
"TERWUJUDNYA LULUSAN YANG CERDAS, AKTIF, KOMPETITIF, ADAPTIF, DAN PRODUKTIF BERLANDASKAN IMAN DAN TAKWA"
"(CAKAP BERIMTAK)"
</p>

<h1>Misi</h1>

<p>Menyiapkan Sumber Daya Manusia yang cerdas dan kompeten baik hardskill maupun softskill.</p>
<p>Meningkatkan dan mengembangkan aktifitas serta kreatifitas seluruh warga sekolah dalam berbagai kegiatan positif.</p>
<p>Mewujudkan manajemen pengelolaan yang efektif, efesien, transparan, akuntabel dan layanan prima.</p>
<p>Menumbuhkan dan mengembangkan potensi dan kemampuan Sumber Daya Manusia yang berdaya saing tinggi melalui berbagai kegiatan akademik maupun non akademik.</p>
<p>Menyelenggarakan berbagai program kegiatan dalam upaya meningkatkan Sumber Daya Manusia yang mampu menyesuaikan dengan perkembangan.</p>
<p>Mengembangkan sarana prasarana dan lingkungan sekolah yang menyenangkan sebagai wadah menumbuhkembangkan daya kreasi dan inovasi untuk menghasilkan produk teknologi tepat guna.</p>
<p>Membangun jiwa wirausaha yang handal melalui pembelajaran Teaching Factory (TEFA) dan Kelas Industri.</p>
<p>Menjalin dan mengembangkan kemitraan dengan Industri dan Dunia Kerja (IDUKA) serta lembaga lainnya yang relevan.</p>
<p>Menanamkan dan membudayakan sikap dan perilaku yang baik pada aktivitas di sekolah maupun dalam kehidupan sehari-hari.</p>



<h2>identitas sekolah</h2>


<h1>nama sekolah</h1>

<p>SMK Negeri 4 Tasikmalaya</p>

<h1>NPSN</h1>

<p>20276063</p>

<h1>Nomor Statistik Sekolah</h1>
<p>401327810004</p>

<h1>Alamat</h1>

<p>Jalan Depok RT 02 RW 05</p>

<h1>Telepon</h1>
<p>+(62)265312059</p>

<h1>Email</h1>
<p>info@smkn4tsm.sch.id</p>




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
  
  