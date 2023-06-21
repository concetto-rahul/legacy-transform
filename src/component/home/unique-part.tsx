import Image from "next/image";

export default function UniquePart() {
  return (
    <section className="unique-part">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="strugal-part">
            <h2 className="text-center m-auto ac-heading text-black">
              What Makes Us &nbsp;<span className="text-blue">Stand Out?</span>
            </h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
              <div className="col mb-4 mb-xl-0">
                <div className="stugal-box text-center d-flex flex-column h-100 dark-blue-box">
                  <figure className="company-bg">
                    <Image
                      src="/assets/images/Problem-Solvers.svg"
                      alt="Problem-Solvers"
                      title="Problem-Solvers"
                      width={35}
                      height={35}
                    />
                  </figure>
                  <h3 className="ac-title">
                    Creators &<span className="tw">Innovators</span>
                  </h3>
                  <p className="fs-16 mt-2">
                    We consistently innovate with advanced technologies to
                    deliver solutions beyond expectations. Legacy modernization
                    is a part of it.
                  </p>
                </div>
              </div>
              <div className="col mb-4 mb-xl-0">
                <div className="stugal-box text-center d-flex flex-column h-100 dark-blue-box">
                  <figure className="company-bg">
                    <Image
                      src="/assets/images/Time-Bound-Professionals.svg"
                      alt="Time-Bound-Professionals"
                      title="Time-Bound-Professionals"
                      width={35}
                      height={35}
                    />
                  </figure>
                  <h3 className="ac-title">
                    Passionate<span className="tw">Doers</span>
                  </h3>
                  <p className="fs-16 mt-2">
                    Our Mobile app developers are highly passionate about their
                    work and the commitments that we make to our clients.
                  </p>
                </div>
              </div>
              <div className="col mb-4 mb-xl-0">
                <div className="stugal-box text-center d-flex flex-column h-100 dark-blue-box">
                  <figure className="company-bg">
                    <Image
                      src="/assets/images/Value-Givers.svg"
                      alt="Value-Givers"
                      title="Value-Givers"
                      width={35}
                      height={35}
                    />
                  </figure>
                  <h3 className="ac-title">
                    Transparent<span className="tw">Conduct</span>
                  </h3>
                  <p className="fs-16 mt-2">
                    Transparency in work, prices, and client relations is
                    something that we follow, and we only say what we deliver.
                    No Boasting.
                  </p>
                </div>
              </div>
              <div className="col mb-4 mb-xl-0">
                <div className="stugal-box text-center d-flex flex-column h-100 dark-blue-box">
                  <figure className="company-bg">
                    <Image
                      src="/assets/images/Ideators-Innovators.svg"
                      alt="Ideators-Innovators"
                      title="Ideators-Innovators"
                      width={35}
                      height={35}
                    />
                  </figure>
                  <h3 className="ac-title">
                    Client<span className="tw">Satisfaction</span>
                  </h3>
                  <p className="fs-16 mt-2">
                    Client satisfaction is always the top priority for us. They
                    are the real partners in our success; thus we care for their
                    growth & success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
