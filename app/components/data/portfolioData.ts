export interface PortfolioItem {
  id: string;
  title: string;
  artist: string;
  image: string;
  audioSrc: string;
  spotifyLink?: string;
  credits: string;
  type: 'Album' | 'Single' | 'EP';
  genre: string;
  tracklist?: string[];
}

export const portfolioData: PortfolioItem[] = [
    { 
      id: "1",
      title: "What Was the Question?", 
      artist: "Curtisy", 
      image: "/images/Covers/placeholder_artwork_1.jpg", 
      audioSrc: "/audio/03 Glue Master.wav",
      spotifyLink: "https://open.spotify.com/album/2fKkKKLxeXHlKknCUckPJN?si=2PLDvfqQQ42HQ3pZY5Nj8g",
      credits: "Mixed and Mastered by Killian Taylor\nProduced by Curtisy\nRecorded at Soundwave Studios",
      type: "Album",
      genre: "Hip Hop"
    },
    { 
      id: "2",
      title: "Four Winds Echo On The Stave", 
      artist: "Leon McMahon", 
      image: "/images/Covers/placeholder_artwork_2.jpg",
      audioSrc: "/audio/four_winds_sample.mp3",
      credits: "Produced and Mixed by Killian Taylor\nMastered at Abbey Road Studios",
      type: "Single",
      genre: "Rock"
    },
    { 
      id: "3",
      title: "Weed Addict", 
      artist: "Peer Pleasure", 
      image: "/images/Covers/Weed%20Addict_album_cover.jpg",
      audioSrc: "/audio/weed_addict_sample.mp3",
      credits: "Engineered and Mixed by Killian Taylor\nProduced by Peer Pleasure\nMastered by Bob Ludwig",
      type: "EP",
      genre: "Electronic"
    },
    { 
      id: "4",
      title: "Shiny Things", 
      artist: "Evie", 
      image: "/images/Covers/Shiny%20Things_album_cover.jpg",
      audioSrc: "/audio/shiny_things_sample.mp3",
      credits: "Produced, Mixed, and Mastered by Killian Taylor\nRecorded at Sunset Sound",
      type: "Album",
      genre: "Pop"
    },
    { 
      id: "5",
      title: "Lost & Bound", 
      artist: "Yawa", 
      image: "/images/Covers/Lost%20&%20Bound_album_cover.jpg",
      audioSrc: "/audio/lost_and_bound_sample.mp3",
      credits: "Mixed by Killian Taylor\nProduced by Rick Rubin\nMastered at Sterling Sound",
      type: "Single",
      genre: "Rock"
    },
    { 
        id: "6",
        title: "Dumping Ground Vol. 1", 
        artist: "D*mp", 
        image: "/images/Covers/Dumping%20Ground%20vol.1_album_cover.jpg", 
        audioSrc: "/audio/dumping_ground_sample.mp3",
        spotifyLink: "https://open.spotify.com/album/2fKkKKLxeXHlKknCUckPJN?si=2PLDvfqQQ42HQ3pZY5Nj8g",
        credits: "Mixed and Mastered by Killian Taylor\nProduced by Curtisy\nRecorded at Soundwave Studios",
        type: "Album",
        genre: "Hip Hop/Electronic",
        tracklist: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"]
      },
    
      { 
        id: "7",
        title: "CUPBOARD CLEARING", 
        artist: "Peter McMahon", 
        image: "/images/Covers/cupboard%20clearing_album_cover.jpg", 
        audioSrc: "/audio/cupboard_clearing_sample.mp3",
        spotifyLink: "https://open.spotify.com/album/2fKkKKLxeXHlKknCUckPJN?si=2PLDvfqQQ42HQ3pZY5Nj8g",
        credits: "Mixed and Mastered by Killian Taylor\nProduced by Curtisy\nRecorded at Soundwave Studios",
        type: "Album",
        genre: "Acoustic/Folk",
        tracklist: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5"]
      },
      { 
        id: "8",
        title: "BUSY ON THE BEAT (B.O.T.B)", 
        artist: "V Sensei", 
        image: "/images/Covers/busy%20on%20the%20beat%20(b.o.t.b)_track_cover.jpg",
        audioSrc: "/audio/four_winds_sample.mp3",
        credits: "Produced and Mixed by Killian Taylor\nMastered at Abbey Road Studios",
        type: "Single",
        genre: "Pop/Rap",
        tracklist: ["BUSY ON THE BEAT (B.O.T.B)"]
      },
      { 
        id: "9",
        title: "Funny Guy", 
        artist: "Binmen", 
        image: "/images/Covers/funny%20guy_track_cover.jpg",
        audioSrc: "/audio/weed_addict_sample.mp3",
        credits: "Engineered and Mixed by Killian Taylor\nProduced by Peer Pleasure\nMastered by Bob Ludwig",
        type: "EP",
        genre: "Electronic",
        tracklist: ["Track 1", "Track 2", "Track 3"]
      },
      { 
        id: "10",
        title: "The Avenue", 
        artist: "Helen Agnes D", 
        image: "/images/Covers/the%20avenue_album_cover.jpg",
        audioSrc: "/audio/shiny_things_sample.mp3",
        credits: "Produced, Mixed, and Mastered by Killian Taylor\nRecorded at Sunset Sound",
        type: "Album",
        genre: "Pop",
        tracklist: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5", "Track 6"]
      },
      { 
        id: "11",
        title: "Exit Pyro", 
        artist: "Mik Pyro", 
        image: "/images/Covers/exit%20pyro_album_cover.jpg",
        audioSrc: "/audio/lost_and_bound_sample.mp3",
        credits: "Mixed by Killian Taylor\nProduced by Rick Rubin\nMastered at Sterling Sound",
        type: "Single",
        genre: "Rock",
        tracklist: ["Lost & Bound"]
      },
      {
        id: "12",
        title: "Lost in a Dream",
        artist: "Eoin Kelly",
        image: "/images/Covers/lost%20in%20a%20dream_track_cover.jpg",
        audioSrc: "/audio/placeholder_audio.mp3",
        credits: "Produced and Mixed by Killian Taylor",
        type: "Single",
        genre: "Acoustic",
        tracklist: ["Neon Nights", "Retro Vibes", "Digital Love", "Cyberpunk City", "Synthwave Sunset"]
      },
      {
        id: "13",
        title: "Rest in Bits",
        artist: "Peer Pleasure",
        image: "/images/Covers/rest%20in%20bits_track_cover.jpg",
        audioSrc: "/audio/placeholder_audio.mp3",
        credits: "Recorded and Mixed by Killian Taylor",
        type: "EP",
        genre: "Folk",
        tracklist: ["Whispers in the Wind", "Mountain Song", "River's Edge"]
      },
      {
        id: "14",
        title: "Just Tonight",
        artist: "Last Apollo",
        image: "/images/Covers/just%20tonight_track_cover.jpg",
        audioSrc: "/audio/placeholder_audio.mp3",
        credits: "Mastered by Killian Taylor",
        type: "Album",
        genre: "Hip Hop",
        tracklist: ["Intro", "City Lights", "Rhythm & Rhyme", "Outro"]
      },
      {
        id: "15",
        title: "Deep Fat Fried",
        artist: "SoftDrink Millionaire",
        image: "/images/Covers/deep%20fat%20fried_track_cover.jpg",
        audioSrc: "/audio/placeholder_audio.mp3",
        credits: "Recorded, Mixed, and Mastered by Killian Taylor",
        type: "Album",
        genre: "Rock",
        tracklist: ["Suburban Anthem", "Garage Dreams", "Backyard Party", "Neighborhood Watch"]
      },
      {
        id: "16",
        title: "Shopping Local",
        artist: "Binmen",
        image: "/images/Covers/shopping%20local_album_cover.jpg",
        audioSrc: "/audio/placeholder_audio.mp3",
        credits: "Mixed by Killian Taylor",
        type: "Album",
        genre: "Jazz",
        tracklist: ["Smooth Sax", "Piano Blues", "Trumpet Solo", "Midnight Jam"]
      },
      {
        id: "17",
        title: "World Cup!",
        artist: "Ahmed, with Love.",
        image: "/images/Covers/world%20cup!_album_cover.jpg",
        audioSrc: "/audio/placeholder_audio.mp3",
        credits: "Mixed by Killian Taylor",
        type: "Album",
        genre: "Jazz",
        tracklist: ["Smooth Sax", "Piano Blues", "Trumpet Solo", "Midnight Jam"]
      },
      {
        id: "18",
        title: "3 to 11",
        artist: "Jaq Reidy",
        image: "/images/Covers/3%20to%2011_album_cover.jpg",
        audioSrc: "/audio/placeholder_audio.mp3",
        credits: "Mixed by Killian Taylor",
        type: "Album",
        genre: "Jazz",
        tracklist: ["Smooth Sax", "Piano Blues", "Trumpet Solo", "Midnight Jam"]
      },
      {
        id: "19",
        title: "help wanted.",
        artist: "Ahmed, with Love.",
        image: "/images/Covers/help%20wanted._album_cover.jpg",
        audioSrc: "/audio/placeholder_audio.mp3",
        credits: "Mixed by Killian Taylor",
        type: "Album",
        genre: "Jazz",
        tracklist: ["Smooth Sax", "Piano Blues", "Trumpet Solo", "Midnight Jam"]
      },
      {
        id: "20",
        title: "Dalston Juction",
        artist: "D*mp",
        image: "/images/Covers/Dalston Junction_album_cover.jpg",
        audioSrc: "/audio/placeholder_audio.mp3",
        credits: "Mixed by Killian Taylor",
        type: "Album",
        genre: "Jazz",
        tracklist: ["Smooth Sax", "Piano Blues", "Trumpet Solo", "Midnight Jam"]
      },

  ];