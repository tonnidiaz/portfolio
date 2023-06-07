<template>
  <div class=" mt-50">
    <div class="_row gap-20 jc-c pos-rel bg-">
      <div class="" style="opacity: 0.8">
        <img class="br-4 w-300" src="@/assets/imgs/tonics.jpg" alt="Me" />
      </div>
      <v-card
        style="background-color: #181818; bottom: -30px"
        class="pos-abs w-100p pd-20 br-4"
      >
        <h1 class="header-txt fs-50">
          I'm <span class="color-orange">{{ personalInfo.name }}</span>
        </h1>
        <h3>
          A <span class="color-orange">{{ personalInfo.profession }}</span>
        </h3>
        <div class="mt-4 _row ai-c gap-10">
          <v-btn
            variant="outlined"
            class="border-orange col max-w-150"
            rounded="xl"
            >My work</v-btn
          >
          <v-btn class="bg-orange col max-w-150" rounded="xl">Hire me</v-btn>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { personalInfo } from "@/utils/vars";
</script>
