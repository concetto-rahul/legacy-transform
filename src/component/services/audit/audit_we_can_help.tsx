import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function AuditWeCanHelp() {
  return (
    <section className="we-can-help">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
            <div className="get-left text-center m-auto">
              <h4 className="ac-heading text-white">
                Looking for an in-depth &nbsp;
                <span>audit & assessment of your software?</span>
              </h4>
              <p className="fs-16 fh-26 service-text text-white">
                Legacy Transform, the top legacy software audit services
                provider company, assesses your system and software from all
                aspects to help you decide on migration or modernization.
              </p>
              <Link
                className="icon-button d-flex ac-btn-common m-auto mt-4"
                href="/contactus"
                title="Get Assessment"
              >
                Get Assessment
                <BsArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
