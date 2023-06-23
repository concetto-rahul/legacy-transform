import Image from "next/image";
import dynamic from "next/dynamic";

const ServiceEnquiryForm = dynamic(() => import("./service_enquiry_form"));

export default function ServicesInnerBanner() {
  return (
    <section id="innerbanner" className="secpadding pb-0">
      <div className="container">
        <div className="innerbannercontentwrapper">
          <div className="row  pt-85">
            <div className="col-lg-6 col-md-12">
              <div className="innerbannercontent">
                <span className="tagline">
                  digital transformation journey using our proven app
                  modernization services.
                </span>
                <h1 className="sectitle">
                  Application <span>Modernization Services</span>
                </h1>
                <p className="fs-16">
                  The new age offers ample opportunities for organizations but
                  can also threaten with serious challenges. Keeping up with
                  changing requirements has never been so hard. That&lsquo;s why
                  legacy application modernization is a primary step to stay
                  afloat in the highly competitive markets.
                </p>
                <ul className="bannerlistingwrapper">
                  <li>Platform Enhancement With Cloud Capabilities</li>
                  <li>Integration With Business Analysis Tools</li>
                  <li>Faster Software Work And Simplified Maintenance</li>
                  <li>Higher Security Level</li>
                  <li>Modern Technology Stack</li>
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
      <div className="landing-shape service-shape"></div>
    </section>
  );
}
