"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

function SampleNextArrow({ onClick }: any) {
  return (
    <button
      className="next-arrow slick-arrow"
      title="Next"
      onClick={onClick}
    ></button>
  );
}

function SamplePrevArrow({ onClick }: any) {
  return (
    <button
      className="prev-arrow slick-arrow"
      title="Previous"
      onClick={onClick}
    ></button>
  );
}

export default function GreatSolution() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3.8,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          centerpadding: 10,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerpadding: "32px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerpadding: "32px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section className="great-solution">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <h2 className="text-center m-auto ac-heading text-black">
              Legacy &nbsp;
              <span className="text-blue">Modernization Services</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="great-slider">
              <Slider {...settings}>
                <div className="item">
                  <div className="great-box d-flex flex-column pink-box">
                    <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                      <figure className="company-bg">
                        <Image
                          src="/assets/images/Software-Re-architecting.svg"
                          alt="Software-Re-architecting"
                          title="Software-Re-architecting"
                          width={35}
                          height={35}
                        />
                      </figure>
                      <h3 className="ac-title mt-0">
                        Legacy Software
                        <br />
                        Re-engineering
                      </h3>
                    </div>
                    <p className="fs-16 py-3">
                      We use your legacy application as a basis to build new and
                      updated software with identical yet improved features. We
                      optimize your software architecture, reorganize the
                      database, and give it a brand-new look.
                    </p>
                    <div className="mt-auto pt-2">
                      <Link
                        className="see-more-common"
                        href="#"
                        title="See More"
                      >
                        See More
                        <i className="ac-icon" data-icon="rapid-contact-us"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="great-box d-flex flex-column orange-box">
                    <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                      <figure className="company-bg">
                        <Image
                          src="/assets/images/Legacy-Application-Upgrade.svg"
                          alt="Legacy-Application-Upgrade"
                          title="Legacy-Application-Upgrade"
                          width={35}
                          height={35}
                        />
                      </figure>

                      <h3 className="ac-title mt-0">
                        Legacy Infrastructure
                        <br />
                        Modernization
                      </h3>
                    </div>
                    <p className="fs-16 py-3">
                      Do you need to update your existing software
                      infrastructure? We migrate your legacy software to a
                      modern infrastructure making it relevant to the current
                      technology and user demands.
                    </p>
                    <div className="mt-auto pt-2">
                      <Link
                        className="see-more-common"
                        href="#"
                        title="See More"
                      >
                        See More
                        <i className="ac-icon" data-icon="rapid-contact-us"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="great-box d-flex flex-column green-box">
                    <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                      <figure className="company-bg">
                        <Image
                          src="/assets/images/Software-System-Audits.svg"
                          alt="Software-System-Audits"
                          title="Software-System-Audits"
                          width={35}
                          height={35}
                        />
                      </figure>
                      <h3 className="ac-title mt-0">
                        Software System
                        <br />
                        Audit
                      </h3>
                    </div>
                    <p className="fs-16 py-3">
                      How to figure out the right time to renew your software?
                      Get access to our legacy software audit and assessment
                      services to avoid unnecessary expenses in maintaining
                      legacy software.
                    </p>
                    <div className="mt-auto pt-2">
                      <Link
                        className="see-more-common"
                        href="#"
                        title="See More"
                      >
                        See More
                        <i className="ac-icon" data-icon="rapid-contact-us"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="great-box d-flex flex-column desktop-web">
                    <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                      <figure className="company-bg">
                        <Image
                          src="/assets/images/Cloud-Migration-update.svg"
                          alt="Cloud-Migration"
                          title="Cloud-Migration"
                          width={35}
                          height={35}
                        />
                      </figure>
                      <h3 className="ac-title mt-0">
                        Desktop to Web
                        <br />
                        or Mobile Apps
                      </h3>
                    </div>
                    <p className="fs-16 py-3">
                      Want to relocate your desktop apps to the web or mobile?
                      Migrate to a more stable and profitable platform with our
                      desktop to web or mobile app migration services for a more
                      scalable solution for your business.
                    </p>
                    <div className="mt-auto pt-2">
                      <Link
                        className="see-more-common"
                        href="#"
                        title="See More"
                      >
                        See More
                        <i className="ac-icon" data-icon="rapid-contact-us"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="great-box d-flex flex-column yellow-box">
                    <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                      <figure className="company-bg">
                        <Image
                          src="/assets/images/Cloud-Migration-update.svg"
                          alt="Cloud-Migration"
                          title="Cloud-Migration"
                          width={35}
                          height={35}
                        />
                      </figure>
                      <h3 className="ac-title mt-0">
                        Legacy to
                        <br />
                        Cloud Migration
                      </h3>
                    </div>
                    <p className="fs-16 py-3">
                      Want to leverage cloud benefits for your legacy software?
                      Avail of our legacy to cloud migration services for a more
                      scalable and secure solution while avoiding loopholes and
                      drawbacks.
                    </p>
                    <div className="mt-auto pt-2">
                      <Link
                        className="see-more-common"
                        href="#"
                        title="See More"
                      >
                        See More
                        <i className="ac-icon" data-icon="rapid-contact-us"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="great-box d-flex flex-column pink-box">
                    <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                      <figure className="company-bg">
                        <Image
                          src="/assets/images/Cloud-Migration-update.svg"
                          alt="Cloud-Migration"
                          title="Cloud-Migration"
                          width={35}
                          height={35}
                        />
                      </figure>
                      <h3 className="ac-title mt-0">
                        Digital Transformation
                        <br />
                        With API integrations
                      </h3>
                    </div>
                    <p className="fs-16 py-3">
                      API integration is the best approach to modernize legacy
                      systems without changing the codes and infrastructure.
                      Connect your legacy systems to modern systems with API
                      integrations to bring about a digital transformation.
                    </p>
                    <div className="mt-auto pt-2">
                      <Link
                        className="see-more-common"
                        href="#"
                        title="See More"
                      >
                        See More
                        <i className="ac-icon" data-icon="rapid-contact-us"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
