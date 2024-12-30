<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <!-- Logo -->
      <img src="~/assets/Logo.png" alt="Logo" class="logo" />

      <!-- Brand Name -->
      <NuxtLink class="navbar-brand" to="/">SMKN 4 Tasikmalaya</NuxtLink>

      <!-- Navbar Toggler Button for smaller screens -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links (collapse for mobile) -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Beranda</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/profil">Profil</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/berita">Berita</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/galeri">Galeri</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/ekstrakulikuler">ekstrakulikuler</NuxtLink>
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
/* Styling for the logo */
.logo {
  height: 40px;
  margin-right: 10px;
  width: auto;
  /* Ensure the logo does not stretch */
}

/* Navbar brand and links */
.navbar-brand {
  color: #ffffff !important;
  font-weight: bold;
  /* Make brand name stand out */
  font-size: 1.2rem;
  /* Adjust brand size */
}

/* Navbar links */
.nav-link {
  color: #ffffff !important;
  padding: 10px 15px;
  /* Make the clickable area bigger */
  font-size: 1rem;
  /* Adjust font size */
}

/* Hover effect for navbar links */
.nav-link:hover {
  text-decoration: underline;
  color: #f0f0f0 !important;
  /* Light color on hover */
}

/* Ensures navbar layout is correct on smaller screens */
@media (max-width: 992px) {
  .navbar-nav {
    text-align: center;
    /* Center the links on small screens */
  }

  .navbar-nav .nav-item {
    margin: 10px 0;
    /* Add spacing between items */
  }

  .navbar-toggler {
    border-color: #ffffff;
  }

  /* Ensure proper alignment for the navbar brand and items */
  .container-fluid {
    padding: 0 15px;
    /* Allow some padding for smaller screens */
  }
}

/* Further responsive tweaks */
@media (max-width: 576px) {
  .navbar-brand {
    font-size: 1.1rem;
    /* Adjust brand size for extra small screens */
  }

  .logo {
    height: 35px;
    /* Adjust logo size for small screens */
  }

  .nav-link {
    font-size: 0.9rem;
    /* Slightly reduce text size for small screens */
  }
}
</style>
