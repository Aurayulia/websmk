<template>
    <div class="container-fluid">
      <div class="row">
        <!-- Card Pengunjung -->
        <div class="col-lg-6">
          <NuxtLink to="/pengunjung">
            <div class="card bg-pengunjung rounded-5">
              <div class="card-body">
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
  
      <!--Berita Sekolah  -->
      <section class="sambutan">
        <h2>Berita Sekolah</h2>
<h1>Upacara Peringatan Hari Guru</h1>     
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
    background-image: url('~/assets/guru.jpg');
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
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background-color: #007bff;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  