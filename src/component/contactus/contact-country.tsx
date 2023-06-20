import Image from "next/image";

export default function ContactCountry() {
  return (
    <section id="globalpresence" className="secpadding contact-country">
      <div className="container">
        <h2 className="ac-heading ms-auto text-center text-black">
          Our Global Presence In&nbsp;
          <span className="text-blue">4 Countries</span>
        </h2>
        <figure className="alladdressmap">
          <Image
            src="/assets/images/aboutus/mapimg.png"
            alt="mapimg"
            title="mapimg"
            width={1320}
            height={699}
            priority
          />
        </figure>
        <div className="row alladdresswrapper">
          <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
            <div className="mapaddressbox p-3">
              <figure className="company-img">
                <Image
                  src="/assets/images/US.svg"
                  alt="United States"
                  title="United States"
                  width={32}
                  height={32}
                />
                <figcaption className="underlinetitle underlinetitleleft mb-2">
                  United States
                </figcaption>
              </figure>
              <p>2355 Prospect LN, Broomfield CO-80023</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
            <div className="mapaddressbox p-3">
              <figure className="company-img">
                <Image
                  src="/assets/images/CANADA.svg"
                  alt="Canada"
                  title="Canada"
                  width={32}
                  height={32}
                />
                <figcaption className="underlinetitle underlinetitleleft mb-2">
                  Canada
                </figcaption>
              </figure>
              <p>1557 Clearbrook Dr, Oshawa, ON L1K 2P6</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
            <div className="mapaddressbox p-3">
              <figure className="company-img">
                <Image
                  src="/assets/images/UK.svg"
                  alt="United Kingdom"
                  title="United Kingdom"
                  width={32}
                  height={32}
                />
                <figcaption className="underlinetitle underlinetitleleft mb-2">
                  United Kingdom
                </figcaption>
              </figure>
              <p>6 Hastings Avenue, Ilford, IG6 1DZ, UK</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
            <div className="mapaddressbox p-3">
              <figure className="company-img">
                <Image
                  src="/assets/images/INDIA.svg"
                  alt="India"
                  title="India"
                  width={32}
                  height={32}
                />
                <figcaption className="underlinetitle underlinetitleleft mb-2">
                  India
                </figcaption>
              </figure>
              <p>303-309, City Center, Science City Road, Ahmedabad - 380060</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
