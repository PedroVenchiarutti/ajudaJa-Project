import React, { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';

export default function FAQ() {
    
    const [FAQ1, setFAQ1] = useState(false)
    const [FAQ2, setFAQ2] = useState(false)
    const [FAQ3, setFAQ3] = useState(false)
    const [FAQ4, setFAQ4] = useState(false)
    const [FAQ5, setFAQ5] = useState(false)

   const FAQ5ToUp = () => { 
    if(FAQ4) { 
        return ' w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-md relative mb-[-5px] z-50 mt-[160px] md:mt-[80px] sm:mt-[40px]'
    } else if(!FAQ4 && FAQ5){ 
        return ' w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-t-md relative mb-[-5px] z-50 '
    } else { 
        return " w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-md relative mb-[-5px] z-50"
    }
   }

    return (
        <div className="w-full">
            <div className={FAQ5 ? 'pb-[250px] sm:pb-[150px] md:pb-[100px] m-auto flex flex-col items-center justify-center max-w-[1080px]' : "pb-10 m-auto flex flex-col items-center justify-center max-w-[1080px]"}>

                <div className="p-4 drop-shadow-lg  componentFaq ">
                    <div className={FAQ1 ? ' w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-t-md relative mb-[-5px] z-50' : " w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-md relative mb-[-5px] z-50"} onClick={e => setFAQ1(!FAQ1)}>
                        <h2 className="font-medium">Lorem ipsum</h2> 
                        {FAQ1 ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
                    </div>
                    <div className={FAQ1 ? `animate-faqAnimationToDown content p-3 bg-faqGrayBg flex justify-center items-center gap-5 absolute mb-10 w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  pt-5 rounded-b-md` : `content p-3 bg-faqGrayBg flex justify-center items-center gap-5 absolute mb-10 w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  pt-5 rounded-b-md 
                    animate-faqAnimationToTop`}>
                        <SubdirectoryArrowRightIcon/>
                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facilis aperiam velit enim rem ratione, possimus, quos aut sint pariatur, voluptatum eligendi perferendis modi commodi officiis! Molestiae sit molestias voluptate.</p>
                    </div>
                </div>

                <div className="p-4 drop-shadow-lg  componentFaq ">
                    <div className={FAQ1? ' w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-t-md relative mb-[-5px] z-50 mt-[160px] md:mt-[80px] sm:mt-[100px]' : " w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-md relative mb-[-5px] z-50"} onClick={e => setFAQ2(!FAQ2)}>
                        <h2 className="font-medium">Lorem ipsum</h2> 
                        {FAQ2 ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
                    </div>
                    <div className={FAQ2 ? `animate-faqAnimationToDown content p-3 bg-faqGrayBg flex justify-center items-center gap-5 absolute mb-10 w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  pt-5 rounded-b-md` : `content p-3 bg-faqGrayBg flex justify-center items-center gap-5 absolute mb-10 w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  pt-5 rounded-b-md 
                    animate-faqAnimationToTop`}>
                        <SubdirectoryArrowRightIcon/>
                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facilis aperiam velit enim rem ratione, possimus, quos aut sint pariatur, voluptatum eligendi perferendis modi commodi officiis! Molestiae sit molestias voluptate.</p>
                    </div>
                </div>


                <div className="p-4 drop-shadow-lg  componentFaq">
                    <div className={FAQ2 ? ' w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-t-md relative mb-[-5px] z-50 mt-[160px] md:mt-[80px] sm:mt-[100px]' : " w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-md relative mb-[-5px] z-50"} onClick={e => setFAQ3(!FAQ3)}>
                        <h2 className="font-medium">Lorem ipsum</h2> 
                        {FAQ3 ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
                    </div>
                    <div className={FAQ3 ? `animate-faqAnimationToDown content p-3 bg-faqGrayBg flex justify-center items-center gap-5 absolute mb-10 w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  pt-5 rounded-b-md` : `content p-3 bg-faqGrayBg flex justify-center items-center gap-5 absolute mb-10 w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  pt-5 rounded-b-md 
                    animate-faqAnimationToTop`}>
                        <SubdirectoryArrowRightIcon/>
                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facilis aperiam velit enim rem ratione, possimus, quos aut sint pariatur, voluptatum eligendi perferendis modi commodi officiis! Molestiae sit molestias voluptate.</p>
                    </div>
                </div>
                
                <div className="p-4 drop-shadow-lg  componentFaq">
                    <div className={FAQ3 ? ' w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-t-md relative mb-[-5px] z-50 mt-[160px] md:mt-[80px] sm:mt-[100px]' : " w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-md relative mb-[-5px] z-50"} onClick={e => setFAQ4(!FAQ4)}>
                        <h2 className="font-medium">Lorem ipsum</h2> 
                        {FAQ4 ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
                    </div>
                    <div className={FAQ4 ? `animate-faqAnimationToDown content p-3 bg-faqGrayBg flex justify-center items-center gap-5 absolute mb-10 w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  pt-5 rounded-b-md` : `content p-3 bg-faqGrayBg flex justify-center items-center gap-5 absolute mb-10 w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  pt-5 rounded-b-md 
                    animate-faqAnimationToTop`}>
                        <SubdirectoryArrowRightIcon/>
                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facilis aperiam velit enim rem ratione, possimus, quos aut sint pariatur, voluptatum eligendi perferendis modi commodi officiis! Molestiae sit molestias voluptate.</p>
                    </div>
                </div>

                <div className="p-4 drop-shadow-lg  componentFaq">
                    <div className={FAQ5ToUp()} onClick={e => setFAQ5(!FAQ5)}>
                        <h2 className="font-medium">Lorem ipsum</h2> 
                        {FAQ5 ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
                    </div>
                    <div className={FAQ5 ? `animate-faqAnimationToDown content p-3 bg-faqGrayBg flex justify-center items-center gap-5 absolute mb-[100px] w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]   pt-5 rounded-b-md` : `content p-3 bg-faqGrayBg flex justify-center items-center gap-5 absolute mb-10 w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  pt-5 rounded-b-md 
                    animate-faqAnimationToTop`}>
                        <SubdirectoryArrowRightIcon/>
                        <p className='text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facilis aperiam velit enim rem ratione, possimus, quos aut sint pariatur, voluptatum eligendi perferendis modi commodi officiis! Molestiae sit molestias voluptate.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
} 