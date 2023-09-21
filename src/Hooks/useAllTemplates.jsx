import {
    AtSign,
    Calendar,
    GitHub,
    Linkedin,
    MapPin,
    Paperclip,
    Phone,
  } from "react-feather";
  import { TiLocationArrow } from "react-icons/ti";
  // import { FaUserCircle } from "react-icons/fa";
  
  
  
  export function useAllTemplates(info, sectionDiv, styles, columns, summarySection, achievementSection, workExpSection, projectSection, educationSection, otherSection, containerRef, name, TiLocationArrow, AiOutlineMail, IoCallSharp, AiFillLinkedin, AiFillGithub, FaUserCircle) {
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
  
              {
                info.workExp && (
                  <div className=" my-10">
                    <p className="border-b border-b-red-800 text-xl font-semibold mb-2">Experience</p>
                    <p>{workExpSection}</p>
                  </div>
                )
              }
  
  
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
        <div key="template4" className=''>
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
  
      // Template 7
      (
        <div key="template7">
          <div ref={containerRef} className={styles.container}>
            <div className={`flex gap-5 mt-14 bg-[#c6a68dbb] relative ${styles.topStyle}`}>
              <div className="w-[40%] bg-[#6C999A] z-20 ms-12">
                <div className=" rounded-full border-4 border-white mx-auto  h-48 w-48 bg-cover bg-center" style={{
                  backgroundImage: `url(${info.basicInfo?.detail?.photo || 'https://i.ibb.co/KGnMKN0/user.png'})`,
                }}>
                </div>
              </div>

              <div className="flex items-center ">
                <div>
                  <p className="font-semibold text-4xl">{info.basicInfo?.detail?.name}</p>
                  <p className="">{info.basicInfo?.detail?.title}</p>
                </div>
              </div>
            </div>

            <div className=" flex gap-3">
              <div className="bg-[#6C999A] text-white w-[40%] min-h-[100%] ms-12 px-5 ">
                <div className=" mt-16">
                  <h5 className="uppercase font-semibold">Profile</h5>
                  <p>{summarySection}</p>
                </div>

                <div className=" mt-20">
                  <p className=" text-xl font-semibold mb-2">Contact Me</p>
                  <div className="flex flex-col ps-3">
                    {info.basicInfo?.detail?.email ? (
                      <a className="flex gap-x-1 items-center mb-2" type="email">
                        <AiOutlineMail />
                        {info.basicInfo?.detail?.email}
                      </a>
                    ) : (
                      <span />
                    )}
                    {info.basicInfo?.detail?.phone ? (
                      <a className="flex gap-x-1 items-center mb-2">
                        <IoCallSharp />
                        {info.basicInfo?.detail?.phone}
                      </a>
                    ) : (
                      <span />
                    )}
                    {info.basicInfo?.detail?.linkedin ? (
                      <a className="flex gap-x-1 items-center mb-2">
                        <AiFillLinkedin />
                        {info.basicInfo?.detail?.linkedin}
                      </a>
                    ) : (
                      <span />
                    )}
                    {info.basicInfo?.detail?.github ? (
                      <a className="flex gap-x-1 items-center mb-2">
                        <AiFillGithub />
                        {info.basicInfo?.detail?.github}
                      </a>
                    ) : (
                      <span />
                    )}
                  </div>
                </div>
              </div>
              <div className="w-[50%] mt-16 ms-auto">

                <div className="min-h-[120px] w-full mb-4 text-justify">
                  <h5 className="uppercase font-bold flex items-center gap-3">Education</h5>
                  <p className="">{educationSection}</p>
                </div>

                <div className="min-h-[120px] w-full mb-4 text-justify">
                  <h5 className="uppercase font-bold flex items-center gap-3">Skills</h5>
                  <p className="">{skillSection}</p>
                </div>

                <div className="min-h-[120px] w-full mb-4 text-justify">
                  <h5 className="uppercase font-bold flex items-center gap-3">Project</h5>
                  <p className="">{projectSection}</p>
                </div>

                <div className=" min-h-[120px] w-full mb-4 text-justify">
                  <h5 className="uppercase font-bold flex items-center gap-3">Achievement</h5>
                  {achievementSection}
                </div>

                <div className="min-h-[120px] w-full mb-4 text-justify">
                  <h5 className="uppercase font-bold flex items-center gap-3">Others</h5>
                  {otherSection}
                </div>
              </div>
            </div>
          </div>
        </div>
     
    ),

    // Template 8
    (
      <div key="template8" className=''>
        <div ref={containerRef} className={styles.container}>
          <div className="flex gap-10">

            <div
              className=" p-4 text-start  w-[38%] "
            >
              <div className="flex justify-center mt-4 mb-7">
                <div className=" rounded-full border-4 border-white mx-auto  h-48 w-48 bg-cover bg-center" style={{
                  backgroundImage: `url(${info.basicInfo?.detail?.photo || 'https://i.ibb.co/KGnMKN0/user.png'})`,
                }}>
                </div>
              </div>

              <div className=" min-h-[120px] w-full mb-4 text-justify">
                <p className="uppercase font-bold flex items-center gap-3">contact</p>
                {info.basicInfo?.detail?.address ? (
                  <a className="flex text-[14px] mb-2 gap-1">
                    <span className="">Address  </span><span>:</span>
                    {info.basicInfo?.detail?.address}
                  </a>
                ) : (
                  <span />
                )}
                {info.basicInfo?.detail?.phone ? (
                  <a className="flex text-[14px] mb-2 gap-1">
                    <span className="">Phone  </span><span>:</span>
                    {info.basicInfo?.detail?.phone}
                  </a>
                ) : (
                  <span />
                )}
                {info.basicInfo?.detail?.email ? (
                  <a className="flex w-full  text-[14px] mb-2 gap-1" type="email">
                    <span className="">Email </span><span>:</span>
                    {info.basicInfo?.detail?.email}
                  </a>
                ) : (
                  <span />
                )}
              </div>


              <div className=" min-h-[120px] w-full mb-4 text-justify">
                <h5 className="uppercase font-bold flex items-center gap-3">Career Objective</h5>
                <p className="">{summarySection}</p>
              </div>

              <div className=" min-h-[120px] w-full mb-4 text-justify">
                <h5 className="uppercase font-bold flex items-center gap-3">Skills</h5>
                <p className="">{skillSection}</p>
              </div>
            </div>

            <div className=" w-[62%] pt-8 ps-7 bg-sky-100 text-black mt-8">
              <p className="mb-2 text-start font-medium text-[35px] uppercase ">{info.basicInfo?.detail?.name}</p>
              <p className="text-[20px] font-medium mb-4 uppercase">{info.basicInfo?.detail?.title}</p>
              <div className=" min-h-[120px] w-full mb-4 text-justify">
                <h5 className="uppercase font-bold flex items-center gap-3">Education</h5>
                <p className="">{educationSection}</p>
              </div>

              <div className=" min-h-[120px] w-full mb-4 text-justify">
                <h5 className="uppercase font-bold flex items-center gap-3">PROFESSIONAL EXPERIENCE</h5>
                <p className="">{workExpSection}</p>
              </div>

            </div>


          </div>
        </div>
      </div>
    ),
    // Template 9
    (
      <div key="template9" className=''>
        <div ref={containerRef} className={styles.container}>
          <div className="flex gap-3">

            <div
              className=" p-4 text-start  w-[38%] "
            >
              <div className="flex justify-center  mt-4 mb-7">
                <div className=" rounded-full border-4 border-white mx-auto  h-48 w-48 bg-cover bg-center" style={{
                  backgroundImage: `url(${info.basicInfo?.detail?.photo || 'https://i.ibb.co/KGnMKN0/user.png'})`,
                }}>
                </div>
              </div>
              <p className="border-t-4 mb-3"></p>
              <div className=" min-h-[120px] w-full mb-4 text-justify">
                <h5 className="uppercase font-bold flex items-center gap-3">Education</h5>
                <p className="">{educationSection}</p>
              </div>

              {/* <p className=" text-[27px] uppercase font-medium mt-4 mb-3">Career Objective</p> */}
              <p className="border-t-4 mb-3"></p>
              <div className=" min-h-[120px] w-full mb-4 text-justify">
                <h5 className="uppercase font-bold flex items-center gap-3">Skills</h5>
                <p className="">{skillSection}</p>
              </div>
              <p className="border-t-4 mb-3"></p>
              <div className=" min-h-[120px] w-full mb-4 text-justify">
                <h5 className="uppercase font-bold flex items-center gap-3">Language</h5>
                <p className="">{languageSection}</p>
              </div>
            </div>
            <div className="border-l-2 "></div>

            <div className=" w-[62%] pt-8 ps-7  text-black mt-8">
              <p className="mb-2 text-start font-medium text-[35px] uppercase ">{info.basicInfo?.detail?.name}</p>

              <p className="text-[20px] text-gray-500 font-medium mb-4 uppercase">{info.basicInfo?.detail?.title}</p>
              <p className="border-t-4 mb-3"></p>
              <div className="flex gap-3 my-3 text-gray-500 items-center">
                {info.basicInfo?.detail?.address ? (
                  <a className="flex  text-[14px] mb-2 gap-1">
                    <span className="">Address  </span><span>:</span>
                    {info.basicInfo?.detail?.address}
                  </a>
                ) : (
                  <span />
                )}
                {info.basicInfo?.detail?.phone ? (
                  <a className="flex  text-[14px] mb-2 gap-1">
                    <span className="">Phone  </span><span>:</span>
                    {info.basicInfo?.detail?.phone}
                  </a>
                ) : (
                  <span />
                )}
                {info.basicInfo?.detail?.email ? (
                  <a className="flex   text-[14px] mb-2 gap-1" type="email">
                    <span className="">Email </span><span>:</span>
                    {info.basicInfo?.detail?.email}
                  </a>
                ) : (
                  <span />
                )}
              </div>
              <p className="border-t-4 mb-3"></p>
              <div className=" min-h-[120px] w-full mb-4 text-justify">
                <h5 className="uppercase font-bold flex items-center gap-3">Summary</h5>
                <p className="text-gray-600">{summarySection}</p>
              </div>


              <div className=" min-h-[120px] w-full mb-4 text-justify">
                <h5 className="uppercase font-bold flex items-center gap-3">Work EXPERIENCE</h5>
                <p>{workExpSection}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    // Template 10
    (
      <div key="template10" className=''>
        <div ref={containerRef} className={styles.container}>
          <div className=" p-4 text-start ">
            <p className="border-t-[7px] border-[#BDB76B] mb-2"></p>
            <p className="mb-1 text-[#BDB76B] text-start font-medium text-[35px] uppercase ">{info.basicInfo?.detail?.name}</p>
            <p className="text-[20px] text-[#BDB76B] font-normal mb-1 uppercase">{info.basicInfo?.detail?.title}</p>
            <p className="text-gray-600">address :</p>
            <div className="flex  w-full gap-1 mb-3 text-gray-600 ">
              {info.basicInfo?.detail?.address ? (
                <a className="flex w-[30%] mb-2 gap-1">
                  <span className="">Address </span><span>:</span>
                  {info.basicInfo?.detail?.address}
                </a>
              ) : (
                <span />
              )}
              {info.basicInfo?.detail?.phone ? (
                <a className="flex w-[30%] mb-2 gap-1">
                  <span className="">Phone  </span><span>:</span>
                  {info.basicInfo?.detail?.phone}
                </a>
              ) : (
                <span />
              )}
              {info.basicInfo?.detail?.email ? (
                <a className="flex  text-blue-400 mb-2 gap-1" type="email">
                  <span className=""> </span><span></span>
                  {info.basicInfo?.detail?.email}
                </a>
              ) : (
                <span />
              )}
            </div>
            <p className="border-t-2 border-[#BDB76B]"></p>
            <div className=" min-h-[100px] w-full mb-4 text-justify">
              <h5 className="uppercase  pt-3 font-normal text-[#BDB76B] text-[20px]">personal summary</h5>
              <p>{summarySection}</p>
            </div>
            <div className=" min-h-[100px] w-full mb-4 text-justify">
              <h5 className="uppercase  pt-3 font-normal text-[#BDB76B] text-[20px]">Work History</h5>
              <p>{workExpSection}</p>
            </div>
            <div className=" min-h-[100px] w-full mb-4 text-justify">
              <h5 className="uppercase  pt-3 font-normal text-[#BDB76B] text-[20px]">Skills</h5>
              <p>{skillSection}</p>
            </div>
            <div className=" min-h-[100px] w-full mb-4 text-justify">
              <h5 className="uppercase  pt-3 font-normal text-[#BDB76B] text-[20px]">Education</h5>
              <p>{educationSection}</p>
            </div>
          </div>
        </div>
      </div>
    ),
    // Template 11
    (
      <div key="template11" className=''>
        <div ref={containerRef} className={styles.container}>
          <div className=" p-4 ">
            <p className="mb-1 text-center text-teal-400  text-[32px] uppercase ">{info.basicInfo?.detail?.name}</p>
            <p className="text-[17px] text-center  font-normal mb-1 uppercase">{info.basicInfo?.detail?.title}</p>
            <p className="border-t-2 border-teal-400 mb-1"></p>
            <p className="border-t-[5px] border-teal-400 mb-2"></p>
            <div className="flex  justify-center w-full gap-3 mb-3 text-gray-600 ">
              <p className="text-gray-600">Address : {info.basicInfo?.detail?.address} </p>
              {info.basicInfo?.detail?.phone ? (
                <a className="flex  mb-2 gap-1">
                  <span className="">Phone  </span><span>:</span>
                  {info.basicInfo?.detail?.phone}
                </a>
              ) : (
                <span />
              )}
              {info.basicInfo?.detail?.email ? (
                <a className="flex   mb-2 gap-1" type="email">
                  <span className=""> </span><span></span>
                  {info.basicInfo?.detail?.email}
                </a>
              ) : (
                <span />
              )}
            </div>

            <div className=" min-h-[100px] w-full mb-4 text-justify">
              <h5 className="uppercase  pt-1 font-medium  text-teal-400 text-[18px]">personal summary</h5>
              <p>{summarySection}</p>
            </div>
            <div className=" min-h-[100px] w-full mb-4 text-justify">
              <h5 className="uppercase  pt-1 font-medium  text-teal-400 text-[18px]">Work</h5>
              <p>{workExpSection}</p>
            </div>
            <div className=" min-h-[100px] w-full mb-4 text-justify">
              <h5 className="uppercase  pt-1 font-medium  text-teal-400 text-[18px]">Skills</h5>
              <p>{skillSection}</p>
            </div>
            <div className=" min-h-[100px] w-full mb-4 text-justify">
              <h5 className="uppercase  pt-1 font-medium  text-teal-400 text-[18px]">Education</h5>
              <p>{educationSection}</p>
            </div>
          </div>

        </div>
      </div>
    ),
    // Template 12
    (
      <div key="template12" className=''>
        <div ref={containerRef} className={styles.container}>


          <div
            className=" p-4 "
          >
            <p className="mb-1 text-center text-red-600  text-[32px] uppercase ">{info.basicInfo?.detail?.name}</p>
            <p className="text-[17px] text-center  font-normal mb-1 uppercase">{info.basicInfo?.detail?.title}</p>

            {/* 
             <p className="border-t-[5px]  mb-2"></p> */}
            <p className="text-gray-600 text-center">{info.basicInfo?.detail?.address}</p>
            <div className="flex  justify-center w-full gap-3 mb-3 text-gray-600 ">

              {info.basicInfo?.detail?.phone ? (
                <a className="flex  mb-2 gap-1">
                  <span className="">Phone  </span><span>:</span>
                  {info.basicInfo?.detail?.phone}
                </a>
              ) : (
                <span />
              )}
              {info.basicInfo?.detail?.email ? (
                <a className="flex   mb-2 gap-1" type="email">
                  <span className=""> </span><span></span>
                  {info.basicInfo?.detail?.email}
                </a>
              ) : (
                <span />
              )}
            </div>

            <div className=" min-h-[100px] w-full mb-4 text-justify">
              <h5 className="uppercase  pt-1 font-medium  text-red-600 text-[18px]">summary</h5>
              <p className="border-red-600 mt-5 w-[100%] border-b-[1px]">{summarySection}</p>
            </div>
            <div className=" min-h-[100px] w-full mb-4 text-justify">
              <h5 className="uppercase  pt-1 font-medium  text-red-600 text-[18px]">Work</h5>
              <p className="border-red-600 mt-5 w-[100%] border-b-[1px]">{workExpSection}</p>
            </div>
            <div className=" min-h-[100px] w-full mb-4 text-justify">
              <h5 className="uppercase  pt-1 font-medium  text-red-600 text-[18px]">Skills</h5>
              <p className="border-red-600 mt-5 w-[100%] border-b-[1px]">{skillSection}</p>
            </div>
            <div className=" min-h-[100px] w-full mb-4 text-justify">
              <h5 className="uppercase  pt-1 font-medium  text-red-600 text-[18px]">Education</h5>
              <p className="border-red-600 mt-5 w-[100%] border-b-[1px]">{educationSection}</p>
            </div>
          </div>
        </div>
      </div>
    ),
    // Template 13
    (
      <div key="template13" className=''>
        <div ref={containerRef} className={styles.container}>
          <div className="flex gap-5">

            <div
              className=" min-h-[1060px] p-4 text-start bg-gray-700 text-white  w-[40%] "
            >
              <div className="flex justify-center mt-4 mb-7">
                <div className=" rounded-full border-4 border-white mx-auto  h-48 w-48 bg-cover bg-center" style={{
                  backgroundImage: `url(${info.basicInfo?.detail?.photo || 'https://i.ibb.co/KGnMKN0/user.png'})`,
                }}>
                </div>
              </div>
              <p className="mb-2 text-start text-yellow-50 font-base text-[26px] uppercase ">{info.basicInfo?.detail?.name}</p>
              <p className="text-[14px] text-yellow-50 font-thin mb-4 uppercase">{info.basicInfo?.detail?.title}</p>

              <p className="border-t-[2px] mt-9 mb-5 border-yellow-50"></p>

              <div className=" min-h-[120px] w-full mb-4 text-justify">
                <p className=" text-[16px] uppercase text-yellow-50 font-bold mb-3">About me</p>
                {summarySection}
              </div>

              <div className=" min-h-[120px] w-full mb-4 text-justify">
                <p className=" text-[16px] uppercase text-yellow-50 font-bold mb-3">Skills</p>
                {skillSection}
              </div>

              <div className=" min-h-[120px] w-full mb-4 text-justify">
                <p className=" text-[16px] uppercase text-yellow-50 font-bold mb-3">contact</p>

                {info.basicInfo?.detail?.address ? (
                  <a className="flex flex-col text-[14px] mb-2 gap-1">
                    {info.basicInfo?.detail?.address}
                  </a>
                ) : (
                  <span />
                )}
                {info.basicInfo?.detail?.phone ? (
                  <a className="flex text-[14px] mb-2 gap-1">
                    {info.basicInfo?.detail?.phone}
                  </a>
                ) : (
                  <span />
                )}
                {info.basicInfo?.detail?.email ? (
                  <a className="flex w-full  text-[14px] mb-2 gap-1" type="email">
                    {info.basicInfo?.detail?.email}
                  </a>
                ) : (
                  <span />
                )}
              </div>

            </div>
            <div className=" w-[60%] ps-4 mt-4 text-black ">
              <div className=" min-h-[220px] w-full mb-4 text-justify">
                <p className="uppercase bg-yellow-100 w-full ps-2 pt-1 pb-1 font-medium my-2 text-gray-700 text-[17px] ">Work EXPERIENCE</p>
                {workExpSection}
              </div>

              <div className=" min-h-[120px] w-full  text-justify">
                <p className="uppercase bg-yellow-100 w-full ps-2 pt-1 pb-1 font-medium  text-gray-700 text-[17px] ">Education</p>
                {educationSection}
              </div>

              <div className=" min-h-[220px] w-full mb-4 text-justify">
                <p className="uppercase bg-yellow-100 w-full ps-2 pt-1 pb-1 font-medium my-2 text-gray-700 text-[17px] ">Language</p>
                {languageSection}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    // Template 14
    (
      <div key="template14">
        <div ref={containerRef} className={styles.container}>
          <div className="min-h-[1060px]">

            <div className="flex gap-5  bg-[#c6a68dbb] py-10 ">
              <div className="w-[40%]">
                <div className=" rounded-full border-4 border-white mx-auto  h-48 w-48 bg-cover bg-center" style={{
                  backgroundImage: `url(${info.basicInfo?.detail?.photo || 'https://i.ibb.co/KGnMKN0/user.png'})`,
                }}>
                </div>
              </div>

              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-5xl text-center">{info.basicInfo?.detail?.name}</p>
                  <p className="text-center font-extrabold mt-5">{info.basicInfo?.detail?.title}</p>
                </div>
              </div>
            </div>

            <div className=" flex gap-3">
              <div className="bg-[#b2c3bf7f] w-[40%] min-h-[790px] px-5">

                <div className="mt-10">
                  <div className=" min-h-[120px] w-full mb-4 text-justify">
                    <p className=" text-[16px] uppercase font-bold mb-3">contact</p>
                    {info.basicInfo?.detail?.address ? (
                      <a className="flex flex-col text-[14px] mb-2 gap-1">
                        {info.basicInfo?.detail?.address}
                      </a>
                    ) : (
                      <span />
                    )}
                    {info.basicInfo?.detail?.phone ? (
                      <a className="flex text-[14px] mb-2 gap-1">
                        {info.basicInfo?.detail?.phone}
                      </a>
                    ) : (
                      <span />
                    )}
                    {info.basicInfo?.detail?.email ? (
                      <a className="flex w-full  text-[14px] mb-2 gap-1" type="email">
                        {info.basicInfo?.detail?.email}
                      </a>
                    ) : (
                      <span />
                    )}
                  </div>

                  <div className=" min-h-[120px] w-full mb-4 text-justify">
                    <p className=" text-[16px] uppercase font-bold mb-3">Education</p>
                    {educationSection}
                  </div>

                  <div className=" min-h-[120px] w-full mb-4 text-justify">
                    <p className=" text-[16px] uppercase font-bold mb-3">Key Skills</p>
                    {skillSection}
                  </div>
                </div>
              </div>
              <div className="w-[56%] mt-10">

                <div className="min-h-[120px] w-full mb-4 text-justify">
                  <p className=" text-[16px] uppercase font-bold mb-3">Professional Profile</p>
                  {summarySection}
                </div>

                <div className=" min-h-[120px] w-full mb-4 text-justify">
                  <p className=" text-[16px] uppercase font-bold mb-3">Work Experience</p>
                  {workExpSection}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )

  ];

  return templates;
}
