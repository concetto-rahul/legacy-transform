import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function RearchitectingWhyChoosePart() {
  return (
    <section className="why-choose-part">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
            <h2 className="text-center m-auto ac-heading text-black">
              Why&nbsp;<span className="text-blue">Choose Us</span>
            </h2>
          </div>
        </div>
        <div className="row why-part g-4">
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">01</span>
                </figure>
                <h3 className="ac-title mt-0">Technology Competency</h3>
              </div>
              <p className="fs-16 pt-3">
                Software re-architecting requires deep knowledge of development
                technologies. Our team has that mastery combined with
                experience.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">02</span>
                </figure>
                <h3 className="ac-title mt-0">Minimal Expenses</h3>
              </div>
              <p className="fs-16 py-3">
                We ensure minimal disruption & cost investments in{" "}
                <b>Legacy System Architecture Improvement</b>&nbsp;services.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">03</span>
                </figure>
                <h3 className="ac-title mt-0">Faster Time-to-market</h3>
              </div>
              <p className="fs-16 py-3">
                We follow a predefined plan and divide the re-architecting and
                app release in phases for quick delivery.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">04</span>
                </figure>
                <h3 className="ac-title mt-0">Continuous Support</h3>
              </div>
              <p className="fs-16 py-3">
                Your software needs constant monitoring and maintenance after
                re-architecting. We are there for continuous support.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">05</span>
                </figure>
                <h3 className="ac-title mt-0">Quality Driven approach</h3>
              </div>
              <p className="fs-16 py-3">
                We always choose the right technology while following the best
                practices to deliver the quality software re-architecting
                services.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">06</span>
                </figure>
                <h3 className="ac-title mt-0">Expert Software Engineers</h3>
              </div>
              <p className="fs-16 py-3">
                Hire Expert software engineers to get the maximum returns out of
                your legacy software modernization.
              </p>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <Link
              href="software-contact-us.html"
              className="icon-button d-flex ac-btn-common m-auto mt-4"
              title="LEARN MORE"
            >
              Contact Us For Build Your Team
              <BsArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
