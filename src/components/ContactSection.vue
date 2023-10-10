<template>
    <section class="sec bg-base-100" id="contact">
        <div class="w-70p p-4 m-auto cont">
             <h2 class="_title text-center">Contact me</h2>
        <div class="my-5">
            <p class="mb-3 text-center">If you are in need of my services or you'd like to collaborate please hit me up!</p>
            <div class="flex items-center justify-center gap-x-3 flex-wrap text-gray-500 fs-14">
                    <div class="flex contact items-center  gap-x-1">
                <span class="p-2 rounded-full w-40px h-40px flex items-center justify-center">
                    <i class="fi fi-br-envelope  mt-1"></i>
                </span>
                <span>{{ contactDetails.email }}</span>
            </div>
            <div class="flex contact items-center  gap-x-1">
                <span class="p-2 rounded-full w-40px h-40px flex items-center justify-center">
                    <i class="fi fi-br-envelope  mt-1"></i>
                </span>
                <span>{{ contactDetails.email2 }}</span>
            </div>
            <div class="flex contact items-center  gap-x-1">
                <span class="p-2 rounded-full w-40px h-40px flex items-center justify-center">
                    <i class="fi fi-br-mobile-notch  mt-1"></i>
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
        email2: 'tonnidiazed@gmail.com',
        phone: '+27 76 919 6476'
    }
</script>