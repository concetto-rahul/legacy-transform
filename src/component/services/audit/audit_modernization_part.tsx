import Image from "next/image";

export default function AuditModernizationPart() {
  return (
    <section className="modernization-part">
      <div className="container">
        <div className="business-left dark-blue-migration-box">
          <h2 className="ac-heading text-black text-center">
            Software&nbsp;<span className="text-blue">Audit Benefits</span>
          </h2>
          <div className="row g-2 mt-2">
            <div className="col-md-6 col-lg-4">
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
                  Updated<span>Licenses</span>
                </h3>
                <p className="fs-16 py-3">
                  A systematic software audit helps you identify when the
                  licenses need extension or update. Or whether or not you want
                  to continue using them.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
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
                  Identify<span>Improvements</span>
                </h3>
                <p className="fs-16 py-3">
                  Detect the improvements needed in the existing software and
                  plan changes in functionalities or coding accordingly.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
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
                  Enhance<span>Business Operations</span>
                </h3>
                <p className="fs-16 py-3">
                  With an in-depth software audit and assessment, it is easy to
                  identify which programs or applications are required for
                  business operations.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
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
                  Save<span>Money</span>
                </h3>
                <p className="fs-16 py-3">
                  Software audit helps in saving money by detecting and
                  resolving errors, removing unwanted software, & avoiding
                  unnecessary software purchases.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
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
                  Timely risk identification<span>and mitigation</span>
                </h3>
                <p className="fs-16 py-3">
                  Businesses can spot errors or potential risks early in case of
                  any problems with security or business growth to reduce risks
                  thanks to audit services.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
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
                  New business values<span>based on growth</span>
                </h3>
                <p className="fs-16 py-3">
                  Businesses can make optimal use of the software by eliminating
                  unused elements from the software. Also they can identify the
                  ways for improving the software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
