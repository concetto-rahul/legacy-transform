import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function RearchitectingWeCanHelp() {
  return (
    <section className="we-can-help">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
            <div className="get-left text-center m-auto">
              <h4 className="ac-heading text-white">
                Want to Re Architect your&nbsp;<span>Legacy Software?</span>
              </h4>
              <p className="fs-16 fh-26 service-text text-white">
                Avail of our&nbsp;<b>Legacy System Architecture Improvement</b>
                &nbsp;Services to make your software more flexible & scalable
                for rapid business growth.
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
