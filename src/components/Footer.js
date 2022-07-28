import React from "react";

const Footer = () => {
  const ServicesArray = [
    { title: "Home", link: "https://www.xgrid.co/" },
    { title: "AWS Migration", link: "https://www.xgrid.co/aws-migration/" },
    {
      title: "Sales Enablement",
      link: "https://www.xgrid.co/sales-enablement-and-sandboxing",
    },
    {
      title: "UI & Applications",
      link: "https://www.xgrid.co/ui-and-application-development/",
    },
    {
      title: "App Development",
      link: "https://www.xgrid.co/mobile-application-development/",
    },
    { title: "Team", link: "https://www.xgrid.co/team/" },
    { title: "Blog", link: "https://www.xgrid.co/blog/" },
    { title: "Careers", link: "https://www.xgrid.co/careers/" },
    { title: "Visit X-96", link: "https://www.xninetysix.com/" },
  ];

  const SocialIconsArray = [
    {
      link: "https://www.facebook.com/xgridco",
      icon: <i className="fab fa-facebook-f fa-lg"></i>,
    },
    {
      link: "https://twitter.com/xgridco",
      icon: <i className="fab fa-twitter fa-lg"></i>,
    },
    {
      link: "https://www.youtube.com/channel/UCDwkO3gdvccO9jkiej5AYNQ",
      icon: <i className="fab fa-youtube fa-lg"></i>,
    },
    {
      link: "https://www.linkedin.com/company/xgrid",
      icon: <i className="fab fa-linkedin-in fa-lg"></i>,
    },
    {
      link: "https://www.instagram.com/xgrid.co",
      icon: <i className="fab fa-instagram fa-lg"></i>,
    },
  ];

  const ServicesLink = ({ title, link }) => {
    return (
      <li className="menu-item ">
        <a href={link} aria-current="page" target="_blank" rel="noreferrer">
          {title}
        </a>
      </li>
    );
  };

  const SocialIcons = ({ link, icon }) => {
    return (
      <a href={link} target="_blank" rel="noreferrer">
        {icon}
      </a>
    );
  };

  return (
    <footer id="footer" className="fixed">
      <div className="upper-footer">
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 first-widget-area">
                <div id="text-3" className="footer_widget widget widget_text">
                  <h5 className="widget-title">
                    <span>Xgrid</span>
                  </h5>
                  <div className="textwidget">
                    <p className="p1">
                      <span style={{ fontWeight: "400" }}>
                        Established in 2012, Xgrid has a history of delivering a
                        wide range of intelligent and secure cloud
                        infrastructure, user interface and user experience
                        solutions. Our strength lies in our team and its ability
                        to deliver end-to-end solutions using cutting edge
                        technologies.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 second-widget-area">
                <div
                  id="nav_menu-3"
                  className="footer_widget widget widget_nav_menu"
                >
                  <h5 className="widget-title">
                    <span>Services</span>
                  </h5>
                  <div className="menu-header_navigation-container">
                    <ul id="menu-header_navigation-1" className="menu">
                      {ServicesArray.map((item, index) => (
                        <ServicesLink
                          key={index}
                          title={item.title}
                          link={item.link}
                        />
                      ))}
                    </ul>
                  </div>
                </div>{" "}
              </div>

              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 third-widget-area">
                <div
                  id="nav_menu-5"
                  className="footer_widget widget widget_nav_menu"
                >
                  <h5 className="widget-title">
                    <span>Step up your career</span>
                  </h5>
                </div>
                <div id="text-7" className="footer_widget widget widget_text">
                  {" "}
                  <div className="textwidget">
                    <p>
                      Become a part of Xgrid’s talent network. Work with a team
                      of top-tier professionals and let your career reach new
                      heights!
                      <br />
                      <strong>
                        <a
                          className="color-xgrid-purple"
                          href="/careers/"
                          rel="noopener"
                        >
                          Tell me more about life at Xgrid
                        </a>
                      </strong>
                    </p>
                  </div>
                </div>{" "}
              </div>

              <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 fourth-widget-area">
                <div id="text-5" className="footer_widget widget widget_text">
                  <h5 className="widget-title">
                    <span>Get In Touch</span>
                  </h5>
                  <div className="textwidget"></div>
                </div>
                <div
                  id="custom_html-3"
                  className="widget_text footer_widget widget widget_custom_html"
                >
                  <div className="textwidget custom-html-widget">
                    <p className="office-address">
                      <b>US Office Address:</b>
                      <br />
                      6598 Alleghany Ct, San Jose CA 95120
                    </p>
                    <p className="office-address">
                      <b>Pakistan Office Address:</b>
                      <br />
                      Xgrid Solutions (Private) Limited, Building # 96, Street #
                      GCC-11, Civic Centre, Executive Block, Gulberg Greens
                      Islamabad.
                    </p>

                    <div className="social-icon">
                      {SocialIconsArray.map((item, index) => (
                        <SocialIcons
                          key={index}
                          link={item.link}
                          icon={item.icon}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <div className="row">
          <div className="col-xl-6">
            <span className="privacy-links">
              <a href="/privacy-policy" className="" title="Privacy Policy ">
                Privacy Policy
              </a>
              <span className="seprator-left"> | </span>
              <a href="/terms-and-conditions/">Terms and Conditions</a>
              <span className="seprator-left"> | </span>
              <a href="/information-security-policy">Security</a>
            </span>
          </div>
          <div className="col-xl-6">
            <span>Xgrid © 2022. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
