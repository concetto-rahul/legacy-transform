import Image from "next/image";

export default function ReengineeringModernizationPart() {
  return (
    <section className="modernization-part">
      <div className="container">
        <div className="business-left dark-blue-migration-box">
          <h2 className="ac-heading text-black text-center">
            Software Re engineering&nbsp;
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
                  Cost<span>optimization</span>
                </h3>
                <p className="fs-16 py-3">
                  Optimized and error-free solutions cost less to maintain and
                  deliver better performance after reengineering.
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
                  Risk<span>Reduction</span>
                </h3>
                <p className="fs-16 py-3">
                  With software reengineering, it is possible to identify
                  potential security and software risks and avoid them early.
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
                  Seamless<span>Performance</span>
                </h3>
                <p className="fs-16 py-3">
                  Refactored factors and software perform faster and are easy
                  for third integrations and extensions.
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
                  Extended<span>capabilities</span>
                </h3>
                <p className="fs-16 py-3">
                  Modernization enables businesses to adapt to the current
                  market trends and stay relevant with easily scalable
                  solutions.
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
                  Optimization
                </h3>
                <p className="fs-16 py-3">
                  Software reengineering refines the software system, features
                  and functionalities. Thus, it reduces the complexity and
                  challenges.
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
                  Enhanced Customer<span>Experience</span>
                </h3>
                <p className="fs-16 py-3">
                  EWith refactored software, businesses can deliver better and
                  faster performances, enhancing customer experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
