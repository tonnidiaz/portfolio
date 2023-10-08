<template>
    <div class="hero min-h-screen">
        <div class="hero-content flex-col _content relative" >
            <div class="w-60p cont flex gap-10 flex-col md:flex-row items-center m-auto">
                 <div class="avatar">
                <div class="rounded-full w-40 h-40 bg-primary" >
                    <img
                        alt="hero"
                        src="/imgs/tonics.jpg"
                        class="max-w-sm w-full rounded-lg shadow-2xl"
                    />
                </div>
            </div>

            <div>
                <h1 class="text-5xl font-bold text-center md:text-left">Fullstack developer</h1>
                <p class="py-6 text-center md:text-left">
                    Hi, I'm Thabiso Koza. A dedicated and passionate web and mobile app developer
                </p>
            </div>
            </div>
            <SkillsSection/>
        </div>
       
    </div>
</template>
<script setup lang="ts">
import SkillsSection from "@/components/SkillsSection.vue";

</script>