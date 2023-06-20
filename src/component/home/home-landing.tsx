import Image from "next/image";

export default function HomeLanding() {
  return (
    <section className="home-landing">
      <div className="container">
        <div className="row align-items-center pt-85">
          <div className="col-12 col-lg-6">
            <div className="land-left mt-5 mt-lg-0">
              <Image
                src="/assets/images/micro.svg"
                alt="microsoft-partner"
                title="microsoft-partner"
                width={221}
                height={52}
              />
              <div className="micro-text">
                <p className="ac-green-text">
                  <span>
                    <i className="ac-icon" data-icon="rapid-trust"></i>
                  </span>
                  YOUR TRUSTED LEGACY MIGRATION PARTNER, DELIVERING DIGITAL
                  TRANSFORMATION.
                </p>
              </div>
              <h1 className="herobannertitle">
                Legacy&nbsp;<span className="webapp">Web App Migration</span> &
                <span className="mobileapp">Mobile App</span>{" "}
                <span className="appporting">Porting Services</span>
              </h1>
              <p className="banner-text fs-16">
                Legacy Transform offers legacy app modernization services to
                help enterprises move legacy software solutions to the latest
                software technology to maximize their business value.
              </p>
              <div className="banner-button d-flex">
                <a
                  className="icon-button d-flex ac-btn-common me-4"
                  href="software-contact-us.html"
                  title="Scale Your Software"
                >
                  Scale Your Software
                  <i className="ac-icon" data-icon="rapid-contact-us"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="land-video-wrapper mt-5 mt-lg-0">
              <div className="land-video">
                <div className="land-video-overlay"></div>
                <video autoPlay loop muted id="herobannervideo">
                  <source src="/assets/videos/heromainvideo.mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-shape"></div>
    </section>
  );
}
