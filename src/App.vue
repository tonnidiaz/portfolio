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
import { onMounted } from "vue";
import 'vue3-carousel/dist/carousel.css'

onMounted(()=>{


})
</script>
<style lang="scss">
$color-card: #141414;

.navbar {
    //background-color: #181818 !important;
    // background-color: $color-card !important;
    color: white;
}

.tu-modal{
    width: 100vw;
   height: 100vh;
    position: fixed;
    z-index: 999;
    top: 0;
    left:0;
    .cont{

    }
    
}
.flex-center{
    justify-content: center;
    align-items: center;
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
    .tu-modal{
        .cont{
            width: auto !important;
            height: 80%;
        }
    }
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

._carousel{
    div:nth-child(1){
    height: 100% !important;


}
img{
    height: 100% !important;
    width: auto !important;
}

.carousel__track{
    height: 100% !important;
    align-items: center
}
button{
    &.carousel__prev, &.carousel__next{
        @apply btn bg-gray-800 text-white btn-circle;
        svg{
            size: 100px !important;
            width: 30px;
            height: 30px;
        }
    }
    &.carousel__next--disabled, &.carousel__prev--disabled{
        pointer-events: none;
        @apply btn-disabled
    }
}
.z-0{
    img{
        display: none !important;
    }
}
.z-30{
    img{
 
 height: 100% !important;
 
}
}

}

</style>
