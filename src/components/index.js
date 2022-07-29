import React from "react";
import { ServicesArray } from "./ServicesArray";
import CustomerSlider from "./CustomerSlider";
import { useDispatch } from "react-redux";
import { setService } from "../redux/actions/servicesActions";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Process from "./Process";
import Header from "./Header";

const Home = () => {
  const dispatch = useDispatch();
  const ServiceCard = ({ title, description, href, children }) => {
    let service = {
      title: title,
      desc: description,
    };
    return (
      <a
        href="/services"
        className="service-card"
        onClick={() => {
          dispatch(setService(service));
        }}
      >
        {children}
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    );
  };

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

export default Home;
