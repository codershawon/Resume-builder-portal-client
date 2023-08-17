import React from 'react';
import resumeIcon from '../../../../assets/shouldIuse.png'

const AboutResumeBuilder = () => {
    return (
        <div className='my-20'>
            <div className='flex gap-10 shadow-md p-10 border-2 border-[rgba(66,195,228,.2)]'>
                <div>
                    <img className='w-60'
                     src={resumeIcon} />
                </div>
                <div>
                    <h1 className='text-3xl font-semibold '>Resume Builder</h1>
                    <p>Say goodbye to glitchy column formats, restrictive text space for your work history and accomplishments, or complicated downloads. We help you cross the resume finish line with a premium tool covering all the above. Our Resume Builder offers dozens of customizable resume templates to help you personalize your applications; it suggests recruiter-approved content for thousands of different job positions to help you through every chapter of your career and auto-formats all of your resume content for you.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutResumeBuilder;