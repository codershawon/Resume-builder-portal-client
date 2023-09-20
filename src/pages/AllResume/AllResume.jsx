import { useTranslation } from "react-i18next";
import "./AllResume.css";
import FooterSection from "./FooterSection/FooterSection";
import FreeReume from "./FreeReume/FreeReume";
import PremiumTemplates from "./PremiumTemplates/PremiumTemplates";
import LazyLoad from "react-lazyload";

const AllResume = () => {
  const { t } = useTranslation(["resumeTemplate"]);
  return (
    <div className="rgContainer">
      <div className="flex items-center flex-col-reverse md:flex-row  ">
        <div className="">
          <h2 className="font-semibold text-3xl md:text-5xl lg:text-7xl ">
            <span className="text-[#42C3E4]">100+</span> {t("header.title1")}
          </h2>
          <h2 className="font-semibold text-3xl md:text-5xl lg:text-7xl ">
            {t("header.title2")}
          </h2>
          <p className="text-md md:text-xl">{t("header.description")}</p>
        </div>
        <div className="w-full relative flex justify-center bg-svg-background py-40">
        <LazyLoad height={300} offset={100}><div className="w-[300px] relative">
            <img
              className="w-full z-500  bg-white border rotate-6  p-3"
              src="https://i.ibb.co/8zLt24p/1131w-NXs7x-Sf0-K8-I.webp"
              alt="resumeBanner"
            />
            <img
              className=" absolute  top-[50%] translate-y-[-50%] shadow-xl bg-white border p-3"
              src="https://i.ibb.co/8zLt24p/1131w-NXs7x-Sf0-K8-I.webp"
              alt="resumeBanner"
            />
          </div></LazyLoad>
          {/* <div className="w-[300px] relative">
            <img
              className="w-full z-500  bg-white border rotate-6  p-3"
              src="https://i.ibb.co/8zLt24p/1131w-NXs7x-Sf0-K8-I.webp"
              alt="resumeBanner"
            />
            <img
              className=" absolute  top-[50%] translate-y-[-50%] shadow-xl bg-white border p-3"
              src="https://i.ibb.co/8zLt24p/1131w-NXs7x-Sf0-K8-I.webp"
              alt="resumeBanner"
            />
          </div> */}
        </div>
      </div>
      <PremiumTemplates />
      <FreeReume />
      <FooterSection />
    </div>
  );
};

export default AllResume;
