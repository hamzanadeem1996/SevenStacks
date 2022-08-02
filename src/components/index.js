import React from "react";
import { ServicesJSON } from "./Services/ServicesJSON";
import CustomerSlider from "./CustomerSlider";
import ServiceCard from "./Services/ServiceCard";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Process from "./Process";
import Header from "./Header";

const Home = () => {
  console.log(ServicesJSON, "ServicesJSON");
  return (
    <>
      <Navbar />

      <Header
        title=" Quality over Quantity"
        desc=" Transforming your ideas into reality. Committed to meet deadlines,
              our deep engineering and product expertise offer the best solution
              to your business needs."
      />
      <div className="wrapper">
        <section className="page-section" id="services">
          <h2 className="section-heading ">Services We Offer</h2>
          <div className="container feature" data-aos="fade-up">
            <div className="row card-grid">
              {ServicesJSON.map((item, index) => (
                <ServiceCard
                  key={index}
                  service={item}
                >
                  {item.icon}
                </ServiceCard>
              ))}
            </div>
          </div>
        </section>
        <section className="page-section" id="customers">
          <h2 className="section-heading ">Our Customers</h2>
          <div className="container feature" data-aos={"fade-up"}>
            <CustomerSlider />
          </div>
        </section>
        <section className="page-section" id="process">
          <h2 className="section-heading mb-3 ">Our Process</h2>
          <h6>Meticulous attention to detail along every step of the way!</h6>
          <div className="container feature" data-aos={"fade-up"}>
            <Process />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
