import React from 'react'
import Player from '@madzadev/audio-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from "swiper/element/bundle"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Audio.scss';
register();

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


const data = [
  { id: "1", image: "https://www.jpfoundation.or.id/wp-content/uploads/2023/02/Cara-Mencari-Chord-Lengkap-di-Chordtela.jpg" },
  { id: "2", image: "https://p4.wallpaperbetter.com/wallpaper/7/637/67/guitar-wallpaper-preview.jpg" },
  { id: "3", image: "https://p4.wallpaperbetter.com/wallpaper/59/833/316/battery-drums-wallpaper-preview.jpg " },
  { id: "4", image: "https://swall.teahub.io/photos/small/101-1016329_piano-youtube-channel-art.jpg" },
  { id: "5", image: "https://primary.jwwb.nl/public/g/a/e/temp-rmcfjmmckkwewnwwepst/feu1jwwbnl_public_g_a_e_temp-rmcfjmmckkwewnwwepst_bv03wq_image-771.png" },
  { id: "6", image: "https://img.freepik.com/fotos-premium/flauta-sobre-fondo-negro-palabra-musica_916191-2604.jpg" },
  { id: "7", image: "https://closler.org/wp-content/uploads/2022/09/iStock-1336135980.jpg" }

];
const Audio = () => {

  return (
    <>
      <div className="music-on">
        <h4>Music holds a special place in our lives for numerous reasons. Here's why music is so wonderful:</h4>
        Emotional Expression:
        Music provides a powerful outlet for expressing emotions that might be hard to put into words. Whether it's joy, sadness, love, or anger, music allows us to connect with our feelings in a profound way.
        Stress Relief:
        Listening to music has been proven to reduce stress and anxiety. The melodies and rhythms can have a soothing effect on our minds, helping us relax and unwind.
        Inspiration and Creativity:
        Music has the ability to spark creativity and inspire us to think outside the box. Many artists and creators find that music fuels their imaginative processes.
        Connection and Unity:
        Music brings people together. It's a universal language that transcends cultural and language barriers, fostering a sense of unity among individuals from diverse backgrounds.
        Enhanced Focus and Productivity:
        The right music can boost focus and productivity. Many find that music helps them concentrate while working, studying, or engaging in other tasks.
        Memories and Nostalgia:
        Certain songs can transport us back in time, evoking memories and nostalgia. These musical time capsules hold emotions and experiences that remain close to our hearts.
      </div>
      <div className="containerSlider">
        <Swiper
          slidesPerView={1} pagination={{ clickable: true }} navigation autoplay={{ delay: 3000 }} >
          {data.map((item) => (
            <SwiperSlide className="swiper-slide" key={item.id}>
              <img className="image" src={item.image} alt="Slider" />
            </SwiperSlide>))}
        </Swiper>
      </div>
      <div className="container">
        <Player className="audio"
          trackList={tracks}
          includeTags={false}
          includeSearch={false}
          showPlayList={false}
          autoPlayNextTrack={false}
          defaultPlayIndex={0}
          autoplay={true} />
      </div>
    </>
  )
}

export default Audio
