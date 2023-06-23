import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function AuditCostPart() {
  return (
    <section className="cost-part">
      <div className="container">
        <h2 className="ac-heading ms-auto text-center text-black">
          Software Audit:&nbsp;
          <span className="text-blue">Timeline & Costs</span>
        </h2>
        <div className="row">
          <div className="col-md-4">
            <div className="costs-left">
              <div className="cost-year">
                <h3 className="ac-text">3-6 months</h3>
                <p className="fs-16 pt-3">Preparation of Audit Materials</p>
              </div>
            </div>
            <div className="costs-left">
              <div className="cost-year">
                <h3 className="ac-text">3-6 months</h3>
                <p className="fs-16 pt-3">
                  Audit Entity Analyzes Self-Audit Materials and recommends
                  improvements
                </p>
              </div>
            </div>
            <div className="costs-left">
              <div className="cost-year">
                <h3 className="ac-text">6-24 months</h3>
                <p className="fs-16 pt-3">
                  Negotiation of Monetary and Non-Monetary Terms of Settlement.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="costs-right">
              <p className="fs-16 text-left">
                Many factors affect the cost of software audits and assessments,
                so one price will not fit every case. The key factors that can
                drive up the costs:
              </p>
              <ul className="mt-5">
                <li>
                  <b>Size:</b>&nbsp;The volume of data to assess in the software
                  will depend on the size of your organization and how many
                  users use that software. The software complexity and
                  dependencies also affects the cost.{" "}
                </li>
                <li>
                  <b>Vendor Type:</b>&nbsp;The type of vendor will also affect
                  the cost as many vendors like Microsoft, SAP, IBM, or Oracle
                  have a more labor-intensive process compared to vendors like
                  Adobe.
                </li>
                <li>
                  <b>Timeframe:</b>&nbsp;The audit timeframe also affects the
                  cost- some may take two to three months, and others can go for
                  a year.
                  <br />
                  However, the cost of a Software audit ranges from
                  $35,000-$100,0000, depending on unique client requirements.
                  The direct costs of a software audit are at least $50,000.{" "}
                </li>
              </ul>
              <Link
                className="icon-button d-flex ac-btn-common mt-5"
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
