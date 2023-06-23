import Image from "next/image";
import dynamic from "next/dynamic";

const ContactUsForm = dynamic(() => import("../../component/contact_us_form"));

export default function GetContact() {
  return (
    <section className="get-contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="frequently-details m-auto text-center">
              <h2 className="ac-heading">
                <span>Get In Touch </span>With Us
              </h2>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="row">
            <div className="col-lg-5 col-xl-4">
              <div className="call-us">
                <ul>
                  <li className="contact-number">
                    <a
                      className="d-flex justify-content-start align-items-center mb-lg-0 dark-blue-box"
                      href="https://wa.me/919586777575"
                      target="_blank"
                      title="+91 (95) 867 77575"
                    >
                      <figure className="company-bg me-3">
                        <Image
                          src="/assets/images/WHATSAPP.svg"
                          alt="WHATSAPP"
                          title="WHATSAPP"
                          width={35}
                          height={35}
                        />
                      </figure>
                      <div className="ac-title mt-0">
                        <span>WHATSAPP</span>+91 (95) 867 77575
                      </div>
                    </a>
                  </li>
                  <li className="contact-number">
                    <a
                      className="d-flex justify-content-start align-items-center mb-lg-0 dark-blue-box"
                      href="tel://1(903)200-8801"
                      title="+1 (903) 200 8801"
                    >
                      <figure className="company-bg me-3">
                        <Image
                          src="/assets/images/usa.svg"
                          alt="usa"
                          title="usa"
                          width={35}
                          height={35}
                        />
                      </figure>
                      <div className="ac-title mt-0">
                        <span>USA</span>+1 (903) 200 8801
                      </div>
                    </a>
                  </li>
                  <li className="contact-number">
                    <a
                      className="d-flex justify-content-start align-items-center mb-lg-0 dark-blue-box"
                      href="mailto:info@concettolabs.com"
                      title="info@concettolabs.com"
                    >
                      <figure className="company-bg me-3">
                        <Image
                          src="/assets/images/mail.svg"
                          alt="mail"
                          title="mail"
                          width={35}
                          height={35}
                        />
                      </figure>
                      <div className="ac-title mt-0">
                        <span>MAIL TO OUR DEPARTMENT</span>info@concettolabs.com
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
