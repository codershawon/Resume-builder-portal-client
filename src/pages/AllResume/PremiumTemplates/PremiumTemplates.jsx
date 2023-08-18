import { useEffect } from "react";
import { useState } from "react";
import './PremiumTemplates.css'


const PremiumTemplates = () => {


    const [resumeCollections, setResumeCollections]= useState([])
    
    useEffect(() => {
        // fetch('http://localhost:5000/resume')
        fetch('https://resume-builder-portal-server.vercel.app/resume')
            .then(res => res.json())
            .then(data => {
                setResumeCollections(data);
            })
            .catch((error) => console.error(error));
    }, [])
    console.log('resume', resumeCollections);

    const premiumResumes = resumeCollections.filter(resume => resume.profile === 'premium');
    
    
    return (
        <div className="my-20">
            <h2 className="font-bold text-3xl md:text-5xl"> <span className="text-[#42C3E4]">Professional</span> Resume Templates</h2>
            <p className="text-xl">Professional templates mean business. Candidates applying for senior positions in construction, sales, information technology, and pharmaceutical industries will find a great selection of premium and free resume templates in this collection.</p>

            <div className="grid gird-cols sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {premiumResumes.map((resume, index) => (
                <div key={index} className="p-5 resumeContents relative bg-slate-100">
                    <img  className="w-full" src={resume.template} alt={`Premium Resume ${index + 1}`} />
                    <button className='useButton'>Use this template</button>
                </div>
                    ))}
            </div>
        </div>
    );
};

export default PremiumTemplates;