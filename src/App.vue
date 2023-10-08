<template>
    <Navbar />
    <main class="">
        <Hero class="" />
        <AboutSection class="" />
        <ProjectsSection />
        <ContactSection />
    </main>
</template>
<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import AboutSection from "@/components/AboutSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
</script>
<style lang="scss">
$color-card: #141414;

.navbar {
    //background-color: #181818 !important;
    // background-color: $color-card !important;
    color: white;
}
.bg-card {
   // background-color: $color-card !important;
}

.hero {
    // background-image: url('/imgs/header.jpg') !important;
    //background-color: black !important ;
    .hero-content {
        width: 100%;
        position: relative;
        overflow: hidden;
    }
}

.sec {
    @apply flex flex-col justify-center md:px-10 px-4 md:my-40 my-20;

    ._title {
        @apply text-2xl font-bold text-left;
        text-transform: uppercase;
    }
}

.skill-card {
    width: 65px;
    transition: .2s ease-in-out;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
}
@media (max-width: 768px) {
    .sec, .hero{
        .cont{
            width: 100% !important;
        }
    }

    .hero{
        padding-top: 65px;
    }
}
@media (min-width: 768px) {

}

main.bg-base-200{
    --tw-bg-opacity: .2;
    background-color: hsl(var(--b2) / var(--tw-bg-opacity));
}

main{
    background-color: rgb(245, 245, 245);
}

.m-auto{
    margin: 0 auto;
}
</style>
