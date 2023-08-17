import './AllResume.css'
import FooterSection from './FooterSection/FooterSection';
import FreeReume from './FreeReume/FreeReume';
import PremiumTemplates from './PremiumTemplates/PremiumTemplates';

const AllResume = () => {
    return (
        <div className="rgContainer">
            <div className="flex items-center flex-col-reverse md:flex-row  ">
                <div className=''>
                    <h2 className='font-semibold text-3xl md:text-5xl lg:text-7xl '><span className='text-[#42C3E4]'>100+</span> Free  Resume</h2>
                    <h2 className='font-semibold text-3xl md:text-5xl lg:text-7xl '>Templates for Download in 2023</h2>
                    <p className='text-md md:text-xl'>Browse dozens of popular, proven, and free resume templates. Add pre-written professional skills, customize your design, and download in the format you need..</p>
                </div>
                <div className="w-full relative flex justify-center bg-svg-background py-40">
                    <div className="w-[300px] relative">
                        <img className="w-full z-500  bg-white border rotate-6  p-3" src="https://i.ibb.co/8zLt24p/1131w-NXs7x-Sf0-K8-I.webp" alt="resumeBanner" />
                        <img className=" absolute  top-[50%] translate-y-[-50%] shadow-xl bg-white border p-3" src="https://i.ibb.co/8zLt24p/1131w-NXs7x-Sf0-K8-I.webp" alt="resumeBanner" />
                    </div>
                </div>
            </div>
            <PremiumTemplates/>
            <FreeReume/>
            <FooterSection/>
        </div>
    );
};

export default AllResume;