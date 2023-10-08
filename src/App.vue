

<template>
    <Navbar/>
  <main class="bg-base-100">
        <Hero class=""/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
  </main>
</template>
<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import SkillsSection from '@/components/SkillsSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import ContactSection from '@/components/ContactSection.vue';
</script>
<style lang="scss">

$color-card: #141414;
main{
    margin-top: 10rem;
}

@media (max-width: 768px){
    main{
        margin-top: 4rem;
    }
}
 .navbar{
    //background-color: #181818 !important;
   // background-color: $color-card !important;
   color: white;
 }
 .bg-card{
    background-color:  $color-card !important;
 }

 .hero{
   // background-image: url('/imgs/header.jpg') !important;
    //background-color: black !important ;
    .hero-content{
        width: 100%;
    position: relative;
    overflow: hidden;
    }
 }

 .sec{
    @apply flex flex-col justify-center md:px-10 px-4 md:my-40 my-20;
 }
</style>
 