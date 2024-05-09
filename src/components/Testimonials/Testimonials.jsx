import React, { useState } from "react";
import "./Testimonials.css";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { testimonialsData } from "../../data/testimonialsData";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="testimonials">
      <div className="left-t">
        <span>TESTIMONIALS </span>
        <span className="stroke-text">WHAT THEY </span>
        <span>SAY ABOUT US</span>
        <span>{testimonialsData[0].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>

      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="img1" />
        <div className="arrows">
          <img
            onClick={() => {
              selected === 0
                ? setSelected(tLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt="leftArrow"
          />

          <img
            onClick={() => {
              selected === tLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt="rightArrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
