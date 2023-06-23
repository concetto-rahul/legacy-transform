import Image from "next/image";

export default function SystemAudit() {
  return (
    <section className="system-audit">
      <div className="container">
        <h2 className="ac-heading ms-auto text-center text-black">
          What Type of Legacy&nbsp;
          <span className="text-blue">System Audit We Perform?</span>
        </h2>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-3 mb-lg-0 tp">
            <div className="great-box d-flex flex-column justify-content-center h-100 text-center green-box">
              <figure className="company-bg">
                <Image
                  src="/assets/images/Software-Re-architecting.svg"
                  alt="Software-Re-architecting"
                  title="Software-Re-architecting"
                  width={35}
                  height={35}
                />
              </figure>
              <h3 className="ac-title mt-3">
                Compliance&nbsp;
                <br />
                Audit
              </h3>
              <p className="fs-16 py-2">
                We review software licenses and check their compliance with
                regulatory guidelines.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-3 mb-lg-0 tp">
            <div className="great-box d-flex flex-column justify-content-center h-100 text-center pink-box">
              <figure className="company-bg">
                <Image
                  src="/assets/images/Software-Re-architecting.svg"
                  alt="Software-Re-architecting"
                  title="Software-Re-architecting"
                  width={35}
                  height={35}
                />
              </figure>
              <h3 className="ac-title mt-3">
                Functionality&nbsp;
                <br />
                Audit
              </h3>
              <p className="fs-16 py-2">
                Assess software performance, response times, and scalability per
                current market demands.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-3 mb-lg-0 tp">
            <div className="great-box d-flex flex-column justify-content-center h-100 text-center orange-box">
              <figure className="company-bg">
                <Image
                  src="/assets/images/Software-Re-architecting.svg"
                  alt="Software-Re-architecting"
                  title="Software-Re-architecting"
                  width={35}
                  height={35}
                />
              </figure>
              <h3 className="ac-title mt-3">
                Security&nbsp;
                <br />
                Audit
              </h3>
              <p className="fs-16 py-2">
                Assess & identify security vulnerabilities, potential risks,
                access controls, data leakage areas, and overall system
                integrity.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-3 mb-lg-0 tp">
            <div className="great-box d-flex flex-column justify-content-center h-100 text-center yellow-box">
              <figure className="company-bg">
                <Image
                  src="/assets/images/Software-Re-architecting.svg"
                  alt="Software-Re-architecting"
                  title="Software-Re-architecting"
                  width={35}
                  height={35}
                />
              </figure>
              <h3 className="ac-title mt-3">
                technical&nbsp;
                <br />
                Audit
              </h3>
              <p className="fs-16 py-2">
                We assess code quality and overall system architecture to detect
                any bugs or errors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
