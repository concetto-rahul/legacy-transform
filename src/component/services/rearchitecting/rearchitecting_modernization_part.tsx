import Image from "next/image";

export default function RearchitectingModernizationPart() {
  return (
    <section className="modernization-part">
      <div className="container">
        <div className="business-left dark-blue-migration-box">
          <h2 className="ac-heading text-black text-center">
            Software Re-architecting&nbsp;
            <span className="text-blue">Benefits</span>
          </h2>
          <div className="row mt-2">
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="migration-tech text-center text-lg-start">
                <figure className="company-bg">
                  <Image
                    src="/assets/images/Legacy-System-Modernization.svg"
                    alt="Cost-optimization"
                    title="Cost-optimization"
                    width={41}
                    height={41}
                  />
                </figure>
                <h3 className="ac-title text-center text-lg-start">
                  Reduced<span>costs</span>
                </h3>
                <p className="fs-16 py-3">
                  Software rearchitecting reduces total cost through cloud
                  migration & loosely coupled structure compared to monolith
                  legacy architecture.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="migration-tech text-center text-lg-start">
                <figure className="company-bg">
                  <Image
                    src="/assets/images/Richness-Framework.svg"
                    alt="Risk Reduction"
                    title="Risk Reduction"
                    width={41}
                    height={41}
                  />
                </figure>
                <h3 className="ac-title text-center text-lg-start">
                  Enhanced business<span>agility</span>
                </h3>
                <p className="fs-16 py-3">
                  Re-architecting the app to a microservices structure makes it
                  easy to add new features as per market demand.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="migration-tech text-center text-lg-start">
                <figure className="company-bg">
                  <Image
                    src="/assets/images/XML-Integration.svg"
                    alt="Better-Integration"
                    title="Better-Integration"
                    width={41}
                    height={41}
                  />
                </figure>

                <h3 className="ac-title text-center text-lg-start">
                  Better Security<span>monitoring</span>
                </h3>
                <p className="fs-16 py-3">
                  Re-architecting makes security monitoring easier with the
                  integration of cloud security monitoring tools.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="migration-tech text-center text-lg-start">
                <figure className="company-bg">
                  <Image
                    src="/assets/images/Reduced-Support-Costs.svg"
                    alt="Extended capabilities"
                    title="Extended capabilities"
                    width={41}
                    height={41}
                  />
                </figure>

                <h3 className="ac-title text-center text-lg-start">
                  Improved<span>Scalability</span>
                </h3>
                <p className="fs-16 py-3">
                  Re-architecting makes scaling easier without disrupting the
                  app by breaking the app into independent services.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="migration-tech text-center text-lg-start">
                <figure className="company-bg">
                  <Image
                    src="/assets/images/Easy-Integration-Applications.svg"
                    alt="Optimization"
                    title="Optimization"
                    width={41}
                    height={41}
                  />
                </figure>

                <h3 className="ac-title text-center text-lg-start">
                  Integration of<span>DevOps</span>
                </h3>
                <p className="fs-16 py-3">
                  Integrating DevOps practices with a microservices architecture
                  with independant is easy for faster time-to-market.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="migration-tech text-center text-lg-start">
                <figure className="company-bg">
                  <Image
                    src="/assets/images/Lower-Zero-Downtime.svg"
                    alt="Enhanced Customer Experience"
                    title="Enhanced Customer Experience"
                    width={41}
                    height={41}
                  />
                </figure>

                <h3 className="ac-title text-center text-lg-start">
                  Application<span>Resilience</span>
                </h3>
                <p className="fs-16 py-3">
                  Re-architecting into a decoupled structure makes the software
                  resilient. The software can recover failed services without
                  affecting the entire app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
