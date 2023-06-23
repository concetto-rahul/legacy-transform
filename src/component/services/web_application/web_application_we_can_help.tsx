import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function WebApplicationWeCanHelp() {
  return (
    <section className="we-can-help">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
            <div className="get-left text-center m-auto">
              <h4 className="ac-heading text-white">
                Ready to discuss your&nbsp;<span>desktop app migration?</span>
              </h4>
              <p className="fs-16 fh-26 service-text text-white">
                Concetto Labs is a top legacy modernization services provider
                making your migrations from legacy software to the modern
                platforms easier. Get in touch today.
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
