import React from 'react';

import GalleryButton from '../Components/galleryButton';

import Carousel2 from '../Components/carousel1';


const Home = (props) => {
  return (
    <div className='page-conatiner-box'>
      <div className="carousel-container">
        <Carousel2 />
        
      </div>
      <section className="home-container">
        <div style={{ width: "100%" }}>
          {/* <Carousel1 t={props.t} />    */}
        </div>

        <div className="home-text">
          <p>{props.t("HomeText1")}</p>
          <p>{props.t("HomeText2")}</p>
          <p>{props.t("HomeText3")}</p>
          <p>{props.t("HomeText4")}</p>
        </div>
        <GalleryButton t={props.t} i18n={props.i18n} />
      </section>
    </div>
  );

}
export default Home;