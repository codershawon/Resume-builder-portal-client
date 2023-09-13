import './PremiumTemplates.css'

import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

const PremiumTemplates = () => {
    const { t } = useTranslation(["resumeTemplate"]);

    const [resumeCollections, setResumeCollections]= useState([])
    
    useEffect(() => {
        // fetch('http://localhost:5000resume')
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
            <h2 className="font-bold text-3xl md:text-5xl"> <span className="text-[#42C3E4]">{t('premiumTemplates.title1')}</span> {t('premiumTemplates.title2')}</h2>
            <p className="text-xl">{t('premiumTemplates.description')}</p>

            <div className="grid gird-cols sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {premiumResumes.map((resume, index) => (
                <div key={index} className="p-5 resumeContents relative bg-slate-100">
                    <img  className="w-full" src={resume.template} alt={`Premium Resume ${index + 1}`} />
                    <button className='useButton'>{t('premiumTemplates.useTemplate')}</button>
                </div>
                    ))}
            </div>
        </div>
    );
};

export default PremiumTemplates;