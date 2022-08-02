import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setService } from "../../redux/actions/servicesActions";

const ServiceCard = ({ service, children }) => {
  const dispatch = useDispatch();

  return (
    <NavLink
      to="/services"
      className="service-card"
      onClick={() => {
        dispatch(setService(service));
      }}
    >
      {children}
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
    </NavLink>
  );
};

export default ServiceCard;
