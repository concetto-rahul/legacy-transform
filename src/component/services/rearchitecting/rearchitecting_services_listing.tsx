import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function RearchitectingServicesListing() {
  return (
    <section className="serviceslisting secpadding">
      <div className="container">
        <section className="servicelistsection">
          <h2 className="text-center m-auto ac-heading text-black">
            Other&nbsp;<span className="text-blue">Modernization Services</span>
          </h2>
          <div className="serviceslisting">
            <div className="serviceslistbox shade-orange p-4 d-none">
              <div className="row align-items-center">
                <div className="col-12 col-md-5 col-lg-4 text-center serviceslistboxleft">
                  <figure className="p-3">
                    <Image
                      src="/assets/images/service-list/legacy-app-upgrade.svg"
                      alt="legacy-app-upgrade"
                      title="legacy-app-upgrade"
                      width={47}
                      height={47}
                    />
                  </figure>
                  <h3>Legacy App Upgrade</h3>
                  <Link
                    href="#"
                    className="btncommon btn-outline"
                    title="LEARN MORE"
                  >
                    LEARN MORE
                    <BsArrowRight size="18" />
                  </Link>
                </div>
                <div className="col-12 col-md-7 col-lg-8 serviceslistboxright mt-4 mt-md-0">
                  <p>
                    How long has it been? Have you upgraded your legacy
                    applications? Upgrading your applications keeps them secure
                    and less vulnerable to cyber attacks. Get access to our
                    legacy app upgrade services to improve the performance of
                    your legacy applications.
                  </p>
                  <h4 className="underscore-title">What are the benefits:</h4>
                  <ul>
                    <li>Increased Performance</li>
                    <li>Faster Development</li>
                    <li>Improved User Experiences</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="serviceslistbox shade-purple p-4">
              <div className="row align-items-center">
                <div className="col-12 col-md-5 col-lg-4 text-center serviceslistboxleft">
                  <figure className="p-3">
                    <Image
                      src="/assets/images/service-list/software-re-architecting.svg"
                      alt="software-re-architecting"
                      title="software-re-architecting"
                      width={47}
                      height={47}
                    />
                  </figure>
                  <h3>
                    Software
                    <br />
                    Re-engineering
                  </h3>
                  <Link
                    href="#"
                    className="btncommon btn-outline"
                    title="LEARN MORE"
                  >
                    LEARN MORE
                    <BsArrowRight size="18" />
                  </Link>
                </div>
                <div className="col-12 col-md-7 col-lg-8 serviceslistboxright mt-4 mt-md-0">
                  <p>
                    Looking for an expert development partner to re-engineer
                    your legacy software? Legacy Transform is the right name to
                    trust. Our expert mobile app developers are well-versed in
                    using modern and legacy technologies to make the software
                    re-engineering process smooth and seamless.
                  </p>
                  <h4 className="underscore-title">What are the benefits:</h4>
                  <ul>
                    <li>Switch to the Modern Technology</li>
                    <li>Enhancing Application Value</li>
                    <li>Resolve issues & errors</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="serviceslistbox shade-blue p-4 d-none">
              <div className="row align-items-center">
                <div className="col-12 col-md-5 col-lg-4 text-center serviceslistboxleft">
                  <figure className="p-3">
                    <Image
                      src="/assets/images/service-list/desktop-web-app-migration.svg"
                      alt="desktop-web-app-migration"
                      title="desktop-web-app-migration"
                      width={47}
                      height={47}
                    />
                  </figure>
                  <h3>Desktop to Web App Migration</h3>
                  <Link
                    href="#"
                    className="btncommon btn-outline"
                    title="LEARN MORE"
                  >
                    LEARN MORE
                    <BsArrowRight size="18" />
                  </Link>
                </div>
                <div className="col-12 col-md-7 col-lg-8 serviceslistboxright mt-4 mt-md-0">
                  <p>
                    We help businesses relocate their business applications to a
                    more flexible and scalable environment. With our
                    desktop-to-web application migration services, we renew the
                    technology stack to make the applications mobile-friendly
                    and compatible with multiple devices and platforms.
                  </p>
                  <h4 className="underscore-title">What are the benefits:</h4>
                  <ul>
                    <li>Higher Processing Speeds</li>
                    <li>Improved Flexibility</li>
                    <li>More Security & Scalability</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="serviceslistbox shade-yellow p-4 d-none">
              <div className="row align-items-center">
                <div className="col-12 col-md-5 col-lg-4 text-center serviceslistboxleft">
                  <figure className="p-3">
                    <Image
                      src="/assets/images/service-list/cloud-migration.svg"
                      alt="cloud-migration"
                      title="cloud-migration"
                      width={47}
                      height={47}
                    />
                  </figure>
                  <h3>
                    Cloud
                    <br /> Migration
                  </h3>
                  <Link
                    href="#"
                    className="btncommon btn-outline"
                    title="LEARN MORE"
                  >
                    LEARN MORE
                    <BsArrowRight size="18" />
                  </Link>
                </div>
                <div className="col-12 col-md-7 col-lg-8 serviceslistboxright mt-4 mt-md-0">
                  <p>
                    Migrating to the cloud is the need of the hour; thus, all
                    companies plan to migrate to the cloud. We leverage our
                    years of expertise and experience to make challenging cloud
                    migration seamless and hassle-free for clients. We help you
                    get the maximum benefits of the cloud platform.
                  </p>
                  <h4 className="underscore-title">We Check For</h4>
                  <ul>
                    <li>Cost-efficient Maintenance</li>
                    <li>Data Access Control</li>
                    <li>Automatic Software Upgrades</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="serviceslistbox shade-skin p-4 d-none">
              <div className="row align-items-center">
                <div className="col-12 col-md-5 col-lg-4 text-center serviceslistboxleft">
                  <figure className="p-3">
                    <Image
                      src="/assets/images/service-list/api-integration.svg"
                      alt="api-integration"
                      title="api-integration"
                      width={47}
                      height={47}
                    />
                  </figure>
                  <h3>
                    API
                    <br /> Integrations
                  </h3>
                  <Link
                    href="#"
                    className="btncommon btn-outline"
                    title="LEARN MORE"
                  >
                    LEARN MORE
                    <BsArrowRight size="18" />
                  </Link>
                </div>
                <div className="col-12 col-md-7 col-lg-8 serviceslistboxright mt-4 mt-md-0">
                  <p>
                    API Integration is the most feasible option for application
                    modernization where common development practices are not
                    possible. We develop custom APIs to integrate your legacy
                    applications with modern and cloud apps.
                  </p>
                  <h4 className="underscore-title">What are the benefits:</h4>
                  <ul>
                    <li>Quick Growth and Scalability</li>
                    <li>
                      Infrastructure Compatible with Current Business Needs
                    </li>
                    <li>Cost-effective</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="serviceslistbox shade-red p-4">
              <div className="row align-items-center">
                <div className="col-12 col-md-5 col-lg-4 text-center serviceslistboxleft">
                  <figure className="p-3">
                    <Image
                      src="/assets/images/service-list/software-re-engineering.svg"
                      alt="software-re-engineering"
                      title="software-re-engineering"
                      width={47}
                      height={47}
                    />
                  </figure>
                  <h3>
                    Software
                    <br />
                    Audit & Assessment
                  </h3>
                  <Link
                    href="#"
                    className="btncommon btn-outline"
                    title="LEARN MORE"
                  >
                    LEARN MORE
                    <BsArrowRight size="18" />
                  </Link>
                </div>
                <div className="col-12 col-md-7 col-lg-8 serviceslistboxright mt-4 mt-md-0">
                  <p>
                    Want a detailed audit for your legacy software? Avail of the
                    software audit and assessment services of Legacy Transform
                    to identify and detect the loopholes in your applications.
                    We help you detect & resolve the issues like potential
                    security risks, outdated licenses and technologies.
                  </p>
                  <h4 className="underscore-title">What are the benefits:</h4>
                  <ul>
                    <li>Timely Risk Identification</li>
                    <li>List potential improvements</li>
                    <li>Enhancing Application Value</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
