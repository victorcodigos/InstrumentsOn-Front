import React from "react";
import './AboutUs.scss'
import link from './video-bg.mp4'

const LandingPage = () => {
    return (
        <>
        <div className="landingpage">
            <video src={link} autoPlay muted loop className="video-bg"></video>
            <div className="navbar">
                <div className="menu">
                </div>
                <div className="home-text">
                    <h1 className="h1"> ABOUT US: </h1>
                    <p className="p">Thank you for visiting our website!</p>
                </div>
            </div>
        </div>
            <div className="about">
            About Us: Celebrating 7+ Years of Musical Journey
Welcome to our website, a harmonious digital destination that has been echoing with melodies and rhythms for over seven years. 
Since its inception, our platform has been a sanctuary for music enthusiasts, a hub where notes transcend boundaries and genres unite souls.
Our Story Founded in 2014, our website embarked on a mission to create an online haven for music lovers, a space where melodies could flow freely and artists could find a global stage.
Over the years, we've evolved from humble beginnings to become a distinguished name in the digital music realm, with a vibrant community that spans the globe.
A Symphony of Offering. Our journey through the world of music has been enriched by a diverse range of offerings.
From the latest chart-topping hits to hidden gems waiting to be discovered, our platform houses an extensive library that caters to every auditory palate. 
Genres converge here, from the soothing whispers of classical compositions to the heart-pounding beats of electronic dance music.
Community and Connection. At the heart of our platform is a community of music aficionados who share an unbreakable bond with the art form. 
From aspiring artists seeking recognition to seasoned performers looking to reinvent, our website fosters an environment where connections are formed. 
Collaborations are ignited, and musical dreams find nurturing grounds.
Celebrating Artists. Throughout our journey, we've had the privilege of being a launchpad for countless artists who've gone on to capture hearts and headlines.
Our Artist Spotlight series has introduced listeners to emerging talents, offering a glimpse into the stories behind the melodies and the dedication that fuels their creativity.
Innovation in Harmony. In the fast-paced digital landscape, we've kept our fingers on the pulse of innovation.
Our website has undergone transformations that reflect the changing dynamics of technology and user preferences, ensuring seamless navigation and an engaging user experience.
Join the Melod.As we celebrate over seven years of harmonious existence, we invite you to join us on this musical voyage.
Whether you're a casual listener seeking solace in soundscapes or an artist ready to share your symphony with the world, our website welcomes you to become a part of our musical family.
Thank you for being a part of our history, present, and the vibrant future that lies ahead. Here's to many more years of melodies, connections, and musical magic.</div>
</>
    )
}

export default LandingPage
