import React from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from "swiper/element/bundle"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./ChatBot.scss";
register();


const data = [
  { id: "1", image: "https://craftypixels.com/placeholder-image/600x315/042550/ffffff.png&text=Sorry%20for%20the%20inconvenience" },
  { id: "2", image: "https://www.vision6.com.au/wp-content/uploads/2019/12/Hero-Image-Plain-Text.jpg" },
  { id: "3", image: "https://www.techwyse.com/wp-content/uploads/2022/07/image2-1-613x345-1.jpg " }
]
const steps = [
  {
    id: "Great",
    message: "Hello, welcome to our website 😁",
    trigger: "Ask name",
  },
  {
    id: "Ask name",
    message: "Please, tell me your name:",
    trigger: "waiting",
  },
  {
    id: "waiting",
    user: true,
    trigger: "Name",
  },
  {
    id: "Name",
    message: "Hello {previousValue}, this chat is only for complaints... if you have one, please tell me!",
    trigger: "Complaint",
  },
  {
    id: "Complaint",
    message: "If you have a complaint, please provide us with more details:",
    trigger: "WaitingComplaint",
  },
  {
    id: "WaitingComplaint",
    user: true,
    trigger: "ConfirmComplaint",
  },
  {
    id: "ConfirmComplaint",
    message: "I am so sorry to hear that. By the way thank you for sharing your complaint or what you feel. Would you like to send an email to our customer support team about this?",
    trigger: "ComplaintConfirmation",
  },
  {
    id: "ComplaintConfirmation",
    options: [
      {
        value: "yes",
        label: "Yes, send email",
        trigger: "SendEmail",
      },
      {
        value: "no",
        label: "No, thanks",
        trigger: "MoreOptions",
      },
    ],
  },
  {
    id: "SendEmail",
    message: "Sending email... Please wait a moment.",
    end: true,
  },
  {
    id: "MoreOptions",
    message: "Is there anything else you would like to know?",
    trigger: "MoreOptionsChoice",
  },
  {
    id: "MoreOptionsChoice",
    options: [
      {
        value: "yes",
        label: "Yes",
        trigger: "MoreOptionsYes",
      },
      {
        value: "no",
        label: "No",
        trigger: "Goodbye",
      },
    ],
  },
  {
    id: "MoreOptionsYes",
    message: "Great! What else can I assist you with?",
    trigger: "waiting",
  },
  {
    id: "Goodbye",
    message: "Thank you for chatting with us! Have a great day!",
    end: true,
  },

];


const ChatBots = () => {

  return (
    <>
      <div className="complain">
        <h4 className="chat"> CHATBOT SOLUTION</h4>
        At Instruments Quality Solutions S.L by Victor Macedo, we value your feedback and strive to provide the best experience possible.
        We understand that sometimes issues may arise, and we are here to assist you with resolving any concerns you may have.
        Our Complaint Resolution Center is dedicated to addressing your feedback, complaints, and suggestions.
        Whether you've encountered an issue with our products, services, or your overall experience, we want to know about it so we can make improvements.
        Below, you can explain to our ChatBot what you did not like, we will provide some solution for you. Thank you!
        <Segment floated="right">
          <ChatBot steps={steps}>
          </ChatBot>
        </Segment>
        <Swiper
          slidesPerView={1} pagination={{ clickable: true }} navigation autoplay={{ delay: 3000 }} >
          {data.map((item) => (
            <SwiperSlide className="swiper-slideX" key={item.id}>
              <img className="imageX" src={item.image} alt="Slider" />
            </SwiperSlide>))}
        </Swiper>
      </div>
    </>
  )
}

export default ChatBots
