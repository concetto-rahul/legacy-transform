"use client";
import Image from "next/image";
import { useState } from "react";

export default function RearchitectingProcess() {
  const [selectedTab, setSelectedTab] = useState("category_tab1");
  return (
    <section className="rearchitecting-process">
      <div className="container">
        <h2 className="ac-heading ms-auto text-center text-black">
          Software Re-architecting&nbsp;
          <span className="text-blue">Process</span>
        </h2>
        <div className="row">
          <div className="col-12 col-md-5 col-lg-4">
            <div className="rearchitect-left">
              <nav id="myTab" className="nav nav-pills flex-column">
                <a
                  href="#category_tab1"
                  data-bs-toggle="pill"
                  className={`nav-link ${
                    selectedTab === "category_tab1" ? "active" : ""
                  }`}
                  onMouseEnter={() => setSelectedTab("category_tab1")}
                >
                  Assessing the Current System
                </a>
                <a
                  href="#category_tab2"
                  data-bs-toggle="pill"
                  className={`nav-link ${
                    selectedTab === "category_tab2" ? "active" : ""
                  }`}
                  onMouseEnter={() => setSelectedTab("category_tab2")}
                >
                  Planning
                </a>
                <a
                  href="#category_tab3"
                  data-bs-toggle="pill"
                  className={`nav-link ${
                    selectedTab === "category_tab3" ? "active" : ""
                  }`}
                  onMouseEnter={() => setSelectedTab("category_tab3")}
                >
                  Transitional Architecture
                </a>
                <a
                  href="#category_tab4"
                  data-bs-toggle="pill"
                  className={`nav-link ${
                    selectedTab === "category_tab4" ? "active" : ""
                  }`}
                  onMouseEnter={() => setSelectedTab("category_tab4")}
                >
                  Release the Pilot
                </a>
                <a
                  href="#category_tab5"
                  data-bs-toggle="pill"
                  className={`nav-link ${
                    selectedTab === "category_tab5" ? "active" : ""
                  }`}
                  onMouseEnter={() => setSelectedTab("category_tab5")}
                >
                  Implement the System
                </a>
                <a
                  href="#category_tab6"
                  data-bs-toggle="pill"
                  className={`nav-link ${
                    selectedTab === "category_tab6" ? "active" : ""
                  }`}
                  onMouseEnter={() => setSelectedTab("category_tab6")}
                >
                  Maintain the System
                </a>
              </nav>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-8">
            <div className="rearchitect-right tab-content h-100">
              <article
                className={`tab-pane fade mt-2 mt-md-0 h-100 ${
                  selectedTab === "category_tab1" ? "active show" : ""
                }`}
                id="category_tab1"
              >
                <div className="d-flex flex-column align-items-center justify-content-center h-100 p-4 p-md-0">
                  <Image
                    src="/assets/images/current-system.svg"
                    alt="current-system"
                    title="current-system"
                    width={144}
                    height={94}
                  />
                  <h3 className="ac-heading mt-5 pb-2 text-center">
                    Assessing the Current System
                  </h3>
                  <p className="ac-title w-75 text-center fs-22 fh-26">
                    Identify problem areas in the existing architecture & ways
                    to resolve them.
                  </p>
                </div>
              </article>
              <article
                className={`tab-pane fade mt-2 mt-md-0 h-100 ${
                  selectedTab === "category_tab2" ? "active show" : ""
                }`}
                id="category_tab2"
              >
                <div className="d-flex flex-column align-items-center justify-content-center h-100 p-4 p-md-0">
                  <Image
                    src="/assets/images/planing.svg"
                    alt="planing"
                    title="planing"
                    width={144}
                    height={94}
                  />
                  <h3 className="ac-heading mt-5 pb-2 text-center">Planning</h3>
                  <p className="ac-title w-75 text-center fs-22 fh-26">
                    Plan the re-architecting process for minimal errors &
                    business disruption.
                  </p>
                </div>
              </article>
              <article
                className={`tab-pane fade mt-2 mt-md-0 h-100 ${
                  selectedTab === "category_tab3" ? "active show" : ""
                }`}
                id="category_tab3"
              >
                <div className="d-flex flex-column align-items-center justify-content-center h-100 p-4 p-md-0">
                  <Image
                    src="/assets/images/Architecture.svg"
                    alt="Transitional Architecture"
                    title="Transitional Architecture"
                    width={135}
                    height={135}
                  />
                  <h3 className="ac-heading mt-5 pb-2 text-center">
                    Transitional Architecture
                  </h3>
                  <p className="ac-title w-75 text-center fs-22 fh-26">
                    Build a temporary architecture for use in case of extreme
                    changes.
                  </p>
                </div>
              </article>
              <article
                className={`tab-pane fade mt-2 mt-md-0 h-100 ${
                  selectedTab === "category_tab4" ? "active show" : ""
                }`}
                id="category_tab4"
              >
                <div className="d-flex flex-column align-items-center justify-content-center h-100 p-4 p-md-0">
                  <Image
                    src="/assets/images/roll-pilot.svg"
                    alt="Release the Pilot"
                    title="Release the Pilot"
                    width={135}
                    height={135}
                  />
                  <h3 className="ac-heading mt-5 pb-2 text-center">
                    Release the Pilot
                  </h3>
                  <p className="ac-title w-75 text-center fs-22 fh-26">
                    Before releasing the final architecture, we roll out a
                    pilot.
                  </p>
                </div>
              </article>
              <article
                className={`tab-pane fade mt-2 mt-md-0 h-100 ${
                  selectedTab === "category_tab5" ? "active show" : ""
                }`}
                id="category_tab5"
              >
                <div className="d-flex flex-column align-items-center justify-content-center h-100 p-4 p-md-0">
                  <Image
                    src="/assets/images/bug-fix.svg"
                    alt="Implement the System"
                    title="Implement the System"
                    width={135}
                    height={135}
                  />
                  <h3 className="ac-heading mt-5 pb-2 text-center">
                    Implement the System
                  </h3>
                  <p className="ac-title w-75 text-center fs-22 fh-26">
                    We fix bugs identified in the pilot & implement the new
                    system.
                  </p>
                </div>
              </article>
              <article
                className={`tab-pane fade mt-2 mt-md-0 h-100 ${
                  selectedTab === "category_tab6" ? "active show" : ""
                }`}
                id="category_tab6"
              >
                <div className="d-flex flex-column align-items-center justify-content-center h-100 p-4 p-md-0">
                  <Image
                    src="/assets/images/maintances.svg"
                    alt="Maintain the System"
                    title="Maintain the System"
                    width={135}
                    height={135}
                  />
                  <h3 className="ac-heading mt-5 pb-2">Maintain the System</h3>
                  <p className="ac-title w-75 text-center fs-22 fh-26">
                    We support the maintenance of the re-architected system.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
