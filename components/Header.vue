<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark text-white">
    <div class="container-fluid">
      <img src="../assets/Logo.png" alt="Logo" class="logo">
      <a class="navbar-brand text-white" href="#">smkn 4 tasikmalaya</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink class="nav-link " aria-current="page" to="#">Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="#">beranda</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="#">jurusan</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link disabled" aria-disabled="true">ekstrakulikuler</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<style scoped>
.nav-link {
  color: #fff;
}

.logo {
  width: 50px;
  margin-right: 1rem;
}
</style>