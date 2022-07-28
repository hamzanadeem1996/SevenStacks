import React from "react";
import banner from "../static/images/banner-img.gif";
import { ServicesArray } from "./ServicesArray";
import CustomerSlider from "./CustomerSlider";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Process from "./Process";

const LandingPage = () => {
  const ServiceCard = ({ title, description, href, children }) => {
    return (
      <a href={href} className="service-card">
        {children}
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    );
  };

  return (
    <>
      <Navbar />

      <header className="masthead">
        <div className="container header-align">
          <div className="row">
            <div className="col-md-6 masthead-heading text-uppercase">
              Quality over Quantity
              <p>
                Transforming your ideas into reality. Committed to meet
                deadlines, our deep engineering and product expertise offer the
                best solution to your business needs.
              </p>
            </div>
            <div className="col-md-6" id="banner-gif">
              <img src={banner} alt="banner" height={550} />
            </div>
          </div>
        </div>
      </header>
      <div className="wrapper">
        <section className="page-section" id="services">
          <h2 className="section-heading ">Services We Offer</h2>
          <div className="container feature" data-aos="fade-up">
            <div className="row card-grid">
              {ServicesArray.map((item, index) => (
                <ServiceCard
                  key={index}
                  href={item.link}
                  title={item.title}
                  description={item.desc}
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

export default LandingPage;
