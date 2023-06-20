import Image from "next/image";

export default function HomeMigrations() {
  return (
    <section className="home-migrations">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="land-left mt-3 mt-lg-0">
              <h2 className="text-center m-auto ac-heading text-black">
                Reduce Risks With Legacy Transform CS &nbsp;
                <span className="text-blue">Migration & Modernization</span>
              </h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="reduce-skills yellow-box">
              <div className="d-flex justify-content-center align-items-center reduce-left mb-4 mb-lg-0">
                <figure className="company-bg">
                  <Image
                    src="/assets/images/Reduce-Security-Risks.svg"
                    alt="Reduce-Security-Risks"
                    title="Reduce-Security-Risks"
                    width={35}
                    height={35}
                  />
                </figure>
                <h3 className="ac-title mt-0">Enhanced Security</h3>
              </div>
              <div className="out-infomation d-flex align-items-center position-relative">
                <p className="fs-16 mb-4 mb-md-0">
                  We implement built-in cloud-based security measures to reduce
                  security & disruption risks. Cloud-based security facilitates
                  automated business operations and centralized workflow.
                </p>
              </div>
            </div>
            <div className="reduce-skills pink-box">
              <div className="d-flex justify-content-center align-items-center reduce-left mb-4 mb-lg-0">
                <figure className="company-bg">
                  <Image
                    src="/assets/images/Enhance-Stability.svg"
                    alt="Enhance-Stability"
                    title="Enhance-Stability"
                    width={35}
                    height={35}
                  />
                </figure>

                <h3 className="ac-title mt-0">Enhance Performance</h3>
              </div>
              <div className="out-infomation d-flex align-items-center position-relative">
                <p className="fs-16 mb-4 mb-md-0">
                  We offer legacy migration & modernization services that
                  include integrating modern technology into legacy software.
                  Advanced technology enhances app performance and makes it
                  future-relevant.
                </p>
              </div>
            </div>
            <div className="reduce-skills orange-box">
              <div className="d-flex justify-content-start align-items-center reduce-left mb-4 mb-lg-0">
                <figure className="company-bg">
                  <Image
                    src="/assets/images/migration-minimize-cost.svg"
                    alt="Minimize-cost"
                    title="Minimize-cost"
                    width={35}
                    height={35}
                  />
                </figure>

                <h3 className="ac-title mt-0">Save Costs</h3>
              </div>
              <div className="out-infomation d-flex align-items-center position-relative">
                <p className="fs-16 mb-4 mb-md-0">
                  With Legacy migration services, businesses can migrate to
                  modern technologies and languages. Thus, they can save costs
                  on maintaining old systems, hardware, and languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
