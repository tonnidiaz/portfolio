<template>
    <section id="portfolio" class="my-50px sec">
        <div class="w-70p m-auto cont">
    <h2 class="_title">Portfolio</h2>
        <div class="my-5">
            <p class="text-">Here are some of the finished projects I have worked on.</p>
        </div>
        <div class="flex flex-col gap-4">
            <div class="card  shadow-sm border-1 rounded-md p-5 bg-base-100 flex flex-col md:flex-row items-center gap-4 " v-for="(pr, i) in projects">
                <div class="w-80 relative flex items-center flex-shrink-0 ">
                    <div class="carousel w-full rounded-md">
                        <div
                            v-for="(img, j) in pr.imgs"
                            class="carousel-item relative w-full" :id="`i${i}-j${j}`"
                        >
                            <img :src="img" alt="" />
                            <div
                                class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
                            >
                                <a
                                    :href="j < 1 ?`#i${i}-j${pr.imgs.length - 1}` : `#i${i}-j${j - 1}`"
                                    class="btn btn-circle btn-sm btn-secondary"
                                    >❮</a
                                >
                                <a
                                    :href="j < pr.imgs.length -1 ? `#i${i}-j${j +1}` : `#i${i}-j${0}`"
                                    class="btn btn-circle btn-sm btn-secondary"
                                    >❯</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <div class="">
                     <h2 class="font-bold fs-20 text-center">
                                {{ pr.name }}
                            </h2>
                            <div class="mt-4 text-center">
                                <p>{{ pr.description }}</p>
                                <div class="mt-6 flex items-center gap-2 justify-center flex-wrap">
                                    <div v-for="stack in pr.stacks" class="py-2 px-4 shadow-sm border-1 rounded-md fs-14">
                                        {{stack}}
                                    </div>
                                    
                                </div>
                                <div class="mt-6 flex items-center gap-4 justify-center">
                                        <a class="btn btn-outline btn-primary btn-sm" :href="pr.url" target="_blank">VISIT SITE</a>
                                </div>
                            </div>
                </div>
            </div>
        </div>
        </div>
    
    </section>
</template>

<script setup lang="ts">
type Project = {
    name: string;
    description: string;
    url: string;
    imgs: string[];
    stacks: string[];
};
const projects: Project[] = [
    {
        name: "Taudio",
        description:
            "A beat selling platform built with Nuxt.JS. Artists and Producers can upload their tracks, set the price and share with their audience. With SECURE payments made possible by the PayPal SDK. ",
        url: "https://taudio.vercel.app",
        imgs: [
            "/imgs/taudio/taudio-user.png",
            "/imgs/taudio/Screenshot from 2023-10-02 19-52-38.png",
            "/imgs/taudio/taudio-checkout.png",
            "/imgs/taudio/taudio-track.png",
            "/imgs/taudio/taudio-profile.png",
        ],
        stacks: [
            'Nuxt',
            'Express',
            'MongoDB',
            'SCSS'
        ]
    },
    {
        name: "Tunedstreamz",
        description:
            "An online free movie-streaming site built with Nuxt.JS. Uses the IMDB API to get information about movies and tv shows.",
        url: "https://tstreamz.vercel.app",
        imgs: [
            "/imgs/tstreamz/tsteamz-home.png",
            "/imgs/tstreamz/tstreamz-movie.png",
            "/imgs/tstreamz/tstreamz-search.png",
            "/imgs/tstreamz/tstreamz-tv-1.png",
            "/imgs/tstreamz/tstreamz-tv-2.png",
            "/imgs/tstreamz/tstreamz-shows.png",
            "/imgs/tstreamz/tstreamz-watchlist.png",
            "/imgs/tstreamz/tstreamz-movies.png",
            "/imgs/tstreamz/tstreamz-movies-with.png",
        ],  stacks: [
            'Nuxt',
            'Flask',
            'MongoDB',
            'SCSS'
        ]
    },
];
</script>
