import React from 'react'
import Player from '@madzadev/audio-player'
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from "swiper/element/bundle"
import './Audio.scss';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
      <div className="containerSlider">
        <Swiper
          slidesPerView={1} pagination={{ clickable: true }} navigation autoplay={{ delay: 3000 }} >
          {data.map((item) => (
            <SwiperSlide className="swiper-slide" key={item.id}>
              <img className="image" src={item.image} alt="Slider" />
            </SwiperSlide>))}
        </Swiper>
      </div>
      <div class="container">
        <Player className="audio"
          trackList={tracks}
          includeTags={false}
          includeSearch={false}
          showPlayList={false}
          autoPlayNextTrack={false} />
      </div>
    </>
  )
}

export default Audio
