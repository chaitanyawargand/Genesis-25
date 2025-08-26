import React from "react";
import { motion } from "framer-motion";
import "./styles/Timeline.css";
import { timelinePhases } from "./TimelineData";

const Timeline = () => {
  return (
    <div className="timeline-container">
     <div className="title">
    <p>Event Timeline</p>
    </div>
      <div className="timeline">
        {timelinePhases.map((phase, index) => (
          <motion.div
            key={index}

          className={`timeline-item phase-${index}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="timeline-icon">{phase.icon}</div>
            <div className="timeline-content">
              <h3>{phase.title}</h3>
              <p>{phase.description}</p>
            </div>
          </motion.div>
        ))}
        <div className=" line line-0"></div>
        <div className=" line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>
    </div>
  );
};

export default Timeline;
