import React from 'react'
import './Contact.scss'
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet"
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import { Card } from 'antd';


const Contact = () => {

    const markers = [
        {
            geocode: [39.4603002, -0.3611338],
            popUp: "Hello, we are here! 📍 Plaça del Parc de Montolivet - SPAIN"
        },
        {
            geocode: [-15.7805061, -47.8968503],
            popUp: "Hello, we are here! 📍 Av. Paulista - BRAZIL"
        },
        {
            geocode: [29.5317294, 106.4812493],
            popUp: "Hello, we are here! 📍 Youzuh shizw - CHINA"
        },
        {
            geocode: [15.7500376, 19.1776977],
            popUp: "Hello, we are here! 📍 Adateri shasd - AFRICA"
        },
        {
            geocode: [43.0983983, -106.3458817],
            popUp: "Hello, we are here! 📍 Street of arts - United States"
        },
        {
            geocode: [63.1861784, -123.6778241],
            popUp: "Hello, we are here! 📍 Street os the love - Canada"
        }
    ];

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/149/149059.png",
        iconSize: [38, 38]
    });


    return (
        <>
            <div className="div-main">

                <div className="store2"><h5>Each of our stores offers a unique shopping experience, reflecting the culture and musical preferences of its respective country.
                    We take pride in providing exceptional products and services to musicians worldwide.</h5></div>
                <Card style={{ width: 300, border: "1px solid black", margin: "1%" }}
                    className="card-1">
                    <p><strong>STORE INFORMATION:</strong></p>
                    <p>⚙️:Instruments Quality Solutions S.L by Victor Macedo </p>
                    <p>📍:Plaça de Montolivet - SPAIN </p>
                    <p>🔢:273790, SPAIN  </p>
                    <p>📲:Llámenos: 615 84 06 12 15 </p>
                    <p>📩:instrumentsbyvictor@spain.es</p>
                </Card>
                <Card style={{ width: 300, border: "1px solid black", margin: "1%" }}
                    className="card-1">
                    <p><strong>STORE INFORMATION:</strong></p>
                    <p>⚙️:Instruments Quality Solutions S.L by Victor Macedo </p>
                    <p>📍:Av. Paulista - BRAZIL </p>
                    <p>🔢:15471, BRAZIL </p>
                    <p>📲:Liga: 19 -99845 7118 </p>
                    <p>📩:instrumentsbyvictor@brazil.br</p>
                </Card>
                <Card style={{ width: 300, border: "1px solid black", margin: "1%" }}
                    className="card-1">
                    <p><strong>STORE INFORMATION:</strong></p>
                    <p>⚙️:Instruments Quality Solutions S.L by Victor Macedo </p>
                    <p>📍:Youzuh shizw - CHINA </p>
                    <p>🔢:17821, CHINA</p>
                    <p>📲:Call us: 784 79121 445 </p>
                    <p>📩:instrumentsbyvictor@arigato.ch</p>
                </Card>
                <Card style={{ width: 300, border: "1px solid black", margin: "1%" }}
                    className="card-1">
                    <p><strong>STORE INFORMATION:</strong></p>
                    <p>⚙️:Instruments Quality Solutions S.L by Victor Macedo </p>
                    <p>📍:Adateri shasd - AFRICA</p>
                    <p>🔢:18732, AFRICA </p>
                    <p>📲: Call us: 87 5467 214 </p>
                    <p>📩:instrumentsbyvictor@huhu.af</p>
                </Card>
                <Card style={{ width: 300, border: "1px solid black", margin: "1%" }}
                    className="card-1">
                    <p><strong>STORE INFORMATION:</strong></p>
                    <p>⚙️:Instruments Quality Solutions S.L by Victor Macedo </p>
                    <p>📍: Street of arts - UNITED STATES</p>
                    <p>🔢:57575, UNITED STATES </p>
                    <p>📲:Call us: 159 7852 547 </p>
                    <p>📩:instrumentsbyvictor@hello.us</p>
                </Card>
                <Card style={{ width: 300, border: "1px solid black", margin: "1%" }}
                    className="card-1">
                    <p><strong>STORE INFORMATION:</strong></p>
                    <p>⚙️:Instruments Quality Solutions S.L by Victor Macedo </p>
                    <p>📍:Street os the love - CANADA </p>
                    <p>🔢:11871, CANADA </p>
                    <p>📲:Call us: 75 159 753 12 </p>
                    <p>📩:instrumentsbyvictor@nicely.cd</p>
                </Card>
                <div className="info-store">
                   <div className="store1"> <h4> <img src="https://cdn-icons-png.flaticon.com/128/10601/10601048.png"/></h4>
                    Our Spain store is located in the heart of Valencia.
                    With a wide range of products and a unique shopping experience, our Valencia store is a favorite among locals and tourists alike.</div>

                    <div className="store1"><h4><img src="https://cdn-icons-png.flaticon.com/128/5372/5372653.png"/></h4>
                    Our Brazil store is situated in the vibrant city of Brasilia.
                    Known for its diverse selection and exceptional customer service, this store is a hub for music enthusiasts from all over the country.</div>

                    <div className="store1"><h4><img src="https://cdn-icons-png.flaticon.com/128/323/323363.png"/></h4>
                    In the historic city of Youzuh shizw, you'll find our China store.
                    Offering a curated collection of musical instruments and accessories, this store caters to musicians of all levels and genres.</div>

                    <div className="store1"><h4><img src="https://cdn-icons-png.flaticon.com/128/10562/10562092.png"/></h4> 
                    Our store in Adateri shasd, Africa, is known for its commitment to quality and innovation.
                    From classical instruments to cutting-edge technology, the Africa store is a haven for music lovers.</div>

                   <div className="store1"> <h4><img src="https://cdn-icons-png.flaticon.com/128/8363/8363076.png"/></h4>
                    Nestled in the artistic city of New York, our American store embraces the rich cultural heritage of music.
                    With a touch of elegance, it offers a range of instruments and services tailored to the American music scene.</div>

                    <div className="store1" ><h4><img src="https://cdn-icons-png.flaticon.com/128/197/197430.png"/></h4>
                    Our store in Canada, is a paradise for music enthusiasts.
                    Combining traditional craftsmanship with modern technology, it's a destination for musicians seeking top-notch instruments and accessories.</div>
                </div>
            </div>
            <MapContainer center={[39.4603002, -0.3611338]} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <MarkerClusterGroup>
                    {markers.map((marker => (
                        <Marker position={marker.geocode} icon={customIcon}>
                            <Popup>{marker.popUp}</Popup>
                        </Marker>
                    )
                    )
                    )}
                </MarkerClusterGroup>
            </MapContainer>
        </>
    )
}

export default Contact
