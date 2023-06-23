import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function ReengineeringWeCanHelp() {
  return (
    <section className="we-can-help">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
            <div className="get-left text-center m-auto">
              <h4 className="ac-heading text-white">
                Want to talk to a &nbsp;
                <span>Software Reengineering expert?</span>
              </h4>
              <p className="fs-16 fh-26 service-text text-white">
                Not sure whether your business applications need reengineering
                or not? Contact Legacy Transform, the top legacy software
                modernization and mobile app porting company. Get complete
                advice on software reengineering services based on your business
                & technical perspectives.
              </p>
              <Link
                className="icon-button d-flex ac-btn-common m-auto mt-4"
                href="software-contact-us.html"
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
