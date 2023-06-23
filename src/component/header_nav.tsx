"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HeaderNav() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <div>
      <div className="nav-menu-left">
        <nav
          className="menu"
          id="menu"
          style={{ left: showMenu ? "0px" : "-500px" }}
        >
          <div className="menu_mobile_visibility d-flex align-items-center justify-content-between p-3">
            <div className="logo-main">
              <Link className="d-block" href="/">
                <Image
                  src="/assets/images/LegacyTransform-Logo.svg"
                  alt="LegacyTransform"
                  title="LegacyTransform"
                  width={220}
                  height={26}
                  className="lazy logo-legacy"
                />
              </Link>
            </div>
            <div className="logo-close">
              <Link
                href="#"
                className="menu__close"
                id="menu__close"
                title="Menu Close"
                onClick={() => setShowMenu(false)}
                style={{
                  display: showMenu ? "inline-flex" : "none",
                }}
              >
                <Image
                  src="/assets/images/close_nav.svg"
                  alt="Mobile close nav"
                  title="Mobile close nav"
                  width={18}
                  height={18}
                  className="ac-icon"
                />
              </Link>
            </div>
          </div>
          <ul className="mobile-nav" id="menu_ul">
            <li className="first-new is-open-new">
              <Link href="/services" title="Our Services">
                Our Services
              </Link>
              <span
                className={showSubMenu ? "is-close arrow-plus" : "arrow-plus"}
                onClick={() => setShowSubMenu(!showSubMenu)}
              ></span>
              <ul className="sub-menu">
                <li className="first-new">
                  <Link
                    href="/services/software-system-assessments-and-audits"
                    title="Software System Assessments and Audits"
                  >
                    Software System Assessments and Audits
                  </Link>
                </li>
                <li className="first-new">
                  <Link
                    href="/services/desktop-to-web-application-migration"
                    title="desktop-Web-Application-Migration-Services"
                  >
                    Desktop To Web Application Migration
                  </Link>
                </li>
                <li className="first-new d-none">
                  <Link href="#" title="Legacy Application Upgrade">
                    Legacy Application Upgrade
                  </Link>
                </li>
                <li className="first-new">
                  <Link
                    href="/services/software-rearchitecting"
                    title="Software Re-architecting"
                  >
                    Software Re-architecting
                  </Link>
                </li>
                <li className="first-new d-none">
                  <Link href="#" title="Cloud Migration">
                    Cloud Migration
                  </Link>
                </li>
                <li className="first-new d-none">
                  <Link href="#" title="API Integrations">
                    API Integrations
                  </Link>
                </li>
                <li className="first-new">
                  <Link
                    href="/services/software-reengineering"
                    title="Software Re-engineering"
                  >
                    Software Re-engineering
                  </Link>
                </li>
              </ul>
            </li>
            <li className="first-new d-none">
              <Link href="#" title="Our Work">
                Our Work
              </Link>
            </li>
            <li className="first-new">
              <Link href="/aboutus" title="About Us">
                About Us
              </Link>
            </li>
            <li className="first-new d-none">
              <Link href="#" title="Blog">
                Blog
              </Link>
            </li>
          </ul>
          <div className="row">
            <div className="nav-menu-right d-block d-md-none me-0 me-md-4 me-xl-0 mt-4">
              <Link
                href="/contactus"
                className="icon-button d-flex ac-btn-common"
                title="Contact Us"
              >
                Contact Us
                <i className="ac-icon" data-icon="rapid-contact-us"></i>
              </Link>
            </div>
          </div>
          <ul className="overflow sub-menu"></ul>
        </nav>
      </div>
      <div className="nav-overlay"></div>
      <div className="menu_open_close text-right">
        <Link
          href="#"
          className="menu__open"
          id="menu__open"
          title="Menu Open"
          onClick={() => setShowMenu(true)}
        >
          <Image
            src="/assets/images/manu.svg"
            alt="Mobile nav"
            title="Mobile nav"
            width={35}
            height={35}
          />
        </Link>
      </div>
    </div>
  );
}
