import Image from "next/image";

export default function StugalPart() {
  return (
    <section className="stugal-part">
      <div className="container">
        <div className="strugal-part">
          <h2 className="text-center m-auto ac-heading text-black">
            How can We Help?
          </h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
            <div className="col mb-4 mb-xl-0 d-flex">
              <div className="stugal-box text-center d-flex flex-column dark-blue-box">
                <figure className="company-bg m-auto">
                  <Image
                    src="/assets/images/Legacy-System-Modernization.svg"
                    alt="System-Upgrade"
                    title="System-Upgrade"
                    width={35}
                    height={35}
                  />
                </figure>
                <h3 className="ac-title">
                  System Upgrade<span className="tw">& Support</span>
                </h3>
                <p className="fs-16 mt-2">
                  Aiming to upgrade your existing software systems with the
                  latest technology? We offer 100% support for legacy systems
                  upgrade with the latest design, features, databases, and
                  operating systems.
                </p>
              </div>
            </div>
            <div className="col mb-4 mb-xl-0 d-flex">
              <div className="stugal-box text-center d-flex flex-column dark-blue-box">
                <figure className="company-bg m-auto">
                  <Image
                    src="/assets/images/Legacy-Application-Modernization.svg"
                    alt="Legacy-App-Modernization"
                    title="Legacy-App-Modernization"
                    width={35}
                    height={35}
                  />
                </figure>
                <h3 className="ac-title">
                  Legacy App<span className="tw">Modernization</span>
                </h3>
                <p className="fs-16 mt-2">
                  Legacy app modernization services include upgrading app
                  frameworks and libraries for improved speed and performance.
                  We focus on making your apps more secure, user-friendly, and
                  compatible.
                </p>
              </div>
            </div>
            <div className="col mb-4 mb-xl-0 d-flex">
              <div className="stugal-box text-center d-flex flex-column dark-blue-box">
                <figure className="company-bg m-auto">
                  <Image
                    src="/assets/images/Legacy-Infrastructure-Modernization.svg"
                    alt="Mobile-App"
                    title="Mobile-App"
                    width={35}
                    height={35}
                  />
                </figure>
                <h3 className="ac-title">
                  Mobile App<span className="tw">Porting</span>
                </h3>
                <p className="fs-16 mt-2">
                  Expand your business reach by migrating to the platform of
                  your choice, be it iOS, Android, hybrid, or desktop.
                  Capitalize on the new platform with our mobile app porting
                  services.
                </p>
              </div>
            </div>
            <div className="col mb-4 mb-xl-0 d-flex">
              <div className="stugal-box text-center d-flex flex-column dark-blue-box">
                <figure className="company-bg m-auto">
                  <Image
                    src="/assets/images/Mobile-Application-Porting.svg"
                    alt="Custom-App"
                    title="Custom-App"
                    width={35}
                    height={35}
                  />
                </figure>
                <h3 className="ac-title">
                  Custom App<span className="tw">Development</span>
                </h3>
                <p className="fs-16 mt-2">
                  Get the most premium custom app development services in your
                  budget. Build native or hybrid mobile applications tailored to
                  your business with the top custom app development company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
