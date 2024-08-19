import type { Config } from "tailwindcss";
import { PortfolioItem } from "./app/components/ClientComponent";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
export const portfolioData: PortfolioItem[] = [
    {
        title: "What Was the Question?",
        artist: "Curtisy",
        image: "images/placeholder_artwork_1.jpg",
        audioSrc: "audio/03 Glue Master.wav",
        spotifyLink: "https://open.spotify.com/album/2fKkKKLxeXHlKknCUckPJN?si=2PLDvfqQQ42HQ3pZY5Nj8g",
        credits: "Mixed and Mastered by Killian Taylor\nProduced by Curtisy\nRecorded at Soundwave Studios"
    },
    {
        title: "Four Winds Echo On The Stave",
        artist: "Leon McMahon",
        image: "images/placeholder_artwork_2.jpg",
        credits: "Produced and Mixed by Killian Taylor\nMastered at Abbey Road Studios"
    },
    {
        title: "Weed Addict",
        artist: "Peer PLeasure",
        image: "images/Weed%20Addict_album_cover.jpg",
        credits: "Engineered and Mixed by Killian Taylor\nProduced by Peer Pleasure\nMastered by Bob Ludwig"
    },
    {
        title: "Shiny Things",
        artist: "Evie",
        image: "images/Shiny%20Things_album_cover.jpg",
        credits: "Produced, Mixed, and Mastered by Killian Taylor\nRecorded at Sunset Sound"
    },
    {
        title: "Lost & Bound",
        artist: "Yawa",
        image: "images/Lost%20&%20Bound_album_cover.jpg",
        credits: "Mixed by Killian Taylor\nProduced by Rick Rubin\nMastered at Sterling Sound"
    },
];
