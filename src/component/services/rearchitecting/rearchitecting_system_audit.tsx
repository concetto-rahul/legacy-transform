import Image from "next/image";

export default function RearchitectingSystemAudit() {
  return (
    <section className="system-audit">
      <div className="container">
        <h2 className="ac-heading ms-auto text-center text-black">
          Legacy Re-Architecting&nbsp;
          <span className="text-blue">Is Needed When</span>
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
                Slow&nbsp;
                <br />
                Performance
              </h3>
              <p className="fs-16 py-2">
                Your Software Cannot Withstand the Load and constantly fails to
                process multiple requests together.
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
                Costly&nbsp;
                <br />
                Hardware
              </h3>
              <p className="fs-16 py-2">
                Applications running on legacy hardware-based infrastructure are
                costly compared to the cloud.
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
                Old&nbsp;
                <br />
                Tech Stack
              </h3>
              <p className="fs-16 py-2">
                Your software uses technologies that are no longer in use & pose
                security, compatibility, and scalability issues.
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
                Hinder&nbsp;
                <br />
                Growth
              </h3>
              <p className="fs-16 py-2">
                Legacy software architecture is not scalable and does not
                support third-party integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
