import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function ReengineeringWhyChoosePart() {
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
                <h3 className="ac-title mt-0">TECHNOLOGY COMPETENCY</h3>
              </div>
              <p className="fs-16 pt-3">
                The competence of our software and mobile app developers in the
                latest tools & technologies enables us to make software
                reengineering hassle-free.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">02</span>
                </figure>
                <h3 className="ac-title mt-0">CUSTOMIZED APPROACH</h3>
              </div>
              <p className="fs-16 py-3">
                We closely work with you to deeply understand your business
                needs and tailor our software reengineering services per your
                customized solutions.{" "}
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">03</span>
                </figure>
                <h3 className="ac-title mt-0">FASTER TIME-TO-MARKET</h3>
              </div>
              <p className="fs-16 py-3">
                Since we deeply understand your product, we re-engineer it
                quickly with minimal downtime to bring it out to market faster.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">04</span>
                </figure>
                <h3 className="ac-title mt-0">DEDICATED SUPPORT</h3>
              </div>
              <p className="fs-16 py-3">
                We offer a dedicated team of mobile app developers to help you
                assess, refactor, and optimize your products.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">05</span>
                </figure>
                <h3 className="ac-title mt-0">RESOURCE EXPERTISE</h3>
              </div>
              <p className="fs-16 py-3">
                Our software engineers and UI/UX designers have in-depth
                knowledge of the tools & technologies with domain expertise.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">06</span>
                </figure>
                <h3 className="ac-title mt-0">QUALITY DRIVEN APPROACH</h3>
              </div>
              <p className="fs-16 py-3">
                We aim to deliver the utmost quality in our software
                re-engineering services using the latest tools and following
                industry best practices.
              </p>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <Link
              href="/contactus"
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
