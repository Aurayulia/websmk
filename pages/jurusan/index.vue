<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <!-- Navigasi ke halaman tambah pengunjung -->
          <NuxtLink to="/pengunjung/tambah" class="card-link">
            <div class="card bg-pengunjung rounded-5">
              <div class="card-body">
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
  };
  </script>
  
  <style scoped>
  .container-fluid {
    padding: 20px;
  }
  
  .card {
    height: 250px;
    box-shadow: 3px 1px 10px #424242;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: scale(1.05);
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
  
  .card-link {
    text-decoration: none;
    color: inherit;
  }
  </style>
  