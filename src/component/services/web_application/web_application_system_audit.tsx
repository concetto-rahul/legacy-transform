import Image from "next/image";

export default function WebApplicationSystemAudit() {
  return (
    <section className="system-audit">
      <div className="container">
        <h2 className="ac-heading ms-auto text-center text-black">
          What type Of&nbsp;
          <span className="text-blue">Migrations we perform?</span>
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
                Desktop App&nbsp;
                <br />
                to Cloud
              </h3>
              <p className="fs-16 py-2">
                We help you migrate your desktop apps to the cloud. Make the
                best of the many benefits of the cloud.
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
                Application&nbsp;
                <br />
                Orchestration
              </h3>
              <p className="fs-16 py-2">
                We integrate your desktop applications with modern servers/
                databases to automate workflows and communication.
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
                On-premise infrastructure&nbsp;
                <br />
                to the web server
              </h3>
              <p className="fs-16 py-2">
                We help you switch your on-premise infrastructure to a cloud
                server with minimal data loss and downtime.
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
                Hybrid transition&nbsp;
                <br />
                to on-premises and cloud server
              </h3>
              <p className="fs-16 py-2">
                We help you have the best benefits of both cloud and on-premise
                infrastructure with our seamless hybrid transition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
