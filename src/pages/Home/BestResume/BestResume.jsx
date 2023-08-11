import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './BestResume.css';
<<<<<<< HEAD
import { Autoplay,} from 'swiper/modules';
import FixedWidth from '../../../components/fixedwidth';
=======
import { Autoplay, } from 'swiper/modules';
import SectionTitle from '../../../Hooks/SectionTitle';
>>>>>>> ea7b99da9d951ddcebd99ab7733dbfa03b8c189d

const BestResume = () => {


    const resumeCollections = [
        {
            profile: "photo",
            template: "https://i.ibb.co/vdTtZPK/91b7d95e4ed14609e2cc51d731f1cfc4f583becb.webp"
        },
        {
            profile: "photo",
            template: "https://i.ibb.co/8zLt24p/1131w-NXs7x-Sf0-K8-I.webp"
        },
        {
            profile: "photo",
            template: "https://i.ibb.co/C7pmhNf/best-cv-resume-templates-design-3636812b19c6d153d0f493057323ea84-screen.jpg"
        },
        {
            profile: "photo",
            template: "https://i.ibb.co/CbjZ8w2/hceqkwas15xsjepvbdtn.jpg"
        },
        {
            profile: "photo",
            template: "https://i.ibb.co/YR8SKf3/professional-resume-template.jpg"
        },
        {
            profile: "photo",
            template: "https://i.ibb.co/jTxkybx/Resume-CV-Format-Download-3-1-min.jpg"
        },
        {
            profile: "photo",
            template: "https://i.ibb.co/fvvJQ6P/student-resume-example.jpg"
        },
        {
            profile: "photo",
            template: "https://i.ibb.co/8zLt24p/1131w-NXs7x-Sf0-K8-I.webp"
        },
        {
            profile: "noPhoto",
            template: "https://i.ibb.co/qyr7Qvz/943b5ed20329705e124ef37f3ebb57bd.jpg"
        },
        {
            profile: "noPhoto",
            template: "https://i.ibb.co/QbjWDFG/noimg.png"
        },
        {
            profile: "noPhoto",
            template: "https://i.ibb.co/vV5VBWJ/ivy-league-cover-letter-template-1-439b5cab58.png"
        },
        {
            profile: "noPhoto",
            template: "https://i.ibb.co/pnbYQHm/de9a0816b40a701f4d625bef109edc76.jpg"
        },
        {
            profile: "noPhoto",
            template: "https://i.ibb.co/M7qjQL9/college-resume-template.png"
        },
        {
            profile: "noPhoto",
            template: "https://i.ibb.co/rcwPSJj/cascade-3-duo-blue-navy-21-3x.png"
        },
        {
            profile: "noPhoto",
            template: "https://i.ibb.co/Q67Dx1c/best-online-resume-builders-zety-us-12.jpg"
        },
        {
            profile: "noPhoto",
            template: "https://i.ibb.co/hMpnYm6/1520211773915.jpg"
        },
    ]

    const [activeButton, setActiveButton] = useState('all');
    const [allResume, setResume] = useState(resumeCollections);

    const filterItem = (profile) => {
        const filteredResume = resumeCollections.filter((resume) => {
            return resume.profile === profile;
        })
        setResume(filteredResume);
    }


    return (
        <div className='rgContainer'>

            <SectionTitle
                subHeading={"Our Host template"}
                heading={
                    "Our best resume templates available"
                }></SectionTitle>
            {/* <div className='text-center font-bold text-3xl sm:text-5xl mt-10'>
                <h2>Our best resume</h2>
                <h2>templates available</h2>
            </div> */}

            <div className='text-center my-8'>
                <button onClick={() => { setResume(resumeCollections); setActiveButton('all') }}
                    className={`shadow-md px-3 py-2 hover:bg-[#42C3E4] hover:text-white rounded-2xl font-semibold ${activeButton === 'all' ? 'active-button' : ''}`}>
                    All
                </button>
                <button
                    onClick={() => { filterItem('photo'); setActiveButton('photo') }}
                    className={`shadow-md px-3 py-2 hover:bg-[#42C3E4] hover:text-white rounded-2xl font-semibold mx-3 ${activeButton === 'photo' ? 'active-button' : ''}`}>
                    With Photo
                </button>
                <button
                    onClick={() => { filterItem('noPhoto'); setActiveButton('noPhoto') }}
                    className={`shadow-md px-3 py-2 hover:bg-[#42C3E4] hover:text-white rounded-2xl font-semibold mx-3 ${activeButton === 'noPhoto' ? 'active-button' : ''}`}>
                    No Photo
                </button>
            </div>

            <>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    speed={2500}
                    loop={true}
                    breakpoints={{
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        575: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                    }}
                    className="mySwiper">
                    {
                        allResume.map((resume, i) =>
                        (<SwiperSlide className='' key={i}>
                            <div className='slider-content'>
                                <img className='' src={resume?.template} alt="resume" />
                                <button className='useButton'>Use this template</button>
                            </div>
                        </SwiperSlide>))
                    }
                </Swiper>
            </>
        </div>
       </FixedWidth>
    );
};

export default BestResume;