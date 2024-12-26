<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
    <div class="container-fluid">
      <img src="../assets/Logo.png" alt="Logo" class="logo" />
      <NuxtLink class="navbar-brand" to="/">SMKN 4 Tasikmalaya</NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="./">Beranda</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="./profil">profil</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link"  to="./Berita">Berita</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link"  to="./galeri">galeri</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link"  to="./Eksrakulikuler">Ektrakulikuler</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.logo {
  height: 40px;
  margin-right: 10px;
}
.navbar-brand {
  color: #ffffff !important;
}
.nav-link {
  color: #ffffff !important;
}
.nav-link:hover {
  text-decoration: underline;
}
</style>
