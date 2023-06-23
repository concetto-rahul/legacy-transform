import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function ServicesListing() {
  return (
    <section className="serviceslisting secpadding">
      <div className="container">
        <section className="servicelistsection">
          <h2 className="text-center m-auto ac-heading text-black">
            Legacy Application{" "}
            <span className="text-blue">Modernization Services</span>
          </h2>
          <div className="serviceslisting">
            <div className="serviceslistbox shade-green p-4">
              <div className="row align-items-center">
                <div className="col-12 col-md-5 col-lg-4 text-center serviceslistboxleft">
                  <figure className="p-3">
                    <Image
                      src="/assets/images/service-list/software-assesment.svg"
                      alt="software-assesment"
                      title="software-assesment"
                      width={47}
                      height={47}
                    />
                  </figure>
                  <h3>Software System Assessments and Audits</h3>
                  <Link
                    href="/software-audit-services-detail.html"
                    className="btncommon btn-outline"
                    title="LEARN MORE"
                  >
                    LEARN MORE
                    <BsArrowRight size="18" />
                  </Link>
                </div>
                <div className="col-12 col-md-7 col-lg-8 serviceslistboxright mt-4 mt-md-0">
                  <p>
                    When is the right time to renew the software? There&apos;s
                    no right answer. On one hand, legacy software is critical
                    for daily business operations. On the other hand, it incurs
                    unjustifiable expenses, which presents a dilemma to the
                    company stakeholders. A foundation for making decisions
                    about this issue can be{" "}
                  </p>
                  <h4 className="underscore-title">We Check For</h4>
                  <ul>
                    <li>Security Issues</li>
                    <li>Performance Issues</li>
                    <li>Poor Programming Practices</li>
                    <li>Room For Improvement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="serviceslistbox shade-orange p-4">
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
                  <h3>Legacy Application Upgrade</h3>
                  <Link
                    href="/software-contact-us.html"
                    className="btncommon btn-outline"
                    title="LEARN MORE"
                  >
                    LEARN MORE <BsArrowRight size="18" />
                  </Link>
                </div>
                <div className="col-12 col-md-7 col-lg-8 serviceslistboxright mt-4 mt-md-0">
                  <p>
                    When is the right time to renew the software? There&apos;s
                    no right answer. On one hand, legacy software is critical
                    for daily business operations. On the other hand, it incurs
                    unjustifiable expenses, which presents a dilemma to the
                    company stakeholders. A foundation for making decisions
                    about this issue can be{" "}
                  </p>
                  <h4 className="underscore-title">We Check For</h4>
                  <ul>
                    <li>Security Issues</li>
                    <li>Performance Issues</li>
                    <li>Poor Programming Practices</li>
                    <li>Room For Improvement</li>
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
                    Re-architecting
                  </h3>
                  <Link
                    href="/software-contact-us.html"
                    className="btncommon btn-outline"
                    title="LEARN MORE"
                  >
                    LEARN MORE <BsArrowRight size="18" />
                  </Link>
                </div>
                <div className="col-12 col-md-7 col-lg-8 serviceslistboxright mt-4 mt-md-0">
                  <p>
                    When is the right time to renew the software? There&apos;s
                    no right answer. On one hand, legacy software is critical
                    for daily business operations. On the other hand, it incurs
                    unjustifiable expenses, which presents a dilemma to the
                    company stakeholders. A foundation for making decisions
                    about this issue can be{" "}
                  </p>
                  <h4 className="underscore-title">We Check For</h4>
                  <ul>
                    <li>Security Issues</li>
                    <li>Performance Issues</li>
                    <li>Poor Programming Practices</li>
                    <li>Room For Improvement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="serviceslistbox shade-yellow p-4">
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
                    href="/software-contact-us.html"
                    className="btncommon btn-outline"
                    title="LEARN MORE"
                  >
                    LEARN MORE <BsArrowRight size="18" />
                  </Link>
                </div>
                <div className="col-12 col-md-7 col-lg-8 serviceslistboxright mt-4 mt-md-0">
                  <p>
                    When is the right time to renew the software? There&apos;s
                    no right answer. On one hand, legacy software is critical
                    for daily business operations. On the other hand, it incurs
                    unjustifiable expenses, which presents a dilemma to the
                    company stakeholders. A foundation for making decisions
                    about this issue can be{" "}
                  </p>
                  <h4 className="underscore-title">We Check For</h4>
                  <ul>
                    <li>Security Issues</li>
                    <li>Performance Issues</li>
                    <li>Poor Programming Practices</li>
                    <li>Room For Improvement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="serviceslistbox shade-blue p-4">
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
                  <h3>Desktop to Web Application Migration</h3>
                  <Link
                    href="software-contact-us.html"
                    className="btncommon btn-outline"
                    title="LEARN MORE"
                  >
                    LEARN MORE <BsArrowRight size="18" />
                  </Link>
                </div>
                <div className="col-12 col-md-7 col-lg-8 serviceslistboxright mt-4 mt-md-0">
                  <p>
                    When is the right time to renew the software? There&apos;s
                    no right answer. On one hand, legacy software is critical
                    for daily business operations. On the other hand, it incurs
                    unjustifiable expenses, which presents a dilemma to the
                    company stakeholders. A foundation for making decisions
                    about this issue can be{" "}
                  </p>
                  <h4 className="underscore-title">We Check For</h4>
                  <ul>
                    <li>Security Issues</li>
                    <li>Performance Issues</li>
                    <li>Poor Programming Practices</li>
                    <li>Room For Improvement</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="serviceslistbox shade-skin p-4">
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
                    href="/software-contact-us.html"
                    className="btncommon btn-outline"
                    title="LEARN MORE"
                  >
                    LEARN MORE <BsArrowRight size="18" />
                  </Link>
                </div>
                <div className="col-12 col-md-7 col-lg-8 serviceslistboxright mt-4 mt-md-0">
                  <p>
                    When is the right time to renew the software? There&apos;s
                    no right answer. On one hand, legacy software is critical
                    for daily business operations. On the other hand, it incurs
                    unjustifiable expenses, which presents a dilemma to the
                    company stakeholders. A foundation for making decisions
                    about this issue can be{" "}
                  </p>
                  <h4 className="underscore-title">We Check For</h4>
                  <ul>
                    <li>Security Issues</li>
                    <li>Performance Issues</li>
                    <li>Poor Programming Practices</li>
                    <li>Room For Improvement</li>
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
                    <br /> Re-engineering
                  </h3>
                  <Link
                    href="reengineering-service-detail.html"
                    className="btncommon btn-outline"
                    title="LEARN MORE"
                  >
                    LEARN MORE <BsArrowRight size="18" />
                  </Link>
                </div>
                <div className="col-12 col-md-7 col-lg-8 serviceslistboxright mt-4 mt-md-0">
                  <p>
                    When is the right time to renew the software? There&apos;s
                    no right answer. On one hand, legacy software is critical
                    for daily business operations. On the other hand, it incurs
                    unjustifiable expenses, which presents a dilemma to the
                    company stakeholders. A foundation for making decisions
                    about this issue can be{" "}
                  </p>
                  <h4 className="underscore-title">We Check For</h4>
                  <ul>
                    <li>Security Issues</li>
                    <li>Performance Issues</li>
                    <li>Poor Programming Practices</li>
                    <li>Room For Improvement</li>
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
