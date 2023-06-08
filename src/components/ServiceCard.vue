<template>
  <v-card class=" h-150 ta-c service-card">
    <div class="m-auto ta-c h-50 _row jc-c color-orange mt-5">
      <span
        ><i class="material-icons fs-40">{{ icon }}</i></span
      >
    </div>
    <h5 class="fs-15 fw-5">{{ servive.toUpperCase() }}</h5>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  servive: {
    type: String,
    default: "Web development",
  },
  icon: {
    type: String,
    default: "code",
  },
});
</script>
