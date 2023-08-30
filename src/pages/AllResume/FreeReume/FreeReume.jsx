import { useEffect, useState } from 'react';

const FreeReume = () => {
    const [resumeCollections, setResumeCollections] = useState([]);
    const [templatesToShow, setTemplatesToShow] = useState(4);
    const [showAllTemplates, setShowAllTemplates] = useState(false);

    useEffect(() => {
        
        fetch('https://resume-builder-portal-server.vercel.app/resume') 
            .then(res => res.json())
            .then(data => {
                setResumeCollections(data);
            })
            .catch((error) => console.error(error));
    }, []);

    const freeResumes = resumeCollections.filter(resume => resume.profile !== 'premium');

    const visibleTemplates = showAllTemplates ? freeResumes : freeResumes.slice(0, templatesToShow);
    const remainingTemplates = freeResumes.length - templatesToShow;

    const handleSeeMoreClick = () => {
        setTemplatesToShow(prevTemplatesToShow => prevTemplatesToShow + 4);
        setShowAllTemplates(false);
    };

    return (
        <div>
            <div className="my-20">
                <h2 className="font-bold text-3xl md:text-5xl"><span className="text-[#42C3E4]">Free</span> Resume Templates</h2>
                <p className="text-xl">Free templates mean business. Candidates applying for senior positions in construction, sales, information technology, and pharmaceutical industries will find a great selection of premium and free resume templates in this collection.</p>

                <div className="grid gird-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
                    {visibleTemplates.map((resume, index) => (
                        <div key={index} className="p-5 resumeContents relative bg-slate-100">
                            <img className="w-full h-full" src={resume.template} alt={`Premium Resume ${index + 1}`} />
                            <button className='useButton'>Use this template</button>
                        </div>
                    ))}
                </div>
                {!showAllTemplates && remainingTemplates > 0 && (
                    <div className='text-center'>
                        <button
                            className='my-btn'
                            onClick={handleSeeMoreClick}
                        >
                            See More Templates
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FreeReume;
