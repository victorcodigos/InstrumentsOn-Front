import React, { useEffect, useState, useRef } from 'react'
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
    </>
  )
}

export default Pay
