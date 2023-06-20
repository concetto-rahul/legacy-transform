import "./globals.css";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: "Legacy Software Modernization Company | LegacyTansform",
  description: "Review our Powerapps development portfolio.",
  icons: {
    icon: [
      {
        url: "/assets/images/Logo-icon-transparent-svg.icon",
        type: "image/x-icon",
        sizes: "220x26"
      }
    ],
    apple: [
      {
        url: "/assets/images/apple-touch-icon-144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        url: "/assets/images/apple-touch-icon-72.png",
        sizes: "72x72",
        type: "image/png"
      },
      {
        url: "/assets/images/apple-touch-icon-57.png",
        sizes: "57x57",
        type: "image/png"
      }
    ]
  },
  openGraph: {
    title: "Legacy Software Modernization Company | LegacyTansform",
    description:
      "Looking for Legacy software modernization company? We provide software modernization services, including legacy software solutions to enhanced security, stability, and scalability. Contact Us Now.",
    url: "https://legacytransform.com/",
    site_name: "Legacy Transform",
    images: [
      {
        url: "/assets/images/LegacyTransform-Logo.svg",
        width: 220,
        height: 26
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Dynamic",
    description: "Dynamic",
    site: "@Legacy Transform",
    siteId: "@Legacy Transform",
    creator: "@Legacy Transform",
    creatorId: "@Legacy Transform",
    images: [
      {
        url: "/assets/images/LegacyTransform-Logo.svg",
        alt: "Legacy Transform",
        width: 800,
        height: 418
      }
    ]
  },
  alternates: {
    canonical: "https://legacytransform.com/",
    languages: {
      "en-us": "https://legacytransform.com/"
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const closeNav = () => {};
  const openNav = () => {};
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <div id="wrapper">
          <div id="back-top" title="Scroll To Top">
            <i className="ac-icon" data-icon="rapid-scroll-top"></i>
          </div>
          <header id="header">
            <div className="header-part">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 d-flex align-items-center justify-content-between">
                    <div className="rapid_logo_left">
                      <Link className="d-block" href="/">
                        <Image
                          src="/assets/images/LegacyTransform-Logo.svg"
                          alt="LegacyTransform"
                          title="LegacyTransform"
                          width={220}
                          height={26}
                        />
                      </Link>
                    </div>
                    <div className="rapid_menu_right">
                      <div className="nav-menu-left">
                        <nav className="menu" id="menu">
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
                              >
                                <i
                                  className="ac-icon"
                                  data-icon="win-close"
                                ></i>
                              </Link>
                            </div>
                          </div>
                          <ul className="mobile-nav" id="menu_ul">
                            <li className="first-new is-open-new">
                              <Link href="/services" title="Our Services">
                                Our Services
                              </Link>
                              <span className="arrow-plus"></span>
                              <ul className="sub-menu">
                                <li className="first-new">
                                  <Link
                                    href="/software-audit-services-detail"
                                    title="Software System Assessments and Audits"
                                  >
                                    Software System Assessments and Audits
                                  </Link>
                                </li>
                                <li className="first-new">
                                  <Link
                                    href="/desktop-Web-Application-Migration-Services"
                                    title="desktop-Web-Application-Migration-Services"
                                  >
                                    Desktop To Web Application Migration
                                  </Link>
                                </li>
                                <li className="first-new d-none">
                                  <Link
                                    href="#"
                                    title="Legacy Application Upgrade"
                                  >
                                    Legacy Application Upgrade
                                  </Link>
                                </li>
                                <li className="first-new">
                                  <Link
                                    href="/rearchitecting-service-detail"
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
                                    href="/reengineering-service-detail"
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
                                <i
                                  className="ac-icon"
                                  data-icon="rapid-contact-us"
                                ></i>
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
                        >
                          <i className="ac-icon" data-icon="win-menu"></i>
                        </Link>
                      </div>
                    </div>
                    <div className="nav-menu-right d-none d-xl-block me-0 me-md-4 me-xl-0">
                      <Link
                        className="icon-button d-flex ac-btn-common"
                        href="/contactus"
                        title="Contact Us"
                      >
                        Contact Us
                        <i className="ac-icon" data-icon="rapid-contact-us"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {children}
          <footer className="section bg-footer">
            <div className="container">
              <div className="footer-top">
                <div className="footer-row d-flex flex-wrap">
                  <div className="information mt-4 mt-md-0 our-service w-329">
                    <h3 className="footer-heading">Our Services</h3>
                    <ul className="list-unstyled footer-link mt-4">
                      <li>
                        <Link
                          href="#"
                          className="ac-text"
                          title="software System Assessments"
                        >
                          Software System Assessments
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="ac-text"
                          title="Legacy Application Upgrade"
                        >
                          Legacy Application Upgrade
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="ac-text"
                          title="Software Re-Architecting"
                        >
                          Software Re-Architecting
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="ac-text"
                          title="Cloud Migration"
                        >
                          Cloud Migration
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="ac-text"
                          title="Desktop To Web Application Migration"
                        >
                          Desktop To Web Application Migration
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="ac-text"
                          title="API Integrations"
                        >
                          API Integrations
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/reengineering-service-detail"
                          className="ac-text"
                          title="Software Re-Engineering"
                        >
                          Software Re-Engineering
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="information mt-4 mt-md-0 quick-links w-215">
                    <h3 className="footer-heading">Quick Links</h3>
                    <ul className="list-unstyled footer-link mt-4">
                      <li>
                        <Link href="/" className="ac-text" title="Home">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/aboutus"
                          className="ac-text"
                          title="About Us"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="services"
                          className="ac-text"
                          title="Our Service"
                        >
                          Our Service
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="ac-text" title="Our Work">
                          Our Work
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="ac-text" title="Blog">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contactus"
                          className="ac-text"
                          title="Contact Us"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="information mt-4 mt-md-0 our-address w-591">
                    <h3 className="footer-heading text-left">
                      Our Global Presence
                    </h3>
                    <div className="footer-address mt-4 d-flex align-items-center flex-wrap">
                      <div className="company-address">
                        <figure className="company-img">
                          <Image
                            src="/assets/images/US.svg"
                            alt="United States"
                            title="United States"
                            width={32}
                            height={32}
                          />
                          <figcaption className="ac-title text-white">
                            United States
                          </figcaption>
                        </figure>
                        <p className="fs-16 text-white">
                          2355 Prospect LN, Broomfield CO-80023
                        </p>
                      </div>
                      <div className="company-address">
                        <figure className="company-img">
                          <Image
                            src="/assets/images/UK.svg"
                            alt="United Kingdom"
                            title="United Kingdom"
                            width={32}
                            height={32}
                          />
                          <figcaption className="ac-title text-white">
                            United Kingdom
                          </figcaption>
                        </figure>
                        <p className="fs-16 text-white">
                          6 Hastings Avenue, Ilford, IG6 1DZ, UK
                        </p>
                      </div>
                      <div className="company-address">
                        <figure className="company-img">
                          <Image
                            src="/assets/images/CANADA.svg"
                            alt="Canada"
                            title="Canada"
                            width={32}
                            height={32}
                          />
                          <figcaption className="ac-title text-white">
                            Canada
                          </figcaption>
                        </figure>
                        <p className="fs-16 text-white">
                          1557 Clearbrook Dr, Oshawa, ON L1K 2P6
                        </p>
                      </div>
                      <div className="company-address">
                        <figure className="company-img">
                          <Image
                            src="/assets/images/INDIA.svg"
                            alt="India"
                            title="India"
                            width={32}
                            height={32}
                          />
                          <figcaption className="ac-title text-white">
                            India
                          </figcaption>
                        </figure>
                        <p className="fs-16 text-white">
                          303-309, City Center, Science City Road, Ahmedabad -
                          380060
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 text-center text-lg-start">
                    <div className="copyright-text">
                      <p className="fs-16 text-white">
                        © 2023 Rapid Pro. All Rights Reserved.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 text-center text-lg-end mt-3 mt-lg-0">
                    <div className="footer-menu">
                      <ul>
                        <li>
                          <Link href="#">Terms & Conditions</Link>
                        </li>
                        <li>
                          <Link href="#">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="#">Legal Disclaimer</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
