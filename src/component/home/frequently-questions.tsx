"use client";

import { useState } from "react";

export default function FrequentlyQuestions() {
  const [collapseName, setCollapseName] = useState("collapseOne");

  const collapseTab = (tabName: string) => {
    setCollapseName(collapseName === tabName ? "" : tabName);
  };
  return (
    <section className="frequently-questions">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="frequently-details m-auto text-center">
              <h2 className="ac-heading">
                Frequently Asked <span>Questions</span>
              </h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="accordian">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h3
                    className="accordion-header"
                    onClick={() => collapseTab("collapseOne")}
                  >
                    <button
                      className={`accordion-button text-black ${
                        collapseName === "collapseOne" ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded={collapseName === "collapseOne"}
                      aria-controls="collapseOne"
                    >
                      How do I know I need legacy software modernization
                      services?
                    </button>
                  </h3>
                  <div
                    id="collapseOne"
                    className={`accordion-collapse collapse ${
                      collapseName === "collapseOne" ? "show" : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="fs-16 text-left text-black">
                        There can be many factors that you can consider,
                        including applications running slow with many errors and
                        security patches, unwanted expenses in maintaining the
                        legacy applications, etc. If you face any such issue,
                        then it&apos;s high time you look for legacy software
                        modernization services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3
                    className="accordion-header"
                    onClick={() => collapseTab("collapseTwo")}
                  >
                    <button
                      className={`accordion-button text-black ${
                        collapseName === "collapseTwo" ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded={collapseName === "collapseTwo"}
                      aria-controls="collapseTwo"
                    >
                      How can I benefit from Legacy Migration?
                    </button>
                  </h3>
                  <div
                    id="collapseTwo"
                    className={`accordion-collapse collapse ${
                      collapseName === "collapseTwo" ? "show" : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="fs-16 text-left text-black">
                        Legacy migration brings several benefits, some of these
                        include:
                      </p>
                      <ul className="mt-3">
                        <li className="s-16 text-left text-black">
                          Increased productivity
                        </li>
                        <li className="s-16 text-left text-black">
                          Enhanced security
                        </li>
                        <li className="s-16 text-left text-black">
                          Use of latest and updated systems and technology
                        </li>
                        <li className="s-16 text-left text-black">
                          Reduced maintenance costs
                        </li>
                        <li className="s-16 text-left text-black">
                          Increased flexibility
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3
                    className="accordion-header"
                    onClick={() => collapseTab("collapseThree")}
                  >
                    <button
                      className={`accordion-button text-black ${
                        collapseName === "collapseThree" ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded={collapseName === "collapseThree"}
                      aria-controls="collapseThree"
                    >
                      How much time does it take for Legacy Migration?
                    </button>
                  </h3>
                  <div
                    id="collapseThree"
                    className={`accordion-collapse collapse ${
                      collapseName === "collapseThree" ? "show" : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="fs-16 text-left text-black">
                        The entire Legacy migration process can occur within 3
                        to 5 business days. However, it depends on the
                        requirements of the existing system.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3
                    className="accordion-header"
                    onClick={() => collapseTab("collapsefour")}
                  >
                    <button
                      className={`accordion-button text-black ${
                        collapseName === "collapsefour" ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsefour"
                      aria-expanded={collapseName === "collapsefour"}
                      aria-controls="collapsefour"
                    >
                      How much does it cost for Legacy Migration?
                    </button>
                  </h3>
                  <div
                    id="collapsefour"
                    className={`accordion-collapse collapse ${
                      collapseName === "collapsefour" ? "show" : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="fs-16 text-left text-black">
                        The cost depends on your app type, the languages, and
                        the technology of your application. Contact us to get a
                        quote for your project
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3
                    className="accordion-header"
                    onClick={() => collapseTab("collapsefive")}
                  >
                    <button
                      className={`accordion-button text-black ${
                        collapseName === "collapsefive" ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsefive"
                      aria-expanded={collapseName === "collapsefive"}
                      aria-controls="collapsefive"
                    >
                      Can I hire a team for Legacy Migration from Legacy
                      Transform?
                    </button>
                  </h3>
                  <div
                    id="collapsefive"
                    className={`accordion-collapse collapse ${
                      collapseName === "collapsefive" ? "show" : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="fs-16 text-left text-black">
                        Yes, of course. You can send us your requirements and we
                        will provide you with a list of Legacy Migration
                        experts. You can pick the best of them.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3
                    className="accordion-header"
                    onClick={() => collapseTab("collapsesix")}
                  >
                    <button
                      className={`accordion-button text-black ${
                        collapseName === "collapsesix" ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsesix"
                      aria-expanded={collapseName === "collapsesix"}
                      aria-controls="collapsesix"
                    >
                      Will the legacy data modernization affect my business
                      continuity?
                    </button>
                  </h3>
                  <div
                    id="collapsesix"
                    className={`accordion-collapse collapse ${
                      collapseName === "collapsesix" ? "show" : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="fs-16 text-left text-black">
                        No. We ensure to migrate and modernize your legacy apps
                        in the minimal time possible.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3
                    className="accordion-header"
                    onClick={() => collapseTab("collapseseven")}
                  >
                    <button
                      className={`accordion-button text-black ${
                        collapseName === "collapseseven" ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseseven"
                      aria-expanded={collapseName === "collapseseven"}
                      aria-controls="collapseseven"
                    >
                      Do you provide maintenance and support after Legacy
                      Migration?
                    </button>
                  </h3>
                  <div
                    id="collapseseven"
                    className={`accordion-collapse collapse ${
                      collapseName === "collapseseven" ? "show" : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p className="fs-16 text-left text-black">
                        Yes. We offer complete support and maintenance services
                        after the transfer of legacy applications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="icon-button d-flex ac-btn-common m-auto mt-5"
              href="software-contact-us.html"
              title="Still Confused? LET'S TALK"
            >
              Still Confused? LET&apos;S TALK
              <i className="ac-icon" data-icon="rapid-contact-us"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
