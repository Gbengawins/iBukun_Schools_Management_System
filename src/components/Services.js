import React from "react";
import { TbEar } from "react-icons/tb";
import { ImPencil } from "react-icons/im";
import { FaPeopleArrows } from "react-icons/fa";
import { GiArrowsShield } from "react-icons/gi";


export const Services = () => {
  return (
    <div className="services">
      <h1><ImPencil/>Services</h1>
    </div>
  );
};

export const ServicesOne = () => {
  return (
    <div className="services">
      <h1> <TbEar /> Guidance & Counselling Services</h1>
    </div>
  );
};

export const ServicesTwo = () => {
  return (
    <div className="services">
      <h1><FaPeopleArrows/> Interpersonal & cultural Services</h1>
    </div>
  );
};

export const ServicesThree = () => {
  return (
    <div className="services">
      <h1> <GiArrowsShield /> Protective Services
      </h1>
    </div>
  );
};
