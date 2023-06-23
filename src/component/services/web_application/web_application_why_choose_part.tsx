import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function WebApplicationWhyChoosePart() {
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
                <h3 className="ac-title mt-0">Extensive Experience</h3>
              </div>
              <p className="fs-16 pt-3">
                Our team of experts has extensive experience working with
                diverse legacy systems. We understand the complexities,
                challenges, and best practices of modernizing legacy
                applications.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">02</span>
                </figure>
                <h3 className="ac-title mt-0">Tailored Solutions</h3>
              </div>
              <p className="fs-16 py-3">
                We thoroughly analyze your legacy application, business
                requirements, and objectives to develop a tailored migration
                strategy that aligns with your specific needs.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">03</span>
                </figure>
                <h3 className="ac-title mt-0">End-to-end Services</h3>
              </div>
              <p className="fs-16 py-3">
                From initial assessment and planning to implementation, testing,
                and post-migration support, we provide a complete range of
                services to ensure a smooth and successful modernization
                journey.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">04</span>
                </figure>
                <h3 className="ac-title mt-0">Technology Expertise</h3>
              </div>
              <p className="fs-16 py-3">
                Whether it&apos;s cloud platforms, microservices architectures,
                or legacy technologies, we have the expertise to leverage the
                most appropriate tools and technologies for your modernization
                project.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">05</span>
                </figure>
                <h3 className="ac-title mt-0">Risk Mitigation</h3>
              </div>
              <p className="fs-16 py-3">
                We understand that legacy modernization can involve risks and
                potential disruptions. We follow industry best practices and
                employ robust risk management strategies to mitigate these
                risks.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="great-box d-flex flex-column h-100 dark-blue-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                <figure className="company-bg">
                  <span className="text-white">06</span>
                </figure>
                <h3 className="ac-title mt-0">Focus on Quality and Testing</h3>
              </div>
              <p className="fs-16 py-3">
                Quality assurance is a priority for us. We conduct thorough
                testing at every stage of the migration process to identify and
                address any defects or performance issues.
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
