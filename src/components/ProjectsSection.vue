<template>
    <section id="portfolio" class="my-50px sec">
        <div class="w-70p m-auto cont">
    <h2 class="_title">Portfolio</h2>
        <div class="my-5">
            <p class="text-">Here are some of the finished projects I have worked on.</p>
        </div>
        <div class="flex flex-col gap-4">
            <ProjectCard v-for="(pr, i) in projects" :pr="pr" :index="i"/>
              
        </div>
        </div>
    
    </section>
</template>

<script setup lang="ts">

import ProjectCard from './ProjectCard.vue';

import {projects} from '@/utils/vars';

</script>
