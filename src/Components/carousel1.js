import React from 'react';

import Carousel from "react-bootstrap/Carousel";
import Carousel_1 from '../Pictures/Carousel_1.png'
import Carousel_2 from '../Pictures/Carousel_2.png'
import Carousel_3 from '../Pictures/Carousel_3.png'
import Carousel_4 from '../Pictures/Carousel_4.png'
import MiniCarousel_1 from '../Pictures/MiniCarousel_1.png'
import MiniCarousel_2 from '../Pictures/MiniCarousel_2.png'
import MiniCarousel_3 from '../Pictures/MiniCarousel_3.png'
import MiniCarousel_4 from '../Pictures/MiniCarousel_4.png'

import Media from 'react-media';


function CarouselTop(props){

    return (
      <div>
        <Carousel indicators={false} interval={2000}>
          <Carousel.Item>
            <Media queries={{ small: { maxWidth: 1100 } }}>
              {(matches) =>
                matches.small ? (
                  <img
                    className="d-block w-100"
                    src={MiniCarousel_1}
                    alt="First slide"
                  />
                ) : (
                  <img
                    className="d-block w-100"
                    src={Carousel_1}
                    alt="First slide"
                  />
                )
              }
            </Media>
          </Carousel.Item>
          <Carousel.Item>
          <Media queries={{ small: { maxWidth: 1100 } }}>
              {(matches) =>
                matches.small ? (
                  <img
                    className="d-block w-100"
                    src={MiniCarousel_2}
                    alt="First slide"
                  />
                ) : (
                  <img
                    className="d-block w-100"
                    src={Carousel_2}
                    alt="First slide"
                  />
                )
              }
            </Media>
          </Carousel.Item>
          <Carousel.Item>
          <Media queries={{ small: { maxWidth: 1100 } }}>
              {(matches) =>
                matches.small ? (
                  <img
                    className="d-block w-100"
                    src={MiniCarousel_3}
                    alt="First slide"
                  />
                ) : (
                  <img
                    className="d-block w-100"
                    src={Carousel_3}
                    alt="First slide"
                  />
                )
              }
            </Media>
          </Carousel.Item>
          <Carousel.Item>
          <Media queries={{ small: { maxWidth: 1100 } }}>
              {(matches) =>
                matches.small ? (
                  <img
                    className="d-block w-100"
                    src={MiniCarousel_4}
                    alt="First slide"
                  />
                ) : (
                  <img
                    className="d-block w-100"
                    src={Carousel_4}
                    alt="First slide"
                  />
                )
              }
            </Media>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default CarouselTop;