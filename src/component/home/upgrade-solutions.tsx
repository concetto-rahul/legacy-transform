import Image from "next/image";

export default function UpgradeSolutions() {
  return (
    <section className="upgrade-solutions">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="ac-heading text-black text-center">
              Technologies&nbsp;
              <span className="text-blue">We Migration & Software</span>
            </h2>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="software-logo text-center h-100">
              <figure>
                <Image
                  src="/assets/images/coldfusion.png"
                  alt="coldfusion"
                  title="coldfusion"
                  width={64}
                  height={62}
                />
              </figure>
              <h3 className="ac-title">Coldfusion</h3>
              <p className="fs-16">
                If you want to modernize your systems running on the ColdFusion
                logo, avail of our legacy modernization services. Capitalize on
                your current web and mobile applications by updating them with
                us.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 mt-xl-5">
            <div className="software-logo text-center h-100">
              <figure>
                <Image
                  src="/assets/images/cobol.png"
                  alt="cobol"
                  title="cobol"
                  width={183}
                  height={29}
                />
              </figure>
              <h3 className="ac-title">COBOL</h3>
              <p className="fs-16">
                Want to continue with your applications developed in the COBOL
                language? We make them compatible with current demands by
                upgrading them with Visual COBOL 7.0 (Visual Studio Code).
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="software-logo text-center h-100">
              <figure>
                <Image
                  src="/assets/images/microsoft-windows-7.png"
                  alt="microsoft-windows-7"
                  title="microsoft-windows-7"
                  width={124}
                  height={76}
                />
              </figure>
              <h3 className="ac-title">Microsoft Windows 7</h3>
              <p className="fs-16">
                Now we have better Windows versions, so it&lsquo;s time to
                upgrade. The mobile app developers at Legacy Transform hold
                extensive experience migrating and upgrading legacy Microsoft
                Windows 7 apps.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="software-logo text-center h-100">
              <figure>
                <Image
                  src="/assets/images/delphi.png"
                  alt="delphi"
                  title="delphi"
                  width={140}
                  height={52}
                />
              </figure>
              <h3 className="ac-title">Delphi</h3>
              <p className="fs-16">
                Planning to migrate from Delphi to a modern programming
                language? We analyze and assess your application and migrate it
                to new technology in the least time possible.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 mt-xl-5">
            <div className="software-logo text-center h-100">
              <figure>
                <Image
                  src="/assets/images/ibm.png"
                  alt="DB2"
                  title="DB2"
                  width={80}
                  height={80}
                />
              </figure>
              <h3 className="ac-title">DB2</h3>
              <p className="fs-16">
                We help you update your applications using DB2 to manage your
                on-site and cloud data. You can store and manage your
                application&apos;s data with a modern approach.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="software-logo text-center h-100">
              <figure>
                <Image
                  src="/assets/images/dbase.png"
                  alt="Perl"
                  title="Perl"
                  width={151}
                  height={32}
                />
              </figure>
              <h3 className="ac-title">Perl</h3>
              <p className="fs-16">
                Depending on your needs, we help you either maintain or
                modernize your Perl applications for data and infrastructure.
                Partner with us to upgrade or migrate to a new system entirely.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
