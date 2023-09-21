import { useTranslation } from 'react-i18next';
import './AllResume.css'
import FooterSection from './FooterSection/FooterSection';
import FreeReume from './FreeReume/FreeReume';
import PremiumTemplates from './PremiumTemplates/PremiumTemplates';
import Faqs from '../../components/FAQ/Faqs';
import Faquesction from '../../components/Faquesction/Faquesction';
import CountUp from 'react-countup'
import Contact from '../ContactUs/Contact';

const AllResume = () => {
    const { t } = useTranslation(["resumeTemplate"]);
    return (
        <div className="rgContainer">
            <div className="flex items-center flex-col-reverse md:flex-row  ">
                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" className=''>
                    <h2 className='font-semibold text-3xl md:text-5xl lg:text-7xl '><span className='text-[#42C3E4]'><CountUp start={0} end={100} duration={10} delay={0}></CountUp> +</span> {t('header.title1')}</h2>
                    <h2 className='font-semibold text-3xl md:text-5xl lg:text-7xl '>{t('header.title2')}</h2>
                    <p className='text-md md:text-xl'>{t('header.description')}</p>
                </div>
                <div data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500" className="w-full relative flex justify-center bg-svg-background py-40">
                    <div className="w-[300px] relative">
                        <img className="w-full z-500  bg-white border rotate-6  p-3" src="https://i.ibb.co/8zLt24p/1131w-NXs7x-Sf0-K8-I.webp" alt="resumeBanner" />
                        <img className=" absolute  top-[50%] translate-y-[-50%] shadow-xl bg-white border p-3" src="https://i.ibb.co/8zLt24p/1131w-NXs7x-Sf0-K8-I.webp" alt="resumeBanner" />
                    </div>
                </div>
            </div>
            <PremiumTemplates />
            <FreeReume />
            <FooterSection />
            <div className='mt-40'>
                <h2 className="font-bold text-3xl md:text-5xl"> <span className="text-[#42C3E4]">Frequently</span>  Asked Questions</h2>
                <p data-aos="fade-left" data-aos-duration="1000" className="text-xl"></p>
                <Faquesction />
            </div>
            <Contact />
        </div>
    );
};

export default AllResume;