import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function ServicesWeCanHelp() {
  return (
    <section className="we-can-help">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
            <div className="get-left text-center m-auto">
              <h4 className="ac-heading text-white">
                Concerned With Something Online? <span>We Can Help!</span>
              </h4>
              <p className="fs-16 fh-26 service-text text-white">
                Our integrity and process focuses largely on providing every
                customer the best recommendations for their respective business.
                Our clients become recurring customers because we always go
                beyond their expectations to deliver the best solutions.
              </p>
              <ul className="d-flex align-items-center justify-content-center help-promise flex-wrap">
                <li className="fs-16 fh-26 service-text text-white">
                  <i className="ac-icon" data-icon="rapid-help-arrow"></i>Staff
                  Augmentation
                </li>
                <li className="fs-16 fh-26 service-text text-white">
                  <i className="ac-icon" data-icon="rapid-help-arrow"></i>
                  Dedicated Team
                </li>
                <li className="fs-16 fh-26 service-text text-white">
                  <i className="ac-icon" data-icon="rapid-help-arrow"></i>Manage
                  Delivery
                </li>
              </ul>
              <Link
                className="icon-button d-flex ac-btn-common m-auto mt-4"
                href="/contactus"
                title="Get In Touch With Us"
              >
                Get In Touch With Us
                <BsArrowRight size="18" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
