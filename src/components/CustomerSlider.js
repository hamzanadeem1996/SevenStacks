import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Img1 from "../static/images/img1.png";
import Img2 from "../static/images/img2.png";
import Img3 from "../static/images/img3.png";
import Img4 from "../static/images/img4.jpg";
import Img5 from "../static/images/img5.png";
import Img6 from "../static/images/img6.png";
import Img7 from "../static/images/img7.png";

const CustomerSlider = () => {
  const ImageArray = [Img1, Img2, Img3, Img4, Img5, Img6, Img7];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      arrows={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
    >
      {ImageArray.map((image, value) => (
        <div key={value}>
          <img src={image} alt="img1" width={70} height={70} />
        </div>
      ))}
    </Carousel>
  );
};

export default CustomerSlider;
