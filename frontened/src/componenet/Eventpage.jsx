import React, { useRef } from "react";
import "./styles/Eventpage.css";
import { FaLightbulb, FaHandshake, FaGavel, FaMoneyBillWave } from "react-icons/fa";
const events = [
  { icon: <FaLightbulb />, title: "Pitching", description: "Showcase your innovative ideas to expert judges." },
  { icon: <FaHandshake />, title: "Networking", description: "Connect with entrepreneurs, mentors, and investors." },
  { icon: <FaGavel />, title: "Jury", description: "Expert jury evaluates your ideas and provides guidance." },
  { icon: <FaMoneyBillWave />, title: "Cash Prizes", description: "Win exciting rewards and funding for your project." }
];
const EventCard = ({ event }) => {
  const cardRef = useRef(null);
const handleMouseMove = (e) => {
  const card=cardRef.current;
  const rect=card.getBoundingClientRect();
  const x=e.clientX-rect.left;
  const y=e.clientY-rect.top;
  const centerX=rect.width/2;
  const centerY=rect.height/2;
  const rotateX=((y-centerY)/centerY)*15;
  const rotateY=((centerX-x)/centerX)*15;
  card.style.transform = `translateY(-10px) scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};
  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `translateY(0) scale(1) rotateX(0) rotateY(0)`;
  };
  return (
    <div
      ref={cardRef}
      className="event-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="event-icon">{event.icon}</div>
      <h3 className="event-title">{event.title}</h3>
      <p className="event-desc">{event.description}</p>
    </div>
  );
};
const EventHighlights = () => {
  return (
    <>
    <div className="title">
        <p>Events</p>
    </div>
    <div className="event-container">
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
    </>
  );
};

export default EventHighlights;
