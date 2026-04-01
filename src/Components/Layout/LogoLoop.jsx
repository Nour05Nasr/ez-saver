import React, { useEffect, useRef } from "react";
import spin from '../../Assets/spin.png';
import oscar from '../../Assets/oscar.png';
import far from '../../Assets/far.png';
import seoudi from '../../Assets/seoudi.png';
import car from '../../Assets/car.png';
import kazyon from '../../Assets/kazyon.png';
import metro from '../../Assets/metro.png';
import "./LogoLoop.css";

export default function LogoLoop() {
  const loopRef = useRef(null);

  useEffect(() => {
    const container = loopRef.current;
    if (!container) return;

    // Duplicate content for seamless loop without breaking React
    const original = Array.from(container.children);
    original.forEach((node) => {
      const copy = node.cloneNode(true);
      container.appendChild(copy);
    });
  }, []);

  return (
    <div className="loop-wrapper">
      <div className="loop-track" ref={loopRef}>
        <img src={spin} alt="spinneys" />
        <img src={oscar} alt="Oscar" />
        <img src={far} alt="AMahmoud El Far" />
        <img src={seoudi} alt="seoudi" />
        <img src={car} alt="ccarrefour" />
        <img src={kazyon} alt="kazyon market" />
        <img src={metro} alt="metro market" />
      </div>
    </div>
  );
}

// export default LogoLoop;                                                                                                                                  .loop-wrapper {
