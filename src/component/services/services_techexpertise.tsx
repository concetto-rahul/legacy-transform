import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function ServicesTechexpertise() {
  return (
    <section className="techexpertise bglight secpadding ">
      <div className="container">
        <h2 className="ac-heading ms-auto text-center text-black">
          Technical Expertise In{" "}
          <span className="text-blue">Outdated Technology</span>
        </h2>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="techexpertisebox text-center">
              <figure className="techexpertisebox-img mb-4">
                <Image
                  src="/assets/images/service-list/vbdotnet.svg"
                  alt="vbdotnet"
                  title="vbdotnet"
                  width={361}
                  height={288}
                />
              </figure>
              <div className="techexpertiseboxcontent">
                <h3 className="underlinetitle underlinetitle-light mb-3">
                  VISUAL BASIC AND VB.NET APPLICATION MODERNIZATION SERVICES
                </h3>
                <p className="mb-3">
                  A decade ago, Visual Basic apps were introduced in almost
                  every business niche. Nowadays, the more reliable and
                  productive tools displaced them, so migration is the way to
                  go.
                </p>
                <p className="mb-3">
                  Using our established expertise, we developed a unique
                  approach to upgrading and extending VB.NET apps.
                </p>
                <Link
                  href="/contactus"
                  className="btncommon btn-outline"
                  title="LEARN MORE"
                >
                  LEARN MORE <BsArrowRight size="18" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="techexpertisebox text-center">
              <figure className="techexpertisebox-img mb-4">
                <Image
                  src="/assets/images/service-list/foxpro.svg"
                  alt="foxpro"
                  title="foxpro"
                  width={361}
                  height={288}
                />
              </figure>
              <div className="techexpertiseboxcontent">
                <h3 className="underlinetitle underlinetitle-light mb-3">
                  VISUAL FOXPRO APPLICATION MODERNIZATION SERVICES
                </h3>
                <p className="mb-3">
                  Along with Visual Basic, Visual FoxPro was a popular language
                  to automate core workflows. Over the years, Visual FoxPro apps
                  became faulty and expensive to maintain.
                </p>
                <p className="mb-3">
                  We offer an advanced legacy modernization solution that allows
                  companies to broaden app&apos;s capabilities.
                </p>
                <Link
                  href="/contactus"
                  className="btncommon btn-outline"
                  title="LEARN MORE"
                >
                  LEARN MORE <BsArrowRight size="18" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
