import React from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import { useSelector } from "react-redux";
import ServiceDetails from "./ServiceDetails";
import Footer from "../Footer";

const Services = () => {
  const service = useSelector((state) => state.services.service);

  return (
    <>
      <Navbar />
      <Header title={service.title} desc={service.desc} />
      <ServiceDetails service={service} details={service.details} />
      <Footer />
    </>
  );
};

export default Services;
