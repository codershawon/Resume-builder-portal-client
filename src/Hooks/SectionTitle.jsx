import React from "react";

const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="text-center max-w-[600px] mx-auto mb-14">
      <p className="text-[#197685] block uppercase mb-2 text-lg font-semibold font-mono">
        --- {subHeading} ---
      </p>
      <h3 className="lg:max-w-[560px] font-bold text-[40px] leading-10 text-gray-700 font-sans">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
