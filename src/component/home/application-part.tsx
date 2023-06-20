import Image from "next/image";
import Link from "next/link";

export default function ApplicationPart() {
  return (
    <section className="application-part">
      <div className="container">
        <div className="business-value d-flex w-100 flex-column flex-xl-row">
          <div className="business-left dark-blue-migration-box">
            <h2 className="ac-heading text-black pb-62">
              How Beneficial legacy Application <br />
              <span className="text-blue">Migration is for your business?</span>
            </h2>
            <div className="row g-5">
              <div className="col-md-6 col-lg-4">
                <div className="migration-tech">
                  <figure className="company-bg">
                    <Image
                      src="/assets/images/Legacy-System-Modernization.svg"
                      alt="Improved App Performance"
                      title="Improved App Performance"
                      width={41}
                      height={41}
                    />
                  </figure>
                  <p className="ac-title">Improved App Performance</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="migration-tech">
                  <figure className="company-bg">
                    <Image
                      src="/assets/images/Richness-Framework.svg"
                      alt="Enhanced Security & Scalability"
                      title="Enhanced Security & Scalability"
                      width={41}
                      height={41}
                    />
                  </figure>

                  <p className="ac-title">Enhanced Security & Scalability</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="migration-tech">
                  <figure className="company-bg">
                    <Image
                      src="/assets/images/XML-Integration.svg"
                      alt="Better-Integration"
                      title="Better-Integration"
                      width={41}
                      height={41}
                    />
                  </figure>
                  <p className="ac-title">
                    Better Integration With Other App Ecosystems
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="migration-tech">
                  <figure className="company-bg">
                    <Image
                      src="/assets/images/Reduced-Support-Costs.svg"
                      alt="Reduced Maintenance Costs"
                      title="Reduced Maintenance Costs"
                      width={41}
                      height={41}
                    />
                  </figure>

                  <p className="ac-title">Reduced Maintenance Costs</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="migration-tech">
                  <figure className="company-bg">
                    <Image
                      src="/assets/images/Easy-Integration-Applications.svg"
                      alt="Generate Higher Returns"
                      title="Generate Higher Returns"
                      width={41}
                      height={41}
                    />
                  </figure>

                  <p className="ac-title">Generate Higher Returns</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="migration-tech">
                  <figure className="company-bg">
                    <Image
                      src="/assets/images/Lower-Zero-Downtime.svg"
                      alt="Streamlined Business Operations"
                      title="Streamlined Business Operations"
                      width={41}
                      height={41}
                    />
                  </figure>

                  <p className="ac-title">Streamlined Business Operations</p>
                </div>
              </div>
            </div>
            <Link
              className="icon-button d-flex ac-btn-common mt-5"
              href="/contactus"
              title="Scale Your Software"
            >
              Scale Your Software
              <i className="ac-icon" data-icon="rapid-contact-us"></i>
            </Link>
          </div>
          <div className="contact-right text-center">
            <h3 className="ac-heading text-black text-center pb-27">
              Contact&nbsp;<span className="text-blue">Us?</span>
            </h3>
            <div className="service-provide">
              <figure className="company-bg m-auto">
                <Image
                  src="/assets/images/Efficient-Scaling.svg"
                  alt="Tailored-Solutions"
                  title="Tailored-Solutions"
                  width={32}
                  height={32}
                />
              </figure>
              <h4 className="ac-title mt-0">Tailored Solutions</h4>
              <p className="fs-16 fh-26 service-text">
                Solve specific business problems for seamless growth with custom
                legacy modernization services.
              </p>
            </div>
            <div className="py"></div>
            <div className="service-provide">
              <figure className="company-bg m-auto">
                <Image
                  src="/assets/images/Long-Term-Predictability.svg"
                  alt="Scalability & Reliability"
                  title="Scalability & Reliability"
                  width={32}
                  height={32}
                />
              </figure>
              <h4 className="ac-title mt-0">Scalability & Reliability</h4>
              <p className="fs-16 fh-26 service-text">
                Enhanced scalability and reliability of the software, making it
                relevant and compatible with the latest technologies.
              </p>
            </div>
            <Link
              className="icon-button d-flex ac-btn-common m-auto"
              href="/contactus"
              title="Get In Touch"
            >
              Get In Touch
              <i className="ac-icon" data-icon="rapid-contact-us"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
