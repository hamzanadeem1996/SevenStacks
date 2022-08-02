import React from "react";

const ServiceDetails = ({ service, details }) => {
  console.log(details, "details");
  const OfferCard = ({ item }) => {
    return (
      <div className="card">
        <img alt="Service img" id="service-img" src={item.imgSrc} />

        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    );
  };
  return (
    <div className="container">
      <div className="offer-title">
        <p>{service.details_title}</p>
        <h2 className="home-heading-two">{service.details_desc}</h2>
      </div>
      <div className="offer-cards">
        {details.map((item, index) => (
          <OfferCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
