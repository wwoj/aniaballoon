import React from 'react';
import { NavLink } from "react-router-dom";

import Picture_1 from '../Pictures/Button_1.png';
import Picture_2 from '../Pictures/Button_2.png';
import Picture_3 from '../Pictures/Button_3.png';
import Picture_4 from '../Pictures/Button_4.png';


import '../Styles/galleryButtonSection.scss';

const GalleryButton = (props) => {
  return (
    <section className="gallery-buttons-section">
      <div className="gallery-button">
        <NavLink className="" end to="/animalballoons">
          {/* <img src={props.i18n.language === "us" ? PictureUS_1 : PicturePL_1} alt="galeryButton-1" /> */}
        <img src={Picture_1} alt="galeryButton-1"/>

        </NavLink>
      </div>
      <div className="gallery-button">
        <NavLink className="" end to="/photobackdrops">
        <img src={Picture_2} alt="galeryButton-2"/>
        </NavLink>
      </div>
      <div className="gallery-button">
        <NavLink className="" end to="/decorations">
        <img src={Picture_3} alt="galeryButton-3"/>
        </NavLink>
      </div>
      <div className="gallery-button">
        <NavLink className="" end to="/events">
        <img src={Picture_4} alt="galeryButton-4"/>
        </NavLink>
      </div>
    </section>
  );
};
export default GalleryButton;

