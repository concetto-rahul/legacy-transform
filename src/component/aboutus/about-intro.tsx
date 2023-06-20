import Image from "next/image";

export default function AboutIntro() {
  return (
    <div className="aboutintro secpadding">
      <div className="container">
        <p className="text-center mb-5 fs-16">
          Legacy Transform is the top legacy modernization and mobile app
          porting company in India. We help enterprise businesses revive legacy
          software to improve their durability and functionality. We help
          startups to navigate the gap between their legacy applications and
          current market demand by leveraging modern technologies.
        </p>
        <div className="row aboutintroboxwrapper">
          <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
            <div className="aboutintrobox p-4">
              <figure>
                <Image
                  src="/assets/images/aboutus/iso.svg"
                  alt="ISO"
                  title="ISO"
                  width={80}
                  height={80}
                />
                <figcaption>
                  <span>ISO</span> 27001:2013 9001:2015
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
            <div className="aboutintrobox p-4">
              <figure>
                <Image
                  src="/assets/images/aboutus/techexperts.svg"
                  alt="techexperts"
                  title="techexperts"
                  width={80}
                  height={80}
                />
                <figcaption>
                  <span>100+</span> Technology Experts
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
            <div className="aboutintrobox p-4">
              <figure>
                <Image
                  src="/assets/images/aboutus/webappdeveloped.svg"
                  alt="webappdeveloped"
                  title="webappdeveloped"
                  width={80}
                  height={80}
                />
                <figcaption>
                  <span>550+</span> web & Mobile Apps Developed
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
            <div className="aboutintrobox p-4">
              <figure>
                <Image
                  src="/assets/images/aboutus/clients.svg"
                  alt="clients"
                  title="clients"
                  width={80}
                  height={80}
                />
                <figcaption>
                  <span>150+</span> Satisfied Clients
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
