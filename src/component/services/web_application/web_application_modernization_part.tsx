import Image from "next/image";

export default function WebApplicationModernizationPart() {
  return (
    <section className="modernization-part">
      <div className="container">
        <div className="business-left dark-blue-migration-box">
          <h2 className="ac-heading text-black text-center">
            Desktop To Web App&nbsp;
            <span className="text-blue">Migration Benefits</span>
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
                  Enhanced User<span>Experience</span>
                </h3>
                <p className="fs-16 py-3">
                  Modernization services lead to a more intuitive, engaging, and
                  user-friendly experience, enhancing customer satisfaction and
                  user adoption.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="migration-tech text-center text-lg-start">
                <figure className="company-bg">
                  {" "}
                  <Image
                    src="/assets/images/Richness-Framework.svg"
                    alt="Risk Reduction"
                    title="Risk Reduction"
                    width={41}
                    height={41}
                  />
                </figure>
                <h3 className="ac-title text-center text-lg-start">
                  Scalability<span>and Flexibility</span>
                </h3>
                <p className="fs-16 py-3">
                  Desktop to web app services enable organizations to scale
                  their systems easily by leveraging cloud platforms and
                  scalable technologies.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="migration-tech text-center text-lg-start">
                <figure className="company-bg">
                  {" "}
                  <Image
                    src="/assets/images/XML-Integration.svg"
                    alt="Better-Integration"
                    title="Better-Integration"
                    width={41}
                    height={41}
                  />
                </figure>

                <h3 className="ac-title text-center text-lg-start">
                  Cost<span>Savings</span>
                </h3>
                <p className="fs-16 py-3">
                  Optimize costs by eliminating unnecessary expenses, reducing
                  manual efforts, and leveraging cost-effective modern
                  technologies.
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
                  Improved<span>Security</span>
                </h3>
                <p className="fs-16 py-3">
                  Implementation of modern security frameworks, encryption, and
                  access controls to help organizations mitigate security risks.
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
                  Accessibility Everywhere<span>Anytime</span>
                </h3>
                <p className="fs-16 py-3">
                  Web applications enable users to access the app from anywhere
                  and any device with no need of installation.
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
                  Automatic<span>Updates</span>
                </h3>
                <p className="fs-16 py-3">
                  Web applications update automatically on different periods
                  enabling users to use the latest features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
