export const principalDIV = FAQ => FAQ ? 'pb-[250px] sm:pb-[150px] md:pb-[100px] m-auto flex flex-col items-center justify-center max-w-[1080px]' : 'pb-10 m-auto flex flex-col items-center justify-center max-w-[1080px]'

export const cardFAQ = () => 'p-4 drop-shadow-lg'

export const cardTitleFAQOne = FAQ => FAQ ? 'animate-contentClass w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-t-md relative mb-[-5px] z-50' : 'animate-contentClass w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-md relative mb-[-5px] z-50'

export const cardTitleFAQ = FAQ => FAQ ? 'animate-contentClass w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-t-md relative mb-[-5px] z-50 mt-[180px] md:mt-[80px] sm:mt-[100px]' : 'animate-contentClass w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-md relative mb-[-5px] z-50'

export const cardContentFAQ = FAQ => FAQ ? 'animate-faqAnimationToDown content p-3 bg-faqGrayBg flex justify-center items-center gap-5 absolute mb-10 w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  pt-5 rounded-b-md' : 'content p-3 bg-faqGrayBg flex justify-center items-center gap-5 absolute mb-10 w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  pt-5 rounded-b-md  animate-faqAnimationToTop'


export const FAQ5ToUp = (FAQ4, FAQ5) => { 
    if(FAQ4) { 
        return 'animate-contentClass w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-md relative mb-[-5px] z-50 mt-[200px] md:mt-[80px] sm:mt-[130px]'
    } else if(!FAQ4 && FAQ5){ 
        return 'animate-contentClass w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-t-md relative mb-[-5px] z-50 '
    } else { 
        return "animate-contentClass w-[300px] sm:w-[500px] md:w-[750px] lg:w-[880px] xl:w-[950px]  title p-4 flex justify-between bg-faqGreenBg rounded-md relative mb-[-5px] z-50"
    }
   }

