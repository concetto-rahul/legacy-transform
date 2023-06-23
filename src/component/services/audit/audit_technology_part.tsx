"use client";

import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function AuditTechnologyPart() {
  const [selectedTab, setSelectedTab] = useState("v-pills-home");
  return (
    <section className="technology-part">
      <div className="container">
        <h2 className="ac-heading text-black text-center">
          Technologies&nbsp;<span className="text-blue">We Work On</span>
        </h2>
        <div className="technologies-tabs">
          <div className="row">
            <div className="col-md-4 col-lg-3">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className={`nav-link ${
                    selectedTab === "v-pills-home" ? "active" : ""
                  }`}
                  onClick={() => setSelectedTab("v-pills-home")}
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected={selectedTab === "v-pills-home"}
                >
                  Application Environments
                </button>
                <button
                  className={`nav-link ${
                    selectedTab === "v-pills-profile" ? "active" : ""
                  }`}
                  onClick={() => setSelectedTab("v-pills-profile")}
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected={selectedTab === "v-pills-profile"}
                >
                  Development Languages
                </button>
                <button
                  className={`nav-link ${
                    selectedTab === "v-pills-disabled" ? "active" : ""
                  }`}
                  onClick={() => setSelectedTab("v-pills-disabled")}
                  id="v-pills-disabled-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-disabled"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-disabled"
                  aria-selected={selectedTab === "v-pills-disabled"}
                >
                  Data Sources
                </button>
                <button
                  className={`nav-link ${
                    selectedTab === "v-pills-messages" ? "active" : ""
                  }`}
                  onClick={() => setSelectedTab("v-pills-messages")}
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected={selectedTab === "v-pills-messages"}
                >
                  Platforms
                </button>
              </div>
            </div>
            <div className="col-md-8 col-lg-9 p-0">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className={`tab-pane fade ${
                    selectedTab === "v-pills-home" ? "show active" : ""
                  }`}
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                  tabIndex={0}
                >
                  <ul className="d-flex align-items-center flex-wrap">
                    <li>FoxPro</li>
                    <li>ASP</li>
                    <li>VisiCalc</li>
                    <li>MS Access</li>
                    <li>Java</li>
                    <li>Delphi</li>
                    <li>Web Forms</li>
                    <li>Visual Basic</li>
                    <li>VB.NET</li>
                  </ul>
                </div>
                <div
                  className={`tab-pane fade ${
                    selectedTab === "v-pills-profile" ? "show active" : ""
                  }`}
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                  tabIndex={0}
                >
                  <ul className="d-flex align-items-center flex-wrap">
                    <li>C</li>
                    <li>Basic</li>
                    <li>FoxPro</li>
                    <li>Pascal</li>
                    <li>FORTRAN</li>
                    <li>Visual Basic</li>
                    <li>Delphi</li>
                    <li>LISP</li>
                    <li>Java</li>
                    <li>VBA</li>
                  </ul>
                </div>
                <div
                  className={`tab-pane fade ${
                    selectedTab === "v-pills-disabled" ? "show active" : ""
                  }`}
                  id="v-pills-disabled"
                  role="tabpanel"
                  aria-labelledby="v-pills-disabled-tab"
                  tabIndex={0}
                >
                  <ul className="d-flex align-items-center flex-wrap">
                    <li>DB2</li>
                    <li>FoxPro</li>
                    <li>Paradox</li>
                    <li>Firebird</li>
                    <li>MS Access</li>
                    <li>Interbase</li>
                  </ul>
                </div>
                <div
                  className={`tab-pane fade ${
                    selectedTab === "v-pills-messages" ? "show active" : ""
                  }`}
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                  tabIndex={0}
                >
                  <ul className="d-flex align-items-center flex-wrap">
                    <li>MS DOS</li>
                    <li>Windows 3.1</li>
                    <li>Windows NT</li>
                    <li>Windows 95</li>
                    <li>Windows 98</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="toolstechcta">
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-md-9">
              <h3 className="ac-heading toolstechctatitle pb-0">
                Need expert help to Modernize your Legacy Software?
              </h3>
            </div>
            <div className="col-md-3 d-flex justify-content-end">
              <Link
                href="/contactus"
                className="btncommon btn-outline"
                title="get-contact"
              >
                Get-Contact
                <BsArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
