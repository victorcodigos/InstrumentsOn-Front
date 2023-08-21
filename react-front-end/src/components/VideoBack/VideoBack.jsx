import React from 'react'
import link from './discoBG.mp4'
import './VideoBack.scss'
import Player from '@madzadev/audio-player'

const tracks = [
    {
      url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
      title: "Madza - Chords of Life",
      tags: ["house"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
      title: "Madza - Late Night Drive",
      tags: ["dnb"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Madza - Persistence",
      tags: ["dubstep"],
    },
  ];

const VideoBack = () => {
    return (
        <>
        
        <div className="video">
            <div className="overplay">
            Here, you'll find instruments crafted with precision and passion,
                each waiting to be held, played, and cherished. Our goal is to provide you with not just instruments,
                but also the tools to create unforgettable tunes and memories. Whether you're looking to buy your dream instrument,
                seeking expert advice, or simply browsing for inspiration, our website is your ultimate destination.
                Join our community of music enthusiasts, where beginners and experts alike can share their experiences, learn from each 
                other and celebrate the beauty of music. Our commitment to quality, authenticity, and customer satisfaction sets us apart,
                and we can't wait to assist you on your musical adventure.
                 Thank you for choosing us as your musical partner. Let's embark on a harmonious journey together!</div>
            <video src={link} autoPlay loop muted /> 
        </div>
        <div className="containerX">
        <Player className="audio" 
            trackList={tracks}
            includeTags={false}
            includeSearch={false}
            showPlayList={false}
            autoPlayNextTrack={false}/>
        </div>

        </>
    )
}

export default VideoBack
