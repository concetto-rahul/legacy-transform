import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function AuditWhyChoosePart() {
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
                <h3 className="ac-title mt-0">Access to Talent Pool</h3>
              </div>
              <p className="fs-16 pt-3">
                With Legacy Transform as your legacy software audit company, you
                get access to a wide pool of talented web and mobile app
                developers and software auditors.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">02</span>
                </figure>
                <h3 className="ac-title mt-0">Constantly in the Loop</h3>
              </div>
              <p className="fs-16 py-3">
                We keep you updated with every single detail of your software
                system&apos;s audit and assessment. We follow a fully
                transparent process and conduct.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">03</span>
                </figure>
                <h3 className="ac-title mt-0">Expert Software Auditors</h3>
              </div>
              <p className="fs-16 py-3">
                Hire professional software auditors holding a clear
                understanding of IT audit methodologies to conduct efficient and
                effective IT audit procedures.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">04</span>
                </figure>
                <h3 className="ac-title mt-0">Cost-Effective</h3>
              </div>
              <p className="fs-16 py-3">
                You can access our legacy software audit services at an
                affordable rate. We suggest improvements for better software
                performance & affordable maintenance.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">05</span>
                </figure>
                <h3 className="ac-title mt-0">In-depth Assessment</h3>
              </div>
              <p className="fs-16 py-3">
                We deeply assess your software codes, operations, hardware,
                security, and data leakage. Based on the evaluation, we suggest
                modernization or maintenance.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">06</span>
                </figure>
                <h3 className="ac-title mt-0">Enhanced Security</h3>
              </div>
              <p className="fs-16 py-3">
                With our legacy system assessment services, you can understand
                your software&apos;s potential risks. Early detection will help
                fix it quickly, incurring less costs.
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
