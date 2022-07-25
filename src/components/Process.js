import React from "react";
import processImg1 from "../static/images/processImg1.png";
import processImg2 from "../static/images/processImg2.png";
import processImg3 from "../static/images/processImg3.png";
import processImg4 from "../static/images/processImg4.png";
import ArrowRight from "../static/images/arrowRight.png";

const Process = () => {
  const Processes = [
    { label: "Analyze", imageSrc: processImg1 },
    { label: "Design", imageSrc: processImg2 },
    { label: "Develop", imageSrc: processImg3 },
    { label: "Deploy", imageSrc: processImg4 },
  ];

  return (
    <div className="fadeInUp animated mb-5">
      <div className="process-container">
        <div className="inner-container">
          <ul>
            {Processes.map((item, value) => (
              <li key={value}>
                <div className="image-container d-flex">
                  <img
                    className="process-images"
                    src={item.imageSrc}
                    width={70}
                    height={70}
                  />
                  {value !== Processes.length - 1 && (
                    <div className="arrow-icon">
                      <img src={ArrowRight} width={25} height={25} />
                    </div>
                  )}
                </div>
                <div className="label-container">
                  <label>{item.label}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Process;
