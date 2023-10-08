<template>
    <section id="portfolio" class="my-50px sec">
        <h2 class="text-5xl font-bold text-center">Portfolio & Projects</h2>
        <div class="my-10">
            <p class="text-center">Here are some of the finished projects I have worked on.</p>
        </div>
        <div class="mt grid md:grid-cols-3 grid-cols-1 gap-4">
            <div class="card bg-card shadow-xl rounded-none" style="align-self: flex-start;" v-for="(pr, i) in projects">
                <figure class="p-1">
                    <div class="carousel w-full">
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
                                    class="btn btn-circle btn-sm btn-accent"
                                    >❮</a
                                >
                                <a
                                    :href="j < pr.imgs.length -1 ? `#i${i}-j${j +1}` : `#i${i}-j${0}`"
                                    class="btn btn-circle btn-sm btn-accent"
                                    >❯</a
                                >
                            </div>
                        </div>
                    </div>
                </figure>
                <div class="">
                    <div class="collapse bg-card collapse-arrow rounded-none">
                        <input :title="`project-${i}`" type="checkbox" name="project-details" />
                        <div class="collapse-title text-xl font-medium">
                            <h2 class="card-title fs-16">
                                {{ pr.name }}
                            </h2>
                        </div>
                        <div
                            class="collapse-content bg-card border-t border-base-200"
                        >
                            <p>{{ pr.description }}</p>
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
    },
    {
        name: "Tunedstreamz",
        description:
            "An online free movie-streaming site built with Nuxt.JS. Uses the IMDB API to get information about movies and tv shows.",
        url: "https://www.tunedstreamz.cc",
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
        ],
    },
];
</script>
