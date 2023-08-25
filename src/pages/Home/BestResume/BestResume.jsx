import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './BestResume.css';
import { Autoplay, } from 'swiper/modules';
import SectionTitle from '../../../Hooks/SectionTitle';
import { Link } from 'react-router-dom';

const BestResume = () => {

    const [activeButton, setActiveButton] = useState('all');
    const [resumeCollections, setResumeCollections]= useState([])
    const [allResume, setResume] = useState(resumeCollections);

    useEffect(() => {
        fetch('https://resume-builder-portal-server.vercel.app/resume')
            .then(res => res.json())
            .then(data => {
                setResumeCollections(data);
                setResume(data)
            })
            .catch((error) => console.error(error));
    }, [])

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
                    speed={5000}
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
                                <Link to="/resumeBuilder"><button className='useButton'>Use this template</button></Link>
                               
                            </div>
                        </SwiperSlide>))
                    }
                </Swiper>
            </>
        </div>
    );
};

export default BestResume;