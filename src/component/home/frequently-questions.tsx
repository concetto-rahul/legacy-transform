"use client";

import { questions } from "@/utility/pages_data/frequently_asked_questions";
import Link from "next/link";
import { useState } from "react";

interface FrequentlyQuestionsTypes {
  pageName: string;
}

export default function FrequentlyQuestions({
  pageName,
}: FrequentlyQuestionsTypes) {
  const questionsList = questions[pageName];
  const [collapseName, setCollapseName] = useState("collapse1");

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
                {questionsList.map((val, key) => (
                  <div
                    className="accordion-item"
                    key={`${pageName}-accordion${key}`}
                  >
                    <h3
                      className="accordion-header"
                      onClick={() => collapseTab(`collapse${key + 1}`)}
                    >
                      <button
                        className={`accordion-button text-black ${
                          collapseName === `collapse${key + 1}`
                            ? ""
                            : "collapsed"
                        }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${key + 1}`}
                        aria-expanded={collapseName === `collapse${key + 1}`}
                        aria-controls={`collapse${key + 1}`}
                      >
                        {val.title}
                      </button>
                    </h3>
                    <div
                      id={`collapse${key + 1}`}
                      className={`accordion-collapse collapse ${
                        collapseName === `collapse${key + 1}` ? "show" : ""
                      }`}
                      data-bs-parent="#accordionExample"
                    >
                      <div
                        className="accordion-body"
                        dangerouslySetInnerHTML={{ __html: val.description }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link
              className="icon-button d-flex ac-btn-common m-auto mt-5"
              href="/contactus"
              title="Still Confused? LET'S TALK"
            >
              Still Confused? LET&apos;S TALK
              <i className="ac-icon" data-icon="rapid-contact-us"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
