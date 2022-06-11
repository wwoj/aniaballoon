import React from "react";

const Loader = ()=>{
    return (
      <div>
        <div className="about">
          <a
            className="bg_links social portfolio"
            href="https://www.rafaelalucas.com"
            target="_blank"
          >
            <span className="icon"></span>
          </a>
          <a
            className="bg_links social dribbble"
            href="https://dribbble.com/rafaelalucas"
            target="_blank"
          >
            <span className="icon"></span>
          </a>
          <a
            className="bg_links social linkedin"
            href="https://www.linkedin.com/in/rafaelalucas/"
            target="_blank"
          >
            <span className="icon"></span>
          </a>
        </div>

        <div className="content">
          <div className="loading">
            <p>loading</p>
            <span></span>
          </div>
        </div>
      </div>
    );
}
export default Loader;