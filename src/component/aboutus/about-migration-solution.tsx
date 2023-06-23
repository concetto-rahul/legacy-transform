import Image from "next/image";

export default function AboutMigrationSolution() {
  return (
    <section className="migration-solution">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
            <h2 className="text-center m-auto ac-heading text-black">
              How we bring the difference &nbsp;
              <span className="text-blue">to your legacy apps?</span>
            </h2>
          </div>
        </div>
        <div className="migration-part d-flex flex-wrap flex-lg-nowrap flex-column flex-lg-row w-100 align-items-center">
          <div className="migrations-left">
            <ul>
              <li>
                <div className="great-box d-flex flex-column yellow-box">
                  <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                    <figure className="company-bg">
                      <span className="text-white">01</span>
                    </figure>
                    <h3 className="ac-title mt-0">Mission-Driven Team</h3>
                  </div>
                  <p className="fs-16 py-3">
                    We are passionate about innovation and technology. We
                    brainstorm ideas and transform legacy applications with
                    creative features and solutions while implementing the best
                    technology.
                  </p>
                </div>
              </li>
              <li>
                <div className="great-box d-flex flex-column blue-box">
                  <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                    <figure className="company-bg">
                      <span className="text-white">02</span>
                    </figure>
                    <h3 className="ac-title mt-0">
                      Work With The Top 1% Talent
                    </h3>
                  </div>
                  <p className="fs-16 py-3">
                    We pride ourselves on assembling a team of the
                    industry&apos;s top 1% talent. Gain access to a highly
                    qualified team that brings a wealth of knowledge and
                    innovation to your legacy modernization projects.
                  </p>
                </div>
              </li>
              <li>
                <div className="great-box d-flex flex-column orange-box">
                  <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                    <figure className="company-bg">
                      <span className="text-white">03</span>
                    </figure>
                    <h3 className="ac-title mt-0">Nurture Deep Expertise</h3>
                  </div>
                  <p className="fs-16 py-3">
                    We believe in continuous learning and development to nurture
                    deep expertise within our team. Our professionals stay
                    updated with the latest advancements to ensure delivering
                    the best quality.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="migrations-right">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="software-logo text-center h-100 dark-blue-box">
                  <figure className="company-bg">
                    <Image
                      src="/assets/images/Progressive-Roadmap.svg"
                      alt="Progressive-Roadmap"
                      title="Progressive-Roadmap"
                      width={41}
                      height={41}
                    />
                  </figure>
                  <h3 className="ac-title">
                    Proven Track<span>Record</span>
                  </h3>
                  <p className="fs-16">
                    We have a proven track record of successfully modernizing
                    numerous legacy systems across diverse industries. Our
                    portfolio showcases our ability to mitigate risks and
                    achieve measurable business outcomes.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="software-logo text-center h-100 dark-blue-box">
                  <figure className="company-bg">
                    <Image
                      src="/assets/images/Efficient-Management.svg"
                      alt="Efficient-Management"
                      title="Efficient-Management"
                      width={41}
                      height={41}
                    />
                  </figure>
                  <h3 className="ac-title">
                    Comprehensive<span>Approach</span>
                  </h3>
                  <p className="fs-16">
                    We take a comprehensive approach to legacy modernization,
                    considering all aspects such as architecture, functionality,
                    performance, security, and scalability.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="software-logo text-center h-100 dark-blue-box">
                  <figure className="company-bg">
                    <Image
                      src="/assets/images/Flexible-Engagement.svg"
                      alt="Flexible-Engagement"
                      title="Flexible-Engagement"
                      width={41}
                      height={41}
                    />
                  </figure>
                  <h3 className="ac-title">
                    Cost-<span>Effectiveness</span>
                  </h3>
                  <p className="fs-16">
                    We understand the importance of cost-effectiveness and thus
                    our team focuses on optimizing resources and utilizing
                    efficient methodologies to deliver high-value solutions
                    within your budgetary constraints.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="software-logo text-center h-100 dark-blue-box">
                  <figure className="company-bg">
                    <Image
                      src="/assets/images/Consistent-Delivery.svg"
                      alt="Consistent-Delivery"
                      title="Consistent-Delivery"
                      width={41}
                      height={41}
                    />
                  </figure>
                  <h3 className="ac-title">
                    Client<span>Satisfaction</span>
                  </h3>
                  <p className="fs-16">
                    We prioritize client satisfaction above all else. We strive
                    to exceed expectations and deliver solutions that drive
                    tangible business benefits while keeping our clients
                    satisfied.
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
