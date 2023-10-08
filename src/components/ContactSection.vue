<template>
    <section class="sec bg-base-100" id="contact">
        <div class="w-70p p-4 m-auto cont">
             <h2 class="_title">Contact me</h2>
        <div class="my-5">
            <p class="mb-3 text-center">If you are in need of my services or you'd like to collaborate please hit me up!</p>
            <div class="flex items-center justify-center gap-h-3 flex-wrap">
                    <div class="flex contact items-center  gap-3">
                <span class="p-2 rounded-full w-40px h-40px flex items-center justify-center">
                    <i class="fi fi-br-envelope fs-25 mt-2"></i>
                </span>
                <span>{{ contactDetails.email }}</span>
            </div>
            <div class="flex contact items-center  gap-3">
                <span class="p-2 rounded-full w-40px h-40px flex items-center justify-center">
                    <i class="fi fi-br-envelope fs-25 mt-2"></i>
                </span>
                <span>{{ contactDetails.email2 }}</span>
            </div>
            <div class="flex contact items-center  gap-3">
                <span class="p-2 rounded-full w-40px h-40px flex items-center justify-center">
                    <i class="fi fi-br-mobile-notch fs-25 mt-2"></i>
                </span>
                <span>{{ contactDetails.phone }}</span>
            </div>
            </div>
        
        </div>


        </div>
       </section>
</template>
<script setup lang="ts">
import { Carousel, Button } from 'flowbite-vue'

    const contactDetails = {
        email: 'obediencekoza@gmail.com',
        email2: 'openbytes@yahoo.com',
        phone: '+27 76 919 6476'
    }
</script>