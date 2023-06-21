import Image from "next/image";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <section className="get-in-touch">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-8">
            <div className="get-left text-center text-md-start">
              <h4 className="ac-heading text-white">
                <span>Ready to revamp</span>&nbsp;to a more modern technology?
              </h4>
              <p className="fs-16 fh-26 service-text text-white">
                Get in touch with Legacy Transform, experts in end-to-end legacy
                modernization services. Strengthen your market position and 2X
                your business growth with the top legacy modernization company.
              </p>
              <Link
                className="icon-button d-flex ac-btn-common"
                href="/contactus"
                title="Get In Touch With Us"
              >
                Get In Touch With Us
                <i className="ac-icon" data-icon="rapid-contact-us"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-4 text-center text-md-end mt-5 mt-md-0 d-none d-md-block">
            <div className="service-provide">
              <Image
                src="/assets/images/get-touch.svg"
                alt="get-touch.svg"
                title="get-touch.svg"
                width={299}
                height={360}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
