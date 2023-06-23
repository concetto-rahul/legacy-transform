import Image from "next/image";

export default function ReengineeringSystemAudit() {
  return (
    <section className="system-audit">
      <div className="container">
        <h2 className="ac-heading ms-auto text-center text-black">
          What Type of Legacy&nbsp;
          <span className="text-blue">System Audit We Perform?</span>
        </h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3 tp">
            <div className="great-box d-flex flex-column h-100 text-center green-box justify-content-center">
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
                Product&nbsp;
                <br />
                Modernization
              </h3>
              <p className="fs-16 py-2">
                We amend your product performance by amending technologies,
                features, & frameworks
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 tp">
            <div className="great-box d-flex flex-column h-100 text-center pink-box">
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
                Data &&nbsp;
                <br />
                Technology Migration
              </h3>
              <p className="fs-16 py-2">
                We migrate your data and technologies rapidly and securely to
                the latest tools and platforms with best practices followed.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 tp">
            <div className="great-box d-flex flex-column h-100 text-center orange-box">
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
                Cloud&nbsp;
                <br />
                Enablement
              </h3>
              <p className="fs-16 py-2">
                Move the current infrastructure of your legacy applications to
                the cloud platforms for more agility, scalability, and
                cost-efficiency.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 tp">
            <div className="great-box d-flex flex-column h-100 text-center yellow-box">
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
                UI/UX&nbsp;
                <br />
                Modernization
              </h3>
              <p className="fs-16 py-2">
                Revamp the frontend design of your legacy applications by
                modernizing your UI/UX per the latest design principles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
