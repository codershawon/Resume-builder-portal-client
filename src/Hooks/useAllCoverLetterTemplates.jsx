import {
    AtSign,
    Calendar,
    GitHub,
    Linkedin,
    MapPin,
    Paperclip,
    Phone,
} from "react-feather";

export function useAllCoverLetterTemplates(info, sectionDiv, styles, columns, summarySection, achievementSection, workExpSection, projectSection, educationSection, otherSection,  containerRef) {
    const templates = [

        
        // Template 1
        
    (
      <div key="coverLetterTemplate" className="cover-letter-template p-6 bg-white border rounded-lg shadow-lg">
      <div className="header text-center mb-4">
        <h1 className="text-2xl font-bold">{info.basicInfo?.detail?.name}</h1>
        <p className="text-lg">{info.basicInfo?.detail?.title}</p>
        <div className="flex justify-center mt-2">
          {info.basicInfo?.detail?.email && (
            <a className="text-blue-500 mr-2" href={`mailto:${info.basicInfo?.detail?.email}`}>
              {info.basicInfo?.detail?.email}
            </a>
          )}
          {info.basicInfo?.detail?.phone && (
            <a className="text-blue-500" href={`tel:${info.basicInfo?.detail?.phone}`}>
              {info.basicInfo?.detail?.phone}
            </a>
          )}
        </div>
      </div>
    
      <div className="summary mb-6">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p className="">{summarySection}</p>
      </div>
    
      <div className="highlights mb-6">
        <h2 className="text-xl font-semibold mb-2">Highlights</h2>
        <p className="">{achievementSection}</p>
      </div>
    
      <div className="experience mb-6">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        <p className="">{workExpSection}</p>
      </div>
    
      <div className="education">
        <h2 className="text-xl font-semibold mb-2">Educational Background</h2>
        <p className="">{educationSection}</p>
      </div>
    </div>
    
      
    ),
    
    
 
    
      ];
  
    return templates.map((template, index) => (
      <div key={`template${index}`}>
        {template}
      </div>
    ));
  }
  