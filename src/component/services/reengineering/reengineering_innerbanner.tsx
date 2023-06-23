import Image from "next/image";
import dynamic from "next/dynamic";

const ServiceEnquiryForm = dynamic(() => import("../service_enquiry_form"));

export default function ReengineeringInnerbanner() {
  return (
    <section id="innerbanner" className="secpadding pb-0">
      <div className="container">
        <div className="innerbannercontentwrapper">
          <div className="row pt-85">
            <div className="col-lg-6 col-md-12">
              <div className="innerbannercontent">
                <h1 className="sectitle">
                  <span>Legacy Software</span>Reengineering Services
                </h1>
                <p className="fs-16">
                  Is your legacy software failing to meet your current business
                  demands? The best approach is to reengineer the existing
                  software rather than redevelop it from scratch. With our
                  legacy software reengineering services, we help businesses
                  improve and redesign their existing software to make it
                  compatible with the latest technology trends.
                </p>
                <div className="underlinetitle underlinetitleleft fw-bold mb-3">
                  What We offer
                </div>
                <ul className="bannerlistingwrapper">
                  <li>Extension of system capabilities</li>
                  <li>
                    Integration of modern application into IT infrastructure
                  </li>
                  <li>Migration of languages, databases, platforms</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="bannerformwrapper">
                <div className="bannerformtop">
                  <div className="row align-items-center justify-content-between g-4">
                    <div className="col-md-12 col-lg-5 text-center text-lg-start pt-3 pt-lg-0">
                      <figure className="topratedbadge">
                        <Image
                          src="/assets/images/innerbanner-icons/topratedbadge.svg"
                          alt="top rated company"
                          title="top rated company"
                          width={197}
                          height={75}
                          className="lazy logo-legacy"
                        />
                      </figure>
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <div className="companycertificates d-flex align-items-center justify-content-between">
                        <figure className="topratedbadge">
                          <Image
                            src="/assets/images/innerbanner-icons/microsoft-certified-associate-badge.png"
                            alt="microsoft-certified-associate-badge"
                            title="microsoft-certified-associate-badge.png"
                            width={59}
                            height={59}
                          />
                        </figure>
                        <figure className="topratedbadge">
                          <Image
                            src="/assets/images/innerbanner-icons/top-developers.png"
                            alt="top-developers"
                            title="top-developers"
                            width={62}
                            height={61}
                          />
                        </figure>
                        <figure className="topratedbadge">
                          <Image
                            src="/assets/images/innerbanner-icons/clutch-certificate-2021.png"
                            alt="clutch-certificate-2021"
                            title="clutch-certificate-2021"
                            width={55}
                            height={59}
                          />
                        </figure>
                        <figure className="topratedbadge">
                          <Image
                            src="/assets/images/innerbanner-icons/gesia.png"
                            alt="gesia"
                            title="gesia"
                            width={56}
                            height={56}
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bannerformbottom">
                  <h2 className="ac-heading text-black">
                    submit your <span className="text-blue">Inquiry!</span>
                  </h2>
                  <ServiceEnquiryForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-shape"></div>
    </section>
  );
}
