import React from "react";
import banner from "../static/images/banner-img.gif";

const Header = ({ title, desc }) => {
  return (
    <header className="masthead">
      <div className="container header-align">
        <div className="row">
          <div className="col-md-6 masthead-heading text-uppercase">
            {title}
            <p>{desc}</p>
          </div>
          <div className="col-md-6" id="banner-gif">
            <img src={banner} alt="banner" height={550} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
