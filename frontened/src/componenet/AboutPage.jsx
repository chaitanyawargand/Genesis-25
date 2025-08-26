import * as motion from "motion/react-client"
import React, { useRef } from "react";
import "./styles/Aboutpage.css"

const AboutGenesis=()=>{
  const cardRef=useRef(null);
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
        <motion.div
            ref={cardRef}
            className="container"
           onMouseMove={handleMouseMove}
           onMouseLeave={handleMouseLeave}
            whileHover={{
                scale: [null, 1.02, 1.05],
                boxShadow: [
                    "0 4px 10px rgba(0,0,0,0.1)",
                    "0 8px 20px rgba(0,0,0,0.15)",
                    "0 12px 30px rgba(0,0,0,0.2)"
                ],
                transition: { duration: 0.5, times: [0,0.5,1], ease: ["easeInOut","easeOut"] }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <h2 className="heading">🌟 Genesis 2025</h2>
            <p className="paragraph">
                Genesis 2025, the flagship event of the{" "}
                <motion.span
                    whileHover={{ scale:[1,1.1,1.15], color:["#0cdcf7","#0ab8e3","#07a1d0"], transition:{duration:0.4,ease:"easeOut"} }}
                >
                    Institute Innovation Council (IIC)
                </motion.span>{" "}
                at NIT Tiruchirappalli, aims to ignite{" "}
                <motion.span
                    whileHover={{ scale:[1,1.1,1.15], color:["#0cdcf7","#0ab8e3","#07a1d0"], transition:{duration:0.4,ease:"easeOut"} }}
                >
                    innovation
                </motion.span>{" "}
                and{" "}
                <motion.span
                    whileHover={{ scale:[1,1.1,1.15], color:["#0cdcf7","#0ab8e3","#07a1d0"], transition:{duration:0.4,ease:"easeOut"} }}
                >
                    entrepreneurship
                </motion.span>{" "}
                among students. It provides a platform to showcase ideas, connect with
                industry experts 🤝, and get valuable feedback for real-world startup
                ventures. 🏆
            </p>

            <div className="icon-row">
                <motion.span whileHover={{ scale:[1,1.2,1], rotate:[0,10,-10,0] }} transition={{ duration:0.6, ease:"easeInOut" }} className="icon">💡</motion.span>
                <motion.span whileHover={{ scale:[1,1.2,1], rotate:[0,10,-10,0] }} transition={{ duration:0.6, ease:"easeInOut" }} className="icon">🤝</motion.span>
                <motion.span whileHover={{ scale:[1,1.2,1], rotate:[0,10,-10,0] }} transition={{ duration:0.6, ease:"easeInOut" }} className="icon">🏆</motion.span>
            </div>
        </motion.div>
    )
}

export default AboutGenesis;