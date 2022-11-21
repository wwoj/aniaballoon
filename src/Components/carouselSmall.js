import React from 'react';

import Carousel from "react-bootstrap/Carousel";
import MiniCarousel_1 from '../Pictures/MiniCarousel_1.png'
import MiniCarousel_2 from '../Pictures/MiniCarousel_2.png'
import MiniCarousel_3 from '../Pictures/MiniCarousel_3.png'
import MiniCarousel_4 from '../Pictures/MiniCarousel_4.png'
import MiniCarousel_5 from '../Pictures/MiniCarousel_5.png'

function CarouselSmallTop(props){

    return (
      <div>
        <Carousel indicators={false} interval={2000}>
          <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={MiniCarousel_1}
                    alt="First slide"
                  />
          </Carousel.Item>
          <Carousel.Item>          
                  <img
                    className="d-block w-100"
                    src={MiniCarousel_2}
                    alt="First slide"
                  />              
          </Carousel.Item>
          <Carousel.Item>          
                  <img
                    className="d-block w-100"
                    src={MiniCarousel_3}
                    alt="First slide"
                  />
               
          </Carousel.Item>
          <Carousel.Item>
          
                  <img
                    className="d-block w-100"
                    src={MiniCarousel_4}
                    alt="First slide"
                  />                
          </Carousel.Item>
          <Carousel.Item>
          
                  <img
                    className="d-block w-100"
                    src={MiniCarousel_5}
                    alt="First slide"
                  />                
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default CarouselSmallTop;