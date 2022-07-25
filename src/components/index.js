import React from "react";

import banner from "../static/images/banner-img.gif";
import CustomerSlider from "./CustomerSlider";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Process from "./Process";

import {
  DedicatedTeamIcon,
  SofwareDevIcon,
  ServiceUIIcon,
  SalesForceIcon,
  DataScienceIcon,
  DiscoveryWorkshopIcon,
} from "./SvgIcons";

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

      <header className="masthead" style={{ backgroundColor: "#fff " }}>
        <div className="container" style={{ marginLeft: "4.5rem" }}>
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
        {" "}
        <section className="page-section" id="services">
          <h2 className="section-heading ">Services We Offer</h2>
          <div className="container feature" data-aos="fade-up">
            <div className="row card-grid">
              <ServiceCard
                href="/"
                title="Dedicated Teams"
                description="We grow your team using our development resources and recruitment capabilities."
              >
                <DedicatedTeamIcon />
              </ServiceCard>
              <ServiceCard
                title="Custom Software Development"
                description="We work with startups, SMBs & world leading enterprises to build customized software solutions."
              >
                <SofwareDevIcon />
              </ServiceCard>
              <ServiceCard
                title="UI/UX Design"
                description="Our team of experienced product designers & developers help you build successful digital products. "
              >
                <ServiceUIIcon />
              </ServiceCard>
              <ServiceCard
                title="Salesforce"
                description="We help you develop robust and reliable Salesforce Solutions to surpass your business expectations. "
              >
                <SalesForceIcon />
              </ServiceCard>
              <ServiceCard
                title="Data Science"
                description="We help organizations adopt data driven insights and automated reporting for faster decision making. "
              >
                <DataScienceIcon />
              </ServiceCard>
              <ServiceCard
                title="Discovery Workshop"
                description="We help you define your idea from business perspectives through our 2 weeks collaborative discovery workshop."
              >
                <DiscoveryWorkshopIcon />
              </ServiceCard>
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

      {/* <footer className="footer py-4" style={{ backgroundColor: "#48aceb" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-left" style={{ color: "white" }}>
              Copyright © Tweesent 2020
            </div>
            <div className="col-lg-4 my-3 my-lg-0"></div>
            <div className="col-lg-4 text-lg-right">
              <a className="mr-3" href="/contact" style={{ color: "white" }}>
                Send Email
              </a>
              <a href="#about" style={{ color: "white" }}>
                About Us
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default LandingPage;
