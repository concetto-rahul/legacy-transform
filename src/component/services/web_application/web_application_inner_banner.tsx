import Image from "next/image";
import dynamic from "next/dynamic";

const ServiceEnquiryForm = dynamic(() => import("./../service_enquiry_form"));

export default function ServicesWeCanHelp() {
  return (
    <section id="innerbanner" className="secpadding pb-0">
      <div className="container">
        <div className="innerbannercontentwrapper">
          <div className="row pt-85">
            <div className="col-lg-6 col-md-12">
              <div className="innerbannercontent">
                <h1 className="sectitle">
                  <span>Desktop To Web Application</span>Migration Services
                </h1>
                <p className="fs-16">
                  Do you want a more flexible and scalable platform for your
                  desktop applications? We offer desktop-to-web application
                  migration services to help you scale your business more
                  effortlessly. Allow your users to access your applications
                  through any platform or device. Shift to a more scalable and
                  mobile-friendly environment.
                </p>
                <div className="underlinetitle underlinetitleleft fw-bold mb-3">
                  What We offer
                </div>
                <ul className="bannerlistingwrapper">
                  <li>Higher compatibility & easy integrations</li>
                  <li>Flexible & Mobile-friendly system</li>
                  <li>Higher efficiency & processing speed</li>
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
