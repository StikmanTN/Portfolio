import React, { useState } from "react";
import img1 from "../../assets/Testemonial/S1.jpg";
import img2 from "../../assets/Testemonial/S2.jpg";
import img3 from "../../assets/Testemonial/S3.jpg";
import img4 from "../../assets/Testemonial/S4.jpg";
import img5 from "../../assets/Testemonial/S5.jpg";
import img6 from "../../assets/Testemonial/S6.jpg";
import img7 from "../../assets/Testemonial/S7.jpg";
import img8 from "../../assets/Testemonial/S8.jpg";
import img9 from "../../assets/Testemonial/S9.jpg";

import "./testimonial.css";
import {Carousel} from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Testimonial = () => {
  const [items, setItems] = useState([
    { id: 1, title: "", image: img1 },
    { id: 2, title: "",image: img2 },
    { id: 3, title: "" ,image: img3},
    { id: 4, title: "" ,image: img4},
    { id: 5, title: "" ,image: img5},
    { id: 6, title: "" ,image: img6},
    { id: 7, title: "" ,image: img7},
    { id: 8, title: "" ,image: img8},
    { id: 9, title: "" ,image: img9},
  ]);
  return (
    <div className="About-parent " id="Testemonial" data-aos="zoom-in">
      <div className="About-title">
        <span>My Work</span>
      </div>
      <div className="About-Why">
        <span>Some of my photos</span>
      </div>
      <div className="hide-line">
        <div className="line"></div>
        <div className="blob-line">
          <div></div>
        </div>
      </div>
      <Carousel>
  {items.map( e => (<Carousel.Item>
    <img className="image"
      src= {e.image}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* caption if needed */}
    </Carousel.Caption>
  </Carousel.Item>))}
</Carousel>
    </div>
  );
};

export default Testimonial;
