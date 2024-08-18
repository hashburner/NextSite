export interface PortfolioItem {
    title: string;
    artist: string;
    image: string;
    audioSrc: string;
    spotifyLink?: string;
    credits: string;
    type: 'Album' | 'Single' | 'EP';
    genre: string;
  }
  
  export const portfolioData: PortfolioItem[] = [
    { 
      title: "What Was the Question?", 
      artist: "Curtisy", 
      image: "/images/placeholder_artwork_1.jpg", 
      audioSrc: "/audio/03 Glue Master.wav",
      spotifyLink: "https://open.spotify.com/album/2fKkKKLxeXHlKknCUckPJN?si=2PLDvfqQQ42HQ3pZY5Nj8g",
      credits: "Mixed and Mastered by Killian Taylor\nProduced by Curtisy\nRecorded at Soundwave Studios",
      type: "Album",
      genre: "Hip Hop"
    },
    { 
      title: "Four Winds Echo On The Stave", 
      artist: "Leon McMahon", 
      image: "/images/placeholder_artwork_2.jpg",
      audioSrc: "/audio/four_winds_sample.mp3",
      credits: "Produced and Mixed by Killian Taylor\nMastered at Abbey Road Studios",
      type: "Single",
      genre: "Rock"
    },
    { 
      title: "Weed Addict", 
      artist: "Peer Pleasure", 
      image: "/images/Weed%20Addict_album_cover.jpg",
      audioSrc: "/audio/weed_addict_sample.mp3",
      credits: "Engineered and Mixed by Killian Taylor\nProduced by Peer Pleasure\nMastered by Bob Ludwig",
      type: "EP",
      genre: "Electronic"
    },
    { 
      title: "Shiny Things", 
      artist: "Evie", 
      image: "/images/Shiny%20Things_album_cover.jpg",
      audioSrc: "/audio/shiny_things_sample.mp3",
      credits: "Produced, Mixed, and Mastered by Killian Taylor\nRecorded at Sunset Sound",
      type: "Album",
      genre: "Pop"
    },
    { 
      title: "Lost & Bound", 
      artist: "Yawa", 
      image: "/images/Lost%20&%20Bound_album_cover.jpg",
      audioSrc: "/audio/lost_and_bound_sample.mp3",
      credits: "Mixed by Killian Taylor\nProduced by Rick Rubin\nMastered at Sterling Sound",
      type: "Single",
      genre: "Rock"
    },
  ];