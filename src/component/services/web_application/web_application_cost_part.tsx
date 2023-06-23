import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function WebApplicationCostPart() {
  return (
    <section className="cost-part">
      <div className="container">
        <h2 className="ac-heading ms-auto text-center text-black">
          Desktop to Web app Migration:&nbsp;
          <span className="text-blue">Cost & Timeline</span>
        </h2>
        <div className="row">
          <div className="col-md-4">
            <div className="costs-left">
              <div className="cost-year">
                <h3 className="ac-text">2-3 months</h3>
                <p className="fs-16 pt-3">
                  Standard time for 1-2 workloads of medium complexity.
                </p>
              </div>
            </div>
            <div className="costs-left">
              <div className="cost-year">
                <h3 className="ac-text">3-7 months</h3>
                <p className="fs-16 pt-3">Migrating a simple desktop app</p>
              </div>
            </div>
            <div className="costs-left">
              <div className="cost-year">
                <h3 className="ac-text">6+ months</h3>
                <p className="fs-16 pt-3">
                  Migrating a simple complex app with significant modifications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="costs-right">
              <p className="fs-16 text-left">
                The desktop to web app migration can vary depending on the
                project specifics. Here are the key factors that may affect your
                desktop to web application migration cost:
              </p>
              <ul className="mt-5">
                <li>Scope of migration</li>
                <li>Complexity of applications and their dependencies.</li>
                <li>
                  Deploying to public/private, multi-cloud, or hybrid cloud
                </li>
                <li>The scope of application modernization activities.</li>
                <li>Application availability requirements.</li>
                <li>Migration Data Volume.</li>
              </ul>
              <p className="fs-16 text-left mt-4">
                We migrate apps in several iterations to avoid errors and keep
                downtime minimal. The time required for Desktop to web
                application migration may also vary depending on the
                requirements.
              </p>
              <Link
                className="icon-button d-flex ac-btn-common mt-4"
                href="/contactus"
                title="Still Confused? LET'S TALK"
              >
                Still Confused? LET&apos;S TALK
                <BsArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
