import Image from "next/image";

export default function ServicesPopularApproch() {
  return (
    <section className="popularapproch secpadding">
      <div className="container">
        <div className="sectitlewrapper">
          <h2 className="ac-heading ms-auto text-center text-black">
            Popular Modernization Approaches.{" "}
            <span className="text-blue">What To Choose</span>
          </h2>
          <p className="sectitleinfo text-center">
            Depending on the assessment results and current business
            requirements, our development team will choose a technique for
            further work. Each of the options has specific characteristics and
            is designed to meet different needs.
          </p>
        </div>
        <figure className="techexpertisebox-img mx-100 mb-4 text-center ms-auto">
          <Image
            src="/assets/images/service-list/popularapproch.svg"
            alt="popularapproch"
            title="popularapproch"
            width={850}
            height={371}
          />
        </figure>
      </div>
    </section>
  );
}
