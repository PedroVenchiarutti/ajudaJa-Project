import React, { useState }  from "react";
import Person from '../../assets/images/people.svg'
import Money from '../../assets/images/money.svg'
import Family from '../../assets/images/security.svg'

export default function Cards() { 
  
    const [lifeSecurity, setLifeSecurity] = useState();
    const [money, setMoney] = useState();
    const [family, setFamily] = useState();
    const [lifeSecurityToggle, setlifeSecurityToggle] = useState();
    const [moneyToggle, setMoneyToggle] = useState()
    const [familyToggle, setFamilyToggle] = useState()

    const classBoxInformation = 'animate-CardInformationToDown max-w-[1080px] grid grid-cols-1 md:grid-cols-3 auto-rows-auto p-10 justify-items-center md:gap-2  md:pb-[200px] m-auto'
    const boxGreen = 'px-16 py-9 bg-cardGreenBg w-[250px] sm:w-[500px] md:w-[250px] rounded-lg z-50  mb-[-50px] relative '
    const imageSVG = 'w-[100px] m-auto z-auto'
    const titleBox = 'text-xl font-medium '
    const textBox = 'text-sm p-2 '
   
    return(
        <section className="w-full">


            <div className={classBoxInformation}>

                {/* Box 1 */}
                <div className={lifeSecurityToggle ? `transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg ` : `transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg mb-[70px]`}
                onMouseEnter={e => { 
                    setLifeSecurity(true) 
                    setlifeSecurityToggle(true)
                }}
                onMouseLeave={e => { 
                    setLifeSecurity(false)
                    setlifeSecurityToggle(false)
                }}
                 >
                    
                    {/* Box */}
                    <div className={boxGreen}>
                
                        <img className={imageSVG} src={Person} alt="" />
                
                    </div>
                
                    <div className={ lifeSecurity  ? `animate-CardInformationToDown    bg-cardGrayBg  px-3    pt-16 pb-5 rounded-b-lg absolute w-[250px] sm:w-[500px] md:w-[250px]` : 'animate-CardInformationToTop  bg-cardGrayBg  px-3    pt-16 pb-5 rounded-b-lg absolute w-[250px] sm:w-[500px] md:w-[250px]'}   >
                        <h2 className={titleBox}>Sua vida mais segura</h2>
                        <p className={textBox}>
                            Com o <strong>Ajuda.já</strong> você contará com a
                            nossa ajuda para emergencias médicas!
                        </p>
                        </div>
                </div>


                {/* Other box */}
    
                <div className={
                    lifeSecurityToggle ? `animate-CardInformationToDown2 md:animate-none transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg mt-[250px] mb-[70px] md:mt-[0px]` : `transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg mb-[70px]`
                } 
                onMouseEnter={e => {
                    setMoney(true)
                    setMoneyToggle(true)
                }}
                onMouseLeave={e => {
                    setMoney(false)
                    setMoneyToggle(false)
                }}
                 >
                    
                    {/* Box */}
                    <div className={boxGreen} >
                
                        <img className={imageSVG} src={Money} alt="" />
                
                    </div>
                
                    <div className={ money  ? ` animate-CardInformationToDown   bg-cardGrayBg  px-3    pt-16 pb-5  rounded-b-lg absolute w-[250px] sm:w-[500px] md:w-[250px]` : 'animate-CardInformationToTop  bg-cardGrayBg  px-3    pt-16 pb-5 rounded-b-lg absolute w-[250px] sm:w-[500px] md:w-[250px]'}   >
                        <h2 className={titleBox}>Totalmente gratuito</h2>
                        <p className={textBox}>
                            O <strong>Ajuda.já</strong> visa ajudar a maioria das pessoas
                            que utilizam, dessa forma, optamos por deixa-lo totalmente gratuito!
                        </p>
                        </div>
                </div>



                {/* Box - Family */}

                <div className={
                    moneyToggle ? ` animate-CardInformationToDown2 md:animate-none  transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg mt-[180px] mb-[70px] sm:mt-[0px]` : `transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg mb-[70px]`
                } 
                onMouseEnter={e => {
                    setFamily(true)
                    setFamilyToggle(true)
                }}
                onMouseLeave={e => {
                    setFamily(false)
                    setFamilyToggle(false)
                }}
                 >
                    
                    {/* Box */}
                    <div className={boxGreen}>
                
                        <img className={imageSVG} src={Family} alt="" />
                
                    </div>
                
                    <div className={ family  ? `animate-CardInformationToDown    bg-cardGrayBg  px-3    pt-16 pb-5 rounded-b-lg absolute w-[250px] sm:w-[500px] md:w-[250px] mb-10` : 'animate-CardInformationToTop  bg-cardGrayBg  px-3    pt-16 pb-5 rounded-b-lg absolute w-[250px] sm:w-[500px] md:w-[250px]'}   >
                        <h2 className={titleBox}>Proteja quem você ama</h2>
                        <p className={textBox}>
                        Com o <strong>Ajuda.já</strong>, você pode cadastrar pessoas que
                        são importantes para você e assim saberá que
                        essas pessoas estarão seguras onde for
                        </p>
                        </div>
                </div>
            </div>
        </section>
    )

}