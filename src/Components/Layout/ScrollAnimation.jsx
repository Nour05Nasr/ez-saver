import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import login from '../../Assets/login.png';
import scan from '../../Assets/scan.png';
import pay from '../../Assets/pay.png';
import H2 from '../../Components/Common/H2';
import "./ScrollAnimation.css";

const steps = [
  { id: 1, margin:"12% 0 0 0", title: "LOG IN", description: "Navigate the store quickly with indoor navigation and AR directions.", img: login, layout: "left", },
  { id: 2, margin:"-8% 0 0 0", title: "SCAN ITEMS", description: "Scan as you go to avoid long checkout lines and track your budget.", img: scan, layout: "right" },
  { id: 3, margin:"-6% 0 0 0", title: "PAY & LEAVE", description: "Finalize your payment in-app and walk out with your groceries.", img: pay, layout: "left" },
];

const Scene = ({ step }) => {
  const ref = useRef(null);
  
  // Track scroll relative to this specific element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Video 2 Style: Elements fade and scale as they enter/leave the center
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  return (
      <div ref={ref} className="scene-section" style={{ margin: step.margin }}>        
      <motion.div 
        className={`content-row ${step.layout}`}
        style={{ opacity, scale }}
      >
        <div className="image-container">
          <img src={step.img} alt={step.title} className="cart-image" />
        </div>
        
        <div className="text-container">
            <div className="flex2" > 
          <div className="step-badge">{step.id}</div>
          <h2>{step.title}</h2>
            </div>
          <p>{step.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const ScrollAnimation = () => {
  return (
    <div className="scroll-container">
      {/* Sticky Background - stays fixed while content scrolls */}
      <div className="sticky-bg" />
      
      <div className="content-layer">
        {steps.map((step) => (
          <Scene key={step.id} step={step} />
        ))}
      </div>
    </div>
  );
};

export default ScrollAnimation;