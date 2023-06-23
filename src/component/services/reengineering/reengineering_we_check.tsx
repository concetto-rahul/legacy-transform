export default function ReengineeringWeCheck() {
  return (
    <section className="we-check">
      <div className="container">
        <h2 className="ac-heading ms-auto text-center text-black">
          Software Audit&nbsp;<span className="text-blue">Needed When</span>
        </h2>
        <div className="audit-view d-flex mt-2 flex-wrap flex-xxl-nowrap justify-content-center">
          <div className="first-view">
            <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
              <figure className="company-bg me-3">
                <span className="text-blue">01</span>
              </figure>
              <h3 className="ac-title mt-0">
                Software lacking the desired quality
              </h3>
            </div>
          </div>
          <div className="first-view">
            <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
              <figure className="company-bg me-3">
                <span className="text-blue">02</span>
              </figure>
              <h3 className="ac-title mt-0">New technology releases</h3>
            </div>
          </div>
          <div className="first-view">
            <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
              <figure className="company-bg me-3">
                <span className="text-blue">03</span>
              </figure>
              <h3 className="ac-title mt-0">Change in business process</h3>
            </div>
          </div>
          <div className="first-view">
            <div className="d-flex justify-content-start align-items-center reduce-left mb-lg-0">
              <figure className="company-bg me-3">
                <span className="text-blue">04</span>
              </figure>
              <h3 className="ac-title mt-0">
                Lack of technology vendor support
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
