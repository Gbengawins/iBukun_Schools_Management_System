import React from "react";
import { FaJournalWhills, FaUsers, FaBinoculars } from "react-icons/fa";

export const About = () => {
  return (
    <div className="about">
      <h1><FaJournalWhills /> 
        About us
      </h1>
    </div>
  );
};

export const OurAim = () => {
  return (
    <div className="about">
      <h1><FaUsers /> Our Aim</h1>
    </div>
  );
};

export const OurVision = () => {
  return (
    <div className="about">
      <h1>
        <FaBinoculars /> Vision
      </h1>
    </div>
  );
};
