import React from 'react';
import resumeIcon from '../../../../assets/shouldIuse.png'
import { useTranslation } from 'react-i18next';

const AboutResumeBuilder = () => {
    const { t } = useTranslation(["resumeTemplate"]);
    return (
        <div className='my-20'>
            <div className='flex gap-10 shadow-md p-10 border-2 border-[rgba(66,195,228,.2)]'>
                <div>
                    <img className='w-60'
                     src={resumeIcon} />
                </div>
                <div>
                    <h1 className='text-3xl font-semibold '>{t('aboutResumeBuilder.title')}</h1>
                    <p>{t('aboutResumeBuilder.description')}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutResumeBuilder;