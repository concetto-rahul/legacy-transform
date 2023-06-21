import Image from "next/image";

export default function MigrationSolution() {
  return (
    <section className="migration-solution">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
            <h2 className="text-center m-auto ac-heading text-black">
              Why Choose Us For Your&nbsp;
              <span className="text-blue">Legacy Migration Solution?</span>
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
                    <h3 className="ac-title mt-0">Legacy of Trust</h3>
                  </div>
                  <p className="fs-16 py-3">
                    Legacy Transform has been a top custom software development
                    company for the past 7 years with a team of 100+ expert
                    developers. With 250+ satisfied clients, we work daily to
                    increase this count and standard too.
                  </p>
                </div>
              </li>
              <li>
                <div className="great-box d-flex flex-column blue-box">
                  <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                    <figure className="company-bg">
                      <span className="text-white">02</span>
                    </figure>
                    <h3 className="ac-title mt-0">Expertise and Experience</h3>
                  </div>
                  <p className="fs-16 py-3">
                    Our team of web and mobile app developers are highly
                    experienced in migrating and modernizing legacy software and
                    applications to the latest technologies. Avail of our
                    expertise.
                  </p>
                </div>
              </li>
              <li>
                <div className="great-box d-flex flex-column orange-box">
                  <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
                    <figure className="company-bg">
                      <span className="text-white">03</span>
                    </figure>
                    <h3 className="ac-title mt-0">Tech Savvy Team</h3>
                  </div>
                  <p className="fs-16 py-3">
                    The web and mobile app developers at Legacy Transform are
                    tech-savvy holding extensive knowledge in languages like C#,
                    C, .Net, etc. Thus, we understand legacy systems well and
                    port them to new ones.
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
                      alt="coldfusion"
                      title="coldfusion"
                      width={41}
                      height={41}
                    />
                  </figure>
                  <h3 className="ac-title">
                    Minimal<span>Downtime</span>
                  </h3>
                  <p className="fs-16">
                    We understand the importance of your work and thus ensure to
                    design the software migration and modernization process with
                    minimal downtime. Enjoy no disruption to legacy
                    modernization services.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="software-logo text-center dark-blue-box">
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
                    Efficient Project<span> Management</span>
                  </h3>
                  <p className="fs-16">
                    We strive to respond to our clients promptly, keep them in
                    the loop with constant communication and regular reports,
                    and deliver projects on time with efficient project
                    management.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="software-logo text-center dark-blue-box">
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
                    DevOps<span>Culture</span>
                  </h3>
                  <p className="fs-16">
                    With an agile and DevOps approach, we modernize and deliver
                    your solutions rapidly. We help you always be a step ahead
                    of the competition.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="software-logo text-center dark-blue-box">
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
                    Leverage Latest<span>Tech Stack</span>
                  </h3>
                  <p className="fs-16">
                    We have experience developing and delivering software and
                    applications with the latest technologies like Cloud, RPA,
                    Blockchain, AI & ML, and Data Analytics.
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
