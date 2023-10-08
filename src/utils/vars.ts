import type { Project } from "./types";

export const projects: Project[] = [
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