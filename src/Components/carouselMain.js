import React from 'react';

import CarouselBigTop from './carouselBig';
import CarouselSmallTop from './carouselSmall';

import Media from 'react-media';


function CarouselTop(props){

    return (
      <div>
       <Media queries={{ small: { maxWidth: 1100 } }}>
              {(matches) =>
                matches.small ? (
                  <CarouselSmallTop/>
                ) : (
                  <CarouselBigTop/>
                )
              }
            </Media>
      </div>
    );
}

export default CarouselTop;