import type { Project } from "./types";

export const projects: Project[] = [
    {
        name: "Tukoffee",
        description: `<p>Tukoffee is a mobile app for a coffee shop. Users can add/remove products to cart and create/cancel orders.</p>
        <p>Through the Paystack SDK, users can checkout their orders using credit card or any of the available payment gateways. Users can also manage their profile, and track their order as well.</p>

<p>The app has MapBox intergrated for users to: add residential address, delivery address for order and for admins to add store locations.</p>
<p>Customers may write product reviews provided the product was orderd from the app and received by the customers.
The app also has a feedback form where users can send their feedback or ask for help.</p>
<p>
The app also offers a minimal admin dashboard for the owner or stuff to: manage customers, update order status, add/edit products, review product reviews, and a quick link to Paystack Dashboard.
</p>

   `,
        url: "https://tbass.vercel.app/apps/Tukoffee/vlts",
        linkTxt: "Download link",
        stacks: ["Ionic", "Vue", "ExpressJs", "MongoDB", "TailwindCSS"],
        imgs: [
            "/imgs/Tukoffee/1.PNG",
            "/imgs/Tukoffee/2.PNG",
            "/imgs/Tukoffee/3.PNG",
            "/imgs/Tukoffee/4.PNG",
            "/imgs/Tukoffee/5.PNG",
            "/imgs/Tukoffee/6.PNG",
            "/imgs/Tukoffee/7.PNG",
            "/imgs/Tukoffee/8.PNG",
            "/imgs/Tukoffee/9.PNG",
            "/imgs/Tukoffee/10.PNG",
            "/imgs/Tukoffee/11.PNG",
            "/imgs/Tukoffee/12.PNG",
            "/imgs/Tukoffee/13.PNG",
            "/imgs/Tukoffee/14.PNG",
            "/imgs/Tukoffee/15.PNG",
            "/imgs/Tukoffee/16.PNG",
            "/imgs/Tukoffee/17.PNG",
            
        ],
    },
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
        stacks: ["Nuxt", "Express", "MongoDB", "SCSS"],
    },
    {
        name: "Tunedstreamz",
        description:
            "An online free movie-streaming site built with Nuxt.JS. Uses the IMDB API to get information about movies and tv shows.",
        url: "https://tstreamz.vercel.app",
        imgs: [
            "/imgs/tstreamz/tsteamz-home.png",
            "/imgs/tstreamz/tstreamz-tv-1.png",
            "/imgs/tstreamz/tstreamz-tv-2.png",
            "/imgs/tstreamz/tstreamz-shows.png",

            "/imgs/tstreamz/tstreamz-movies.png",
            "/imgs/tstreamz/tstreamz-movie.png",
            "/imgs/tstreamz/tstreamz-movies-with.png",
            "/imgs/tstreamz/tstreamz-search.png",
            "/imgs/tstreamz/tstreamz-watchlist.png",
        ],
        stacks: ["Nuxt", "Flask", "MongoDB", "SCSS"],
    },
    {
        name: "Taudmod",
        description: `<p>Taudmod is an audio editor and convertor mobile app. This app allows users to edit an MP3's meta-tags(title, artist, album,year,genre) as well as the cover image.
        Users can convert an audio file from its format to one of the many common audio file formats provided.  </p>
        <p>So far the app has been tested only on Android devices and it works smoothly.</p>
     <br/><p>The app also allows you to change the audio's bitrate.</p>
        `,
        url: "https://tbass.vercel.app/apps/Taudmod/vlts",
        imgs: [
            "/imgs/Taudmod/1695033699364_100.PNG",
            "/imgs/Taudmod/1695033738966_100.PNG",
            "/imgs/Taudmod/1695033710437_100.PNG",
            "/imgs/Taudmod/1695033750540_100.PNG",
            "/imgs/Taudmod/1695033721292_100.PNG",
        ],
        stacks: ["Flutter", "Rust"],
        linkTxt: "Download link",
    },
];
