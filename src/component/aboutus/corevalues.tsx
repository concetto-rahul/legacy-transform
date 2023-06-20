import Image from "next/image";

export default function Corevalues() {
  return (
    <section id="corevalues" className="bglight secpadding">
      <div className="container">
        <h2 className="ac-heading ms-auto text-center text-black">
          Core Values&nbsp;<span className="text-blue">that drive us</span>
        </h2>
        <div className="row corevaluesboxwrapper">
          <div className="col-md-12 col-lg-6 mb-4">
            <div className="corevaluebox p-4">
              <figure>
                <Image
                  src="/assets/images/aboutus/corevalicon01.svg"
                  alt="Innovation at the core"
                  title="Innovation at the core"
                  width={87}
                  height={87}
                />
              </figure>
              <div className="corevalueboxcontent">
                <h3 className="underlinetitle underlinetitleleft">
                  Innovation at the core
                </h3>
                <p>
                  We embrace innovation as a core value, continuously exploring
                  new technologies and methodologies to modernize legacy
                  systems. We help businesses stay ahead of the curve.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 mb-4">
            <div className="corevaluebox p-4">
              <figure>
                <Image
                  src="/assets/images/aboutus/corevalicon02.svg"
                  alt="Client-Specific Approach"
                  title="Client-Specific Approach"
                  width={87}
                  height={87}
                />
              </figure>
              <div className="corevalueboxcontent">
                <h3 className="underlinetitle underlinetitleleft">
                  Client-Specific Approach
                </h3>
                <p>
                  Our clients are at the heart of everything we do. We listen
                  attentively to their core needs as no two businesses are alike
                  and deliver solutions exactly the way they want.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 mb-4">
            <div className="corevaluebox p-4">
              <figure>
                <Image
                  src="/assets/images/aboutus/corevalicon03.svg"
                  alt="Quality with Trust"
                  title="Quality with Trust"
                  width={87}
                  height={87}
                />
              </figure>
              <div className="corevalueboxcontent">
                <h3 className="underlinetitle underlinetitleleft">
                  Quality with Trust
                </h3>
                <p>
                  We prioritize reliability in every aspect of our work. Our
                  clients can trust us to deliver high-quality results
                  consistently, ensuring that their legacy systems are
                  modernized efficiently and effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 mb-4">
            <div className="corevaluebox p-4">
              <figure>
                <Image
                  src="/assets/images/aboutus/corevalicon04.svg"
                  alt="Transparency of Conduct"
                  title="Transparency of Conduct"
                  width={87}
                  height={87}
                />
              </figure>
              <div className="corevalueboxcontent">
                <h3 className="underlinetitle underlinetitleleft">
                  Transparency of Conduct
                </h3>
                <p>
                  We value transparency in our communication and operations. We
                  foster open dialogue to ensure that our clients have a
                  complete understanding of the modernization journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
