import React, { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from "swiper/element/bundle"
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './PayPal.scss'

const Pay = () => {

  const [paid, setPaid] = useState(false);
  const [loaded, setLoaded] = useState(false);
  let paypalRef = useRef();

  const money = {
    price: 100,
    description: "EUR"
  }

  useEffect(() => {
    const script = document.createElement("script");
    const id = "AZdsmuQrptVbS_rupvemVE0PyTRP4buwoCBR_vlfiaDOeXwJuEwG3oEfu-qi56EIoQnl3zjypJ9lKydd"
    script.src = `https://www.paypal.com/sdk/js?client-id=${id}&currency=EUR`
    script.addEventListener("load", () => setLoaded(true))
    document.body.appendChild(script);


    if (loaded) {
      function loadPay() {
        setTimeout(() => {
          window.paypal
            .Buttons({
              createOrder: (data, actions) => {
                return actions.order.create({
                  purchase_units: [{
                    description: money.description,
                    amount: {
                      currency_code: "EUR",
                      value: money.price
                    }
                  }]
                })
              },
              onApprove: async (_, actions) => {
                const order = await actions.order.capture();
                setPaid(true);
                console.log(order);
              }
            })
            .render(paypalRef)
        })
      }
      loadPay();
    }
  })

  const data = [
    { id: "1", image: "https://www.oedro.com/media/wysiwyg/20230713/oepay.jpg" },
    { id: "2", image: "https://www.nicepng.com/png/detail/427-4274726_formas-de-pago-en-el-local-visa-mastercard.png" },
    { id: "3", image: "https://www.boulderbrighton.com/_PublicSite/boulderbrighton/_Perm/newshero_45c1d1f7-e46e-4469-bbf5-cf5f8a901a82.jpg" },
    { id: "4", image: "https://cdn.vectorstock.com/i/preview-1x/45/71/payment-logo-set-vector-44894571.jpg" },
    { id: "5", image: "https://www.coindesk.com/resizer/o0t_kK3oGviMsqktJQFbBsZhIzg=/811x250/filters:quality(80):format(jpg)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/5P5S2FRIONBZ3NM43CXV3VPWOI.png" },

  ];

  return (
    <>
      <div className="payment">
        {paid ? (
          <div>
          </div>
        ) : (
          <h1 className="valor"> {money.description}  {money.price}</h1>
        )}
        <div ref={v => (paypalRef = v)} />
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
    </>
  )
}

export default Pay
