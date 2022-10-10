export const boxGreen = 'px-16 py-9 bg-cardGreenBg w-[250px] sm:w-[500px] md:w-[230px] rounded-lg z-50  mb-[-50px] relative '
export const imageSVG = 'w-[100px] m-auto z-auto'
export const titleBox = 'text-xl font-medium '
export const textBox = 'text-sm p-2 '

export const downFAQ = (family, money, lifeSecurity) => { 
    if(family || money || lifeSecurity ) { 
        return 'animate-CardInformationToDown max-w-[1080px] grid grid-cols-1 md:grid-cols-3 auto-rows-auto p-10 justify-items-center md:gap-2  md:pb-[180px] m-auto'
    } else { 
        return 'animate-CardInformationToDown max-w-[1080px] grid grid-cols-1 md:grid-cols-3 auto-rows-auto p-10 justify-items-center md:gap-2  md:pb-[50px] m-auto'
    }
}

export const FAQCards = 'animate-CardInformationToDown max-w-[1080px] grid grid-cols-1 md:grid-cols-3 auto-rows-auto p-10 justify-items-center md:gap-2  md:pb-[200px] m-auto'

export const testMoneyToggle = (moneyToggle, family) => { 
    if(moneyToggle) { 
        return 'animate-CardInformationToDown2 md:animate-none  transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg mt-[180px] mb-[70px] sm:mt-[130px] md:mt-[0px]'
    } else if(!moneyToggle && family) { 
        return 'transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg mb-[240px] sm:mb-[140px] md:mb-[120px]'
    } else { 
        return 'transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg mb-[30px]'
    }
}

export const cardlifeSecurityTitle = lifeSecurityToggle => lifeSecurityToggle ? `transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg ` : `transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg mb-[70px]`

export const cardLifeSecurityContent = lifeSecurity => lifeSecurity ? `animate-CardInformationToDown    bg-cardGrayBg  px-3    pt-16 pb-5 rounded-b-lg absolute w-[250px] sm:w-[500px] md:w-[230px]` : 'animate-CardInformationToTop  bg-cardGrayBg  px-3    pt-16 pb-5 rounded-b-lg absolute w-[250px] sm:w-[500px] md:w-[230px]'

export const cardMoneyTitle = lifeSecurityToggle => lifeSecurityToggle ? `animate-CardInformationToDown2 md:animate-none transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg mt-[250px] mb-[70px] sm:mt-[200px] md:mt-[0px]` : `transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg mb-[70px]`

export const cardMoneyContent = money => money  ? ` animate-CardInformationToDown   bg-cardGrayBg  px-3    pt-16 pb-[10px]  rounded-b-lg absolute w-[250px] sm:w-[500px] md:w-[230px]` : 'animate-CardInformationToTop  bg-cardGrayBg  px-3    pt-16 pb-5 rounded-b-lg absolute w-[250px] sm:w-[500px] md:w-[230px]'

export const cardFamilyContent = family => family  ? `animate-CardInformationToDown    bg-cardGrayBg   px-3    pt-16 pb-5 rounded-b-lg absolute w-[250px] sm:w-[500px] md:w-[230px] mb-10` : 'animate-CardInformationToTop  bg-cardGrayBg  px-3    pt-16 pb-5 rounded-b-lg absolute w-[250px] sm:w-[500px] md:w-[230px]'