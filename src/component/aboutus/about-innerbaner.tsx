import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function AboutInnerbaner() {
  return (
    <section id="innerbanner" className="secpadding about-innerbaner">
      <div className="container">
        <div className="innerbannercontentwrapper">
          <div className="row align-items-center pt-85">
            <div className="col-lg-6 col-md-12">
              <div className="innerbannercontent">
                <h1 className="sectitle">
                  <span>We are Experts in</span>Legacy Modernization & Mobile
                  App Porting
                </h1>
                <p className="fs-16">
                  We modernize your reliable legacy applications with the latest
                  technologies to make them durable, profitable, and relevant to
                  the current trends.
                </p>
                <Link href="/contactus" className="btncommon">
                  Request A Consultation <BsArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-5 mt-lg-0">
              <figure className="aboutusimg">
                <Image
                  src="/assets/images/aboutus/aboutusimg.png"
                  alt="aboutusimg"
                  title="aboutusimg"
                  width={675}
                  height={421}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="about-shape landing-shape position-relative"></div>
    </section>
  );
}
