import {
    AtSign,
    Calendar,
    GitHub,
    Linkedin,
    MapPin,
    Paperclip,
    Phone,
  } from "react-feather";

  
  
  
  export function useAllTemplates(info, sectionDiv, styles, columns, summarySection, achievementSection, workExpSection, projectSection, educationSection, otherSection, containerRef) {
    const templates = [
      // Template 1
      
  
      (
        <div key="template1" className=''>
          <div ref={containerRef} className={styles.container}>
            <div>
              <div className="text-center">
                <p className="font-semibold border-t-[20px] border-t-zinc-500 pt-5 text-4xl">{info.basicInfo?.detail?.name}</p>
                <span className="">{info.basicInfo?.detail?.title}</span>
                <div className="flex gap-3 justify-center">
                  {info.basicInfo?.detail?.email ? (
                    <a className="flex flex-col mb-2" type="email">
                      {info.basicInfo?.detail?.email},
                    </a>
                  ) : (
                    <span />
                  )}
                  {info.basicInfo?.detail?.phone ? (
                    <a className="flex flex-col mb-2">
                      {info.basicInfo?.detail?.phone}
                    </a>
                  ) : (
                    <span />
                  )}
                </div>
  
                {/* <div className="">
                    {info.basicInfo?.detail?.linkedin ? (
                      <a className="flex justify-center gap-1 mb-2">
                        <span className="font-bold">LinkedIn:</span>
                        {info.basicInfo?.detail?.linkedin}
                      </a>
                    ) : (
                      <span />
                    )}
                    {info.basicInfo?.detail?.github ? (
                      <a className="flex justify-center gap-1 mb-2">
                        <span className="font-bold">Github:</span>
                        {info.basicInfo?.detail?.github}
                      </a>
                    ) : (
                      <span />
                    )}
                  </div> */}
              </div>
  
              <div className=" my-5">
                <p className="border-b border-b-red-800 text-xl font-semibold mb-2">Summary</p>
                <div className="flex flex-col ps-3">
                  <p className="">{summarySection}</p>
                </div>
              </div>
  
              <div className=" my-10">
                <p className="border-b border-b-red-800 text-xl font-semibold mb-2">Highlights</p>
                <p>{achievementSection}</p>
              </div>
  
              <div className=" my-10">
                <p className="border-b border-b-red-800 text-xl font-semibold mb-2">Experience</p>
                <p>{workExpSection}</p>
              </div>
  
              <div className=" my-10">
                <p className="border-b border-b-red-800 text-xl font-semibold mb-2">Educational Background</p>
                <p>{educationSection}</p>
              </div>
            </div>
          </div>
        </div>
      ),
      // Template 2
      // (
      //   <div key="template2" className=''>
      //     <div ref={containerRef} className={styles.container}>
      //       <div>
      //         <section className="grid grid-cols-2 mb-10">
      //           <div>
      //             <h2 className="font-semibold text-5xl">{info.basicInfo?.detail?.name}</h2>
      //             <p className="mb-2">{info.basicInfo?.detail?.title}</p>
      //             <p>{summarySection}</p>
      //           </div>
      //           <div className="text-end">
      //             {info.basicInfo?.detail?.email ? (
      //               <a className="flex gap-1 justify-end mb-3" type="email">
      //                  {info.basicInfo?.detail?.email}<AtSign />
      //               </a>
      //             ) : (
      //               <span />
      //             )}
      //             {info.basicInfo?.detail?.phone ? (
      //               <a className="flex gap-1 justify-end mb-3">
      //                  {info.basicInfo?.detail?.phone} <Phone />
      //               </a>
      //             ) : (
      //               <span />
      //             )}
      //             {info.basicInfo?.detail?.linkedin ? (
      //               <a className="flex gap-1 justify-end mb-3">
      //                  {info.basicInfo?.detail?.linkedin} <Linkedin />
      //               </a>
      //             ) : (
      //               <span />
      //             )}
      //             {info.basicInfo?.detail?.github ? (
      //               <a className="flex gap-1 justify-end mb-3">
      //                  {info.basicInfo?.detail?.github}<GitHub />
      //               </a>
      //             ) : (
      //               <span />
      //             )}
      //           </div>
      //         </section>
      //         <section>
      //           <div>
      //             <div className={styles.col1}>
      //               {columns[1].map((item) => sectionDiv[item])}
      //             </div>
      //             <div className={styles.col2}>
      //               {columns[0].map((item) => sectionDiv[item])}
      //             </div>
      //           </div>
      //         </section>
      //       </div>
      //     </div>
  
      //   </div>
      // ),
  
  
      // Template 3
      (
        <div key="template3" className=''>
          <div ref={containerRef} className={styles.container}>
            <div className="flex gap-3">
              <div className="bg-sky-900 text-white w-[35%] h-[100%] ">
                <div className="ps-3">
                  <p className="font-semibold text-4xl">{info.basicInfo?.detail?.name}</p>
  
                  <p className="">{info.basicInfo?.detail?.title}</p>
                </div>
  
                <div className=" my-5">
                  <p className="bg-cyan-950 ps-3 text-xl font-semibold mb-2">Personal Info</p>
                  <div className="flex flex-col ps-3">
                    {info.basicInfo?.detail?.email ? (
                      <a className="flex flex-col mb-2" type="email">
                        <span className="font-bold">Email</span>
                        {info.basicInfo?.detail?.email}
                      </a>
                    ) : (
                      <span />
                    )}
                    {info.basicInfo?.detail?.phone ? (
                      <a className="flex flex-col mb-2">
                        <span className="font-bold">Phone</span>
                        {info.basicInfo?.detail?.phone}
                      </a>
                    ) : (
                      <span />
                    )}
                    {info.basicInfo?.detail?.linkedin ? (
                      <a className="flex flex-col mb-2">
                        <span className="font-bold">LinkedIn</span>
                        {info.basicInfo?.detail?.linkedin}
                      </a>
                    ) : (
                      <span />
                    )}
                    {info.basicInfo?.detail?.github ? (
                      <a className="flex flex-col mb-2">
                        <span className="font-bold">Github</span>
                        {info.basicInfo?.detail?.github}
                      </a>
                    ) : (
                      <span />
                    )}
                  </div>
                </div>
  
                <div className=" my-10">
                  <p className="bg-cyan-950 ps-3 text-xl font-semibold mb-2">Achievements</p>
                  {achievementSection}
                </div>
  
                <div className=" my-10">
                  <p className="bg-cyan-950 ps-3 text-xl font-semibold mb-2">Others</p>
                  {otherSection}
                </div>
              </div>
              <div>
                <div>
                  <p className="">{summarySection}</p>
                </div>
                <div>
                  <p className="">{workExpSection}</p>
                </div>
                <div>
                  <p className="">{projectSection}</p>
                </div>
                <div>
                  <p className="">{educationSection}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
  
      // Template 4
      (
        <div key="template1" className=''>
          <div ref={containerRef} className={styles.container}>
            <div>
              <div className="r">
                <p className="font-semibold text-sky-900 text-4xl">{info.basicInfo?.detail?.name}</p>
                <span className="text-sky-900 text-xl">{info.basicInfo?.detail?.title}</span>
                <div className="mt-2">
                  {info.basicInfo?.detail?.phone ? (
                    <a className="flex  gap-1 mb-2">
                      <span>Phone:</span>
                      {info.basicInfo?.detail?.phone}
                    </a>
                  ) : (
                    <span />
                  )}
  
                  {info.basicInfo?.detail?.email ? (
                    <a className="flex gap-1 mb-2" type="email">
                      <span>Email:</span>
                      {info.basicInfo?.detail?.email},
                    </a>
                  ) : (
                    <span />
                  )}
                </div>
              </div>
  
              <div className=" my-5">
                <p className=" text-justify">{summarySection}</p>
              </div>
  
  
              <div className="my-5">
                <p className="text-sky-900 text-xl font-semibold mb-2">Experience</p>
                <p>{workExpSection}</p>
              </div>
  
              <div className="my-5">
                <p className="text-sky-900 text-xl font-semibold mb-2">Education</p>
                <p>{educationSection}</p>
              </div>
              <div className="my-5">
                <p className="text-sky-900 text-xl font-semibold mb-2">Achievement</p>
                <p>{achievementSection}</p>
              </div>
              <div className="my-5">
                <p className="text-sky-900 text-xl font-semibold mb-2">Others</p>
                <p>{otherSection}</p>
              </div>
            </div>
          </div>
        </div>
      ),
  
      // Template 5
      (
        <div key="template5" className=''>
          <div ref={containerRef} className={styles.container}>
            <div>
              <div className="">
                <p className="font-semibold text-center text-4xl">{info.basicInfo?.detail?.name}</p>
                <p className="text-center text-xl mb-3">{info.basicInfo?.detail?.title}</p>
                <div className="grid grid-cols-2">
                  <div className="mt-2 ">
                    {info.basicInfo?.detail?.phone ? (
                      <a className=" mb-2">
                        <span>Phone:</span>
                        {info.basicInfo?.detail?.phone}
                      </a>
                    ) : (
                      <span />
                    )}
  
                    {info.basicInfo?.detail?.email ? (
                      <a className="flex gap-1 mb-2" type="email">
                        <span>Email:</span>
                        {info.basicInfo?.detail?.email},
                      </a>
                    ) : (
                      <span />
                    )}
                  </div>
  
                  <div className="">
                    {info.basicInfo?.detail?.linkedin ? (
                      <p className="text-end"> <a className="mb-2 ">
                        {info.basicInfo?.detail?.linkedin}
                      </a> :LinkedIn</p>
                    ) : (
                      <span />
                    )}
                    {info.basicInfo?.detail?.github ? (
                      <p className=" text-end"><a className="mb-2">
                        {info.basicInfo?.detail?.github}
                      </a> :Github</p>
                    ) : (
                      <span />
                    )}
                  </div>
                </div>
              </div>
  
              <div className=" my-5">
                <p className="font-extrabold text-lg border-y-2">Summary</p>
                <p className=" text-justify">{summarySection}</p>
              </div>
  
              <div className="my-5">
                <p className="font-extrabold text-lg border-y-2">Education</p>
                <p>{educationSection}</p>
              </div>
  
              <div className="my-5">
                <p className="font-extrabold text-lg border-y-2">Professional Experience</p>
                <p>{workExpSection}</p>
              </div>
  
  
            </div>
          </div>
        </div>
      ),
  
      // Template 6
      (
        <div key="template6" className=''>
          <div ref={containerRef} className={styles.container}>
            <div className="">
              <div className="ps-3 py-5 ">
                <p className="font-semibold text-4xl">{info.basicInfo?.detail?.name}</p>
                <p className="">{info.basicInfo?.detail?.title}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-stone-100 pt-5 px-3 w-2/5 ">
  
                <div className=" mb-5">
                  <p className="border-b-4 font-semibold">Contact</p>
                  <div className="flex flex-col">
                    {info.basicInfo?.detail?.email ? (
                      <a className="flex flex-col mb-2" type="email">
                        <span className="font-bold">Email</span>
                        {info.basicInfo?.detail?.email}
                      </a>
                    ) : (
                      <span />
                    )}
                    {info.basicInfo?.detail?.phone ? (
                      <a className="flex flex-col mb-2">
                        <span className="font-bold">Phone</span>
                        {info.basicInfo?.detail?.phone}
                      </a>
                    ) : (
                      <span />
                    )}
                    {info.basicInfo?.detail?.linkedin ? (
                      <a className="flex flex-col mb-2">
                        <span className="font-bold">LinkedIn</span>
                        {info.basicInfo?.detail?.linkedin}
                      </a>
                    ) : (
                      <span />
                    )}
                    {info.basicInfo?.detail?.github ? (
                      <a className="flex flex-col mb-2">
                        <span className="font-bold">Github</span>
                        {info.basicInfo?.detail?.github}
                      </a>
                    ) : (
                      <span />
                    )}
                  </div>
                </div>
                
                <div>
                  <p className="border-b-4 font-semibold">Education</p>
                  <p className="">{educationSection}</p>
                </div>
  
                <div className=" my-10">
                  <p className="border-b-4 font-semibold">Achievements</p>
                  {achievementSection}
                </div>
  
                <div className=" my-10">
                  <p className="border-b-4 font-semibold">Others</p>
                  {otherSection}
                </div>
              </div>
              <div className="w-3/5 pt-5">
                <div >
                  <p className="border-b-4 font-semibold">Professional Summary</p>
                  <p className="">{summarySection}</p>
                </div>
                <div>
                  <p className="border-b-4 font-semibold">Work Experience</p>
                  <p className="">{workExpSection}</p>
                </div>
                <div>
                  <p className="border-b-4 font-semibold">Best Project</p>
                  <p className="">{projectSection}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      //template 7
    //   (
    //     <div key="template7" className=''>
    //       <div ref={containerRef} className={styles.container}>
    //         <div className="flex gap-10">
        
    //           <div className="bg-gray-600 p-4 text-start h-auto w-[38%] text-white">
                
    //             <div className="flex justify-center my-4 ">
    //             <FaUserCircle  className="w-[53%] h-[10%]"/>
    //             </div>
    //             <p className="mb-2 text-start text-2xl uppercase text-yellow-50">{info.basicInfo?.detail?.name}</p>
    //           <p className="text-[13px] text-white font-thin mb-4 uppercase">{info.basicInfo?.detail?.title}</p>
    //           <p className="border-y-[1.5px] text-yellow-100 mb-3"></p>

    //           <p className="text-[15px] my-4 font-medium uppercase text-yellow-50">About Me</p>
    //           <p className="h-full w-full mb-4 text-white text-[5px] text-justify">{summarySection}</p>
    //           <p className="text-[15px] -mt-[780px] font-medium uppercase text-yellow-50">Skills</p>
    //           {achievementSection}
    //           <p className="text-[15px] my-4 font-medium uppercase text-yellow-50">contact</p>
    //           {info.basicInfo?.detail?.phone ? (
    //                   <a className="flex text-[14px] mb-2 gap-1">
    //                     <span className="">Phone  </span><span>:</span>
    //                      {info.basicInfo?.detail?.phone}
    //                   </a>
    //                 ) : (
    //                   <span />
    //                 )}
    //                {info.basicInfo?.detail?.email ? (
    //                   <a className="flex w-full h-full text-[14px] mb-2 gap-1" type="email">
    //                     <span className="">Email </span><span>:</span>
    //                     {info.basicInfo?.detail?.email}
    //                   </a>
    //                 ) : (
    //                   <span />
    //                 )} 
    //           </div>
    //           <div className="h-full w-[62%] mt-8">
                
    //             <p className="uppercase text-gray-600 bg-yellow-100 ps-2 pt-1 pb-1 w-full mb-2 font-semibold">WORK EXPERIENCE</p>
    //             <p className="bg-white">{workExpSection}</p>
    //             <p className="uppercase text-gray-600 bg-yellow-100 ps-2 pt-1 pb-1 w-full font-semibold my-2">Education</p>
    //             <p>{educationSection}</p>
    //             </div>
  
  
    //         </div>
    //       </div>
    //     </div>
    //   ),
  

  
    ];
  
    return templates.map((template, index) => (
      <div key={`template${index}`}>
        {template}
      </div>
    ));
  }
  