import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { useSelector } from "react-redux";

const Services = () => {
  const service = useSelector((state) => state.services.service);
  console.log(service, "service");
  return (
    <>
      <Navbar />
      <Header title={service.title} desc={service.desc} />
    </>
  );
};

export default Services;
