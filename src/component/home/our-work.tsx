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

export default function OurWork() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="our-work">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="frequently-details m-auto text-center">
              <h2 className="ac-heading">
                Our&nbsp;<span>Recent Work</span>
              </h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="recent-works">
              <Slider {...settings}>
                <div className="item">
                  <div className="d-flex align-items-center flex-wrap slider-lr">
                    <figure className="recent-left">
                      <Image
                        src="/assets/images/portfilo-1.webp"
                        alt="our-project-one"
                        title="our-project-one"
                        width={873}
                        height={632}
                      />
                    </figure>
                    <div className="recent-right">
                      <h3 className="ac-title">
                        <span>Injury form</span>&nbsp;approval process
                      </h3>
                      <p className="fs-16 mt-3">
                        A solution in a form of a Canvas app which enables the
                        users to share their injuries that can be covered up
                        with the insurance being provided by the organization
                        with a complex approval structure for the organization
                        covering all the facets for the approval, its not
                        complex for the user though.
                      </p>
                      <div className="keywords mt-4">
                        <p>
                          <span className="port-text">
                            Powerapps Canvas App
                          </span>
                          ,&nbsp;&nbsp;
                          <span className="port-text1">Dataverse</span>
                          ,&nbsp;&nbsp;
                          <span className="port-text2">PowerAutomate</span>
                          ,&nbsp;&nbsp;
                          <span className="port-text3">Azure Blob Storage</span>
                          ,&nbsp;&nbsp;
                          <span className="port-text4">Rest API</span>
                        </p>
                      </div>
                      <Link
                        className="icon-button d-flex ac-btn-common mt-5"
                        href="/sign-in.html"
                        title="View Project"
                      >
                        View Project
                        <i className="ac-icon" data-icon="rapid-contact-us"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="d-flex align-items-center flex-wrap slider-lr">
                    <figure className="recent-left">
                      <Image
                        src="/assets/images/portfilo-2.webp"
                        alt="our-project-two"
                        title="our-project-two"
                        width={873}
                        height={632}
                      />
                    </figure>
                    <div className="recent-right">
                      <h3 className="ac-title">
                        <span>Incident Management</span>&nbsp;PowerApps
                      </h3>
                      <p className="fs-16 mt-3">
                        An entire audit to analyze the process of project
                        execution. It supports two types of incident reporting,
                        i.e. minor or major where the forms/functionalities
                        differ. A major incident report comes with 8 different
                        stages which help the user to record the detailed level
                        of an audit.
                      </p>
                      <div className="keywords mt-4">
                        <p>
                          <span className="port-text">
                            PowerApps Canvas App
                          </span>
                          ,&nbsp;&nbsp;
                          <span className="port-text1">Dataverse</span>
                          ,&nbsp;&nbsp;
                          <span className="port-text2">SharePoint</span>
                          ,&nbsp;&nbsp;
                          <span className="port-text3">PowerBI</span>
                          ,&nbsp;&nbsp;
                          <span className="port-text3">Active Directory</span>
                          ,&nbsp;&nbsp;
                          <span className="port-text3">Custom Connectors</span>
                        </p>
                      </div>
                      <Link
                        className="icon-button d-flex ac-btn-common mt-5"
                        href="/sign-in.html"
                        title="View Project"
                      >
                        View Project
                        <i className="ac-icon" data-icon="rapid-contact-us"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="d-flex align-items-center flex-wrap slider-lr">
                    <figure className="recent-left">
                      <Image
                        src="/assets/images/portfilo-3.webp"
                        alt="our-project-one"
                        title="our-project-one"
                        width={873}
                        height={632}
                      />
                    </figure>
                    <div className="recent-right">
                      <h3 className="ac-title">
                        <span>Construction Inspection</span>&nbsp;Log PowerApps
                      </h3>
                      <p className="fs-16 mt-3">
                        This PowerApps belongs to Construction company where
                        they logs their construction site Inspection on daily
                        basis. it includes features like, user login based on
                        his current location, add inspection log for specific
                        project including number trades, work progress images,
                        issue images, create inspection log report, email report
                        etc...
                      </p>
                      <div className="keywords mt-4">
                        <p>
                          <span className="port-text">Microsoft PowerApps</span>
                          ,&nbsp;&nbsp;
                          <span className="port-text1">Microsoft Flow</span>
                          ,&nbsp;&nbsp;
                          <span className="port-text2">MS SQL Server</span>
                          ,&nbsp;&nbsp;
                          <span className="port-text3">Azure Blob Storage</span>
                        </p>
                      </div>
                      <Link
                        className="icon-button d-flex ac-btn-common mt-5"
                        href="/sign-in.html"
                        title="View Project"
                      >
                        View Project
                        <i className="ac-icon" data-icon="rapid-contact-us"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="d-flex align-items-center flex-wrap slider-lr">
                    <figure className="recent-left">
                      <Image
                        src="/assets/images/portfilo-4.webp"
                        alt="our-project-one"
                        title="our-project-one"
                        width={873}
                        height={632}
                      />
                    </figure>
                    <div className="recent-right">
                      <h3 className="ac-title">
                        <span>New Staff</span>&nbsp;Onboarding
                      </h3>
                      <p className="fs-16 mt-3">
                        From creating user accounts, assigning them their
                        systems, and managing the payroll, this app has it all.
                        It makes the process of the IT Manager, HR Manager, and
                        the Staff Member Manager easier by providing a step by
                        step function implementations along with assigning tasks
                        to the teammates.
                      </p>
                      <div className="keywords mt-4">
                        <p>
                          <span className="port-text">
                            Powerapps Canvas App
                          </span>
                          ,&nbsp;&nbsp;
                          <span className="port-text1">Dataverse</span>
                          ,&nbsp;&nbsp;
                          <span className="port-text2">PowerAutomate</span>
                        </p>
                      </div>
                      <Link
                        className="icon-button d-flex ac-btn-common mt-5"
                        href="/sign-in.html"
                        title="View Project"
                      >
                        View Project
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
