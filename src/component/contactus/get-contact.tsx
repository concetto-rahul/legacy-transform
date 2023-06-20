import Image from "next/image";

export default function GetContact() {
  return (
    <section
      id="innerbanner"
      className="get-contact secpadding pb-0 contact-page"
    >
      <div className="container">
        <div className="contact-form  pt-85">
          <div className="col-lg-12">
            <h1 className="ac-heading ms-auto text-center text-black">
              Contact&nbsp;<span className="text-blue">Us</span>
            </h1>
            <div className="call-form">
              <form className="row g-3">
                <div className="col-md-6 ps-icon">
                  <label htmlFor="inputname" className="form-label">
                    name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputname"
                    placeholder="Enter Name"
                  />
                  <span className="contact-icons">
                    <i className="ac-icon" data-icon="rapid-user-name"></i>
                  </span>
                </div>
                <div className="col-md-6 ps-icon">
                  <label htmlFor="inputemailaddress" className="form-label">
                    email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputemailaddress"
                    placeholder="Enter Email Address"
                  />
                  <span className="contact-icons">
                    <i className="ac-icon" data-icon="rapid-user-email"></i>
                  </span>
                </div>
                <div className="col-md-6 ps-icon">
                  <label htmlFor="inputphone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputphone"
                    placeholder="Enter Phone number"
                  />
                  <span className="contact-icons">
                    <i className="ac-icon" data-icon="rapid-user-phone"></i>
                  </span>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputState" className="form-label">
                    Services
                  </label>
                  <select
                    className="lag-education form-select"
                    aria-label="Default select example"
                  >
                    <option value="">Select Service</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>
                <div className="col-12">
                  <label htmlFor="inputproject" className="form-label">
                    PROJECT DESCRIPTION
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder="Enter Project Description"
                    rows={5}
                  ></textarea>
                </div>
                <div className="col-12">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LcaDOEcAAAAAMMMjj-8-BQorfN6X5DJIScfRuFz"
                  ></div>
                </div>
                <div className="col-12">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <a
                      className="icon-button d-flex ac-btn-common"
                      href="#"
                      title="Submit"
                    >
                      Submit
                      <i className="ac-icon" data-icon="rapid-contact-us"></i>
                    </a>
                    <p className="fs-16 fw-600 mt-4 mt-md-0">
                      <i className="ac-icon" data-icon="rapid-safe"></i>100%
                      Secure and Confidential.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-shape position-relative"></div>
      <div className="contact-company">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="call-us">
                <ul className="d-flex align-items-center flex-wrap justify-content-between">
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
          </div>
        </div>
      </div>
    </section>
  );
}
