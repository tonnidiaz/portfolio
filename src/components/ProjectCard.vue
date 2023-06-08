<template>
  <v-card class="bg-xd-card pd-6">
    <div class="w-100p h-200 _row jc-c pos-rel">
      <img
        style="object-fit: cover"
        class="h-100p w-100p br-5"
        src="@/assets/imgs/tunedstreamz/home.PNG"
        alt="project"
      />
      <div class="pos-abs w-100p h-40 _row jc-sb pdx-4" style="bottom: 0; background-color: rgba(11,11,11,.7);">
        <a v-for="(link, i) in links" :href="link" target="_blank" class="link material-icons fs-25">
         link
        </a>
      </div>
    </div>
    <div class="mt-2 pos-rel">
      <v-expansion-panels>
        <v-expansion-panel :title="name" :text="description">
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </v-card>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  links: {
    type: Object,
  },
  img: {
    type: String,
    default: "/assets/imgs/tonics.jpg",
  },
});
</script>
