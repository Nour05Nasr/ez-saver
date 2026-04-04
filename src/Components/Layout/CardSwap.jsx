import { useEffect, useState } from "react";
import time from '../../Assets/time.png';
import money from '../../Assets/money.png';
import effort from '../../Assets/effort.png';
import "./CardSwap.css";

const cardsData = [
  {
    title: "RELIABILITY",
    desc: "Track your spending in real-time and discover personalized discounts",
    img: money,
  },
  {
    title: "SIMPLICITY",
    desc: "Navigate the store quickly with indoor navigation",
    img: effort,
  },
  {
    title: "EFFICIENCY",
    desc: "Save time as you shop and skip long cashier lines",
    img: time,
  },
];

export default function CardSwap() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto swap (like your Figma delay)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardsData.length);
    }, 2400); // same as Figma delay

    return () => clearInterval(interval);
  }, []);

  const getPosition = (index) => {
    if (index === activeIndex) return "center";
    if (index === (activeIndex + 1) % cardsData.length) return "right";
    return "left";
  };

  return (
    <div className="card-stack-container">
      {cardsData.map((card, index) => {
        const position = getPosition(index);

        return (
          <div key={index} className={`card ${position}`}>
            <div className="flex_column">
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}