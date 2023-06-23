import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function ReengineeringCostPart() {
  return (
    <section className="cost-part">
      <div className="container">
        <h2 className="ac-heading ms-auto text-center text-black">
          Legacy Software Reengineering:&nbsp;
          <span className="text-blue">Cost</span>
        </h2>
        <div className="row">
          <div className="col-md-12">
            <div className="costs-right">
              <p className="fs-16 text-left">
                The software reengineering cost varies based on the application
                size, complexity, and upgrades. Reengineering costs less than
                building an application from scratch and involves fewer
                potential risks. However, many factors contribute to the cost of
                software reengineering. Here are the key factors:
              </p>
              <ul className="mt-5">
                <li>The amount of work to be done</li>
                <li>Reengineering team size.</li>
                <li>
                  The gap between the initial software and the desired quality
                </li>
                <li>The amount of data to be converted</li>
                <li>Technologies and tools needed for modernization</li>
                <li>Product maintenance expenses</li>
              </ul>
              <p className="fs-16 text-left mt-4">
                We also consider unpredictable situations that may incur higher
                costs and resources. For instance, when significant performance
                errors occur, expenses may be too high.
              </p>
              <Link
                className="icon-button d-flex ac-btn-common mt-4"
                href="/contactus"
                title="Still Confused? LET'S TALK"
              >
                Still Confused? LET&apos;S TALK
                <BsArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
