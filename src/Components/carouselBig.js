import React from 'react';

import Carousel from "react-bootstrap/Carousel";
import Carousel_1 from '../Pictures/Carousel_1.png'
import Carousel_2 from '../Pictures/Carousel_2.png'
import Carousel_3 from '../Pictures/Carousel_3.png'
import Carousel_4 from '../Pictures/Carousel_4.png'




function CarouselBigTop(props){

    return (
      <div>
        <Carousel indicators={false} interval={2000}>
          <Carousel.Item>            
                  <img
                    className="d-block w-100"
                    src={Carousel_1}
                    alt="First slide"
                  />               
          </Carousel.Item>
          <Carousel.Item>          
                  <img
                    className="d-block w-100"
                    src={Carousel_2}
                    alt="First slide"
                  />                
          </Carousel.Item>
          <Carousel.Item>          
                  <img
                    className="d-block w-100"
                    src={Carousel_3}
                    alt="First slide"
                  />                
          </Carousel.Item>
          <Carousel.Item>          
                  <img
                    className="d-block w-100"
                    src={Carousel_4}
                    alt="First slide"
                  />
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default CarouselBigTop;