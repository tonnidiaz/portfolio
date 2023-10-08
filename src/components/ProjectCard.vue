<template>
    <div
        class="card shadow-sm border-1 rounded-md p-5 bg-base-100 flex flex-col md:flex-row items-center gap-4"
    >
        <div
            class="w-50p max-[600px]:w-full relative flex items-center flex-shrink-0 rounded-md"
        >
            <Carousel
                :slide="false"
                class="w-full"
                :pictures="
                    pr.imgs.map((img) => {
                        return {
                            src: img,
                        };
                    })
                "
            />
            <div class="absolute z-[40] bottom-0 right-0">
                <button
                    @click="toggleFullscreen"
                    class="btn bg-black border-none bg-opacity-70 btn-circle"
                >
                    <i class="fi fi-br-expand fs-18 text-white"></i>
                </button>
            </div>
        </div>
        <div class="">
            <h2 class="font-bold fs-20 text-center">
                {{ pr.name }}
            </h2>
            <div class="mt-4 text-center">
                <p>{{ pr.description }}</p>
                <div
                    class="mt-6 flex items-center gap-2 justify-center flex-wrap"
                >
                    <div
                        v-for="stack in pr.stacks"
                        class="py-2 px-4 shadow-sm border-1 rounded-md fs-14"
                    >
                        {{ stack }}
                    </div>
                </div>
                <div class="mt-6 flex items-center gap-4 justify-center">
                    <a
                        class="btn btn-outline btn-primary btn-sm"
                        :href="pr.url"
                        target="_blank"
                        >VISIT SITE</a
                    >
                </div>
            </div>
        </div>
        <div
            v-if="fullScreen"
            :id="`pr-${index}-img-modal`"
            class="tu-modal bg-black bg-opacity-50 flex flex-center sm:p-10 p-2"
        >
            <div
                class="cont w-full relative bg-base-100 rounded-lg shadow-lg rounded-lg flex flex-col justify-center items-center"
            >
            <div class="absolute right-3 top-3 z-[10]">
                    <button
                        class="btn btn-outlin btn-circle bg-gray-600 text-white btn-sm "
                        @click="fullScreen = false"
                    >
                        <i class="fi fi-br-cross fs-12"></i>
                    </button>
                </div>
                <div class="w-full rounded-lg flex-auto bg-gray-100 relative overflow-hidden p-2 justify-center items-center">
                    <slider :items-to-show="1" class="h-full _carousel">
                        <slide v-for="(img, i) in pr.imgs" :key="i" class="relative h-full">
                            <div class="bg-error h-full">
                                <img :src="img" alt="" />
                            </div>
                        </slide>

                        <template #addons>
                            <navigation />
                        </template>
                    </slider>
                </div>
               
                    
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { Project } from "@/utils/types";
import { Carousel } from "flowbite-vue";
import {
    Carousel as slider,
    Slide,
    Pagination,
    Navigation,
} from "vue3-carousel";
import { ref } from "vue";
import $ from "jquery";

const fullScreen = ref(false);

const props = defineProps<{
    pr: Project;
    index: Number;
}>();

const toggleFullscreen = () => {
    fullScreen.value = true;
    $(`#pr-${props.index}-img-modal`)[0].showModal();
};
</script>
