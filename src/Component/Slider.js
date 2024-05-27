import React from "react";
import { Carousel } from 'react-bootstrap';
import Icon from "../img/f17b979d-32c4-432a-a4c7-f609e9d4f7e9.jpg";
import Ocean from "../img/1685330855_3-96.jpeg";
import Fish from "../img/5355256443_b70c3ea4f2_b.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';


function Slider() {
  return (
    
   <Carousel>
    <Carousel.Item style={{'height': '500px'}}>
        <img
        className="d-block w-100"
        src={Icon}
        alt="First slide"
        />
        <Carousel.Caption>
            <h3>SavellaFish</h3>
            <h1>Company</h1>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{'height': '500px'}}>
        <img
        className="d-block w-100"
        src={Ocean}
        alt="First slide"
        />
        <Carousel.Caption>
            <h3>SavellaFish</h3>
            <h1>Company</h1>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{'height': '500px'}}>
        <img
        className="d-block w-100"
        src={Fish}
        alt="First slide"
        />
        <Carousel.Caption>
            <h3>SavellaFish</h3>
            <h1>Company</h1>
        </Carousel.Caption>
    </Carousel.Item>
   </Carousel>

  );
}

export default Slider;