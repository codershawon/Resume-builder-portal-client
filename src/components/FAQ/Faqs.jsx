import { Link } from "react-router-dom";
import "./Faqs.css";
import Faquesction from "../Faquesction/Faquesction";

import SectionTitle from "../../Hooks/SectionTitle";
import FixedWidth from "../fixedwidth";

const Faqs = () => {
  return (
    <div>
      <div className="breadcrumb-wrap">
        <nav className="breadcrumbs">
          <ul>
            <li>
              <Link className="text-[#efc778] hover:underline " to="/">
                Home
              </Link>
            </li>
            <li>
              <span>Check Our FAQ</span>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <div className="mt-6">
          <SectionTitle
            subHeading={"Check our FAQ "}
            heading={" Get answers to commonly asked questions"}
          ></SectionTitle>
        </div>
      </div>

      <FixedWidth>
        <Faquesction></Faquesction>
      </FixedWidth>
    </div>
  );
};

export default Faqs;
