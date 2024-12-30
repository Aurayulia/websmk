<template>
    <div class="container">
        <!-- Galeri Section -->
        <section class="foto-galeri">
            <h2>Galeri</h2>
            <div class="row">
                <!-- Foto 1 -->
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="foto-item">
                        <img src="~/assets/gambar.jpeg" alt="Foto Kepala Sekolah" class="profile-pic" />
                    </div>
                </div>

                <!-- Foto 2 -->
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="foto-item">
                        <img src="~/assets/prestasi.jpg" alt="Foto Prestasi" class="profile-pic" />
                    </div>
                </div>

                <!-- Foto 3 -->
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="foto-item">
                        <img src="~/assets/prestasi2.jpg" alt="Foto Kegiatan" class="profile-pic" />
                    </div>
                </div>

                <!-- Foto 4 -->
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="foto-item">
                        <img src="~/assets/poto.jpeg" alt="Foto Kegiatan" class="profile-pic" />
                    </div>
                </div>
            </div>
        </section>

        <!-- By Aura Box Section -->
        <div class="by-aura-box">
            <p>Copyright SMKN 4 Tasikmalaya 2024 - 2024</p>
            <h2>Made with By Aura</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GaleriPage',
};
</script>

<style scoped>
/* Styling for gallery */
.foto-galeri {
    padding: 20px;
}

.foto-galeri h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.8rem;
    color: #007bff;
}

/* Styling for each photo item */
.foto-item {
    margin-bottom: 15px;
    text-align: center;
    display: flex;
    justify-content: center;
}

.foto-item img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Responsive grid layout */
.row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
}

.col-lg-4,
.col-md-6,
.col-sm-12 {
    padding: 0;
    box-sizing: border-box;
}

@media (min-width: 768px) {
    .col-md-6 {
        width: 48%;
        /* Set the column width to 48% on medium screens */
    }
}

@media (min-width: 992px) {
    .col-lg-4 {
        width: 32%;
        /* Set the column width to 32% on large screens */
    }
}

/* By Aura Box */
.by-aura-box {
    background-color: #535658;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 40px;
    text-align: center;
    width: 100%;
    /* Full width */
    max-width: 1400px;
    /* Optional: Limit width for very large screens */
    margin-left: auto;
    margin-right: auto;
    /* Center the box */
}

.by-aura-box h2 {
    color: #fff;
    font-size: 24px;
}

.by-aura-box p {
    color: #fff;
    font-size: 16px;
    margin-top: 10px;
}
</style>
