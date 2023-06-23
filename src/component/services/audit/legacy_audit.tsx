import Image from "next/image";

export default function LegacyAudit() {
  return (
    <section className="legacy-audit p-0">
      <div className="container">
        <h2 className="ac-heading ms-auto text-center text-black">
          What do We Want&nbsp;
          <span className="text-blue">from your side?</span>
        </h2>
        <div className="legacy-box">
          <div className="row">
            <div className="col-md-6">
              <div className="audit-left">
                <p className="fs-16 text-left text-black">
                  Who will know your requirements better than you? Also, we
                  strive to deliver the solutions exactly like our clients want
                  and even better. We would like you to answer a few questions
                  to help us assess your app&apos;s business value and plan the
                  migration accordingly.
                </p>
                <ul className="audit-questions">
                  <li>How do you use the legacy system in your business?</li>
                  <li>How long do you want to use the system?</li>
                  <li>What are your business objectives?</li>
                  <li>Do you plan any changes in your business processes?</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="audit-right text-center mt-2 mt-lg-0 d-flex align-items-center justify-content-center h-100">
                <Image
                  src="/assets/images/lagncy-pc.svg"
                  alt="lagncy-pc"
                  title="lagncy-pc"
                  width={334}
                  height={281}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
