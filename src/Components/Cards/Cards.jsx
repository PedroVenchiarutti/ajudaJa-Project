import React, { useState }  from "react";
import Person from '../../assets/images/people.svg'
import Money from '../../assets/images/money.svg'
import Family from '../../assets/images/security.svg'
import './style.css'

export default function Cards() { 
  
    const [lifeSecurity, setLifeSecurity] = useState();
    const [money, setMoney] = useState();
    const [family, setFamily] = useState();
    const [lifeSecurityToggle, setlifeSecurityToggle] = useState();
    const [moneyToggle, setMoneyToggle] = useState()
    const [familyToggle, setFamilyToggle] = useState()


    

    return(
        <section className="w-full  ">


            <div className=" CardInformationToTop2 max-w-[1080px] grid grid-cols-1 md:grid-cols-3 auto-rows-auto p-10 justify-items-center md:gap-2  md:pb-[200px] m-auto">

                {/* Box 1 */}
                <div className={lifeSecurityToggle ? `transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg mb-[250px]  md:mb-[30px]` : `transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg mb-[70px]`}
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
                    <div className=" px-16 py-9 bg-cardGreenBg w-[250px] sm:w-[500px] md:w-[250px] rounded-cards z-50  mb-[-50px] relative " >
                
                        <img className="w-[100px] m-auto z-auto" src={Person} alt="" />
                
                    </div>
                
                    <div className={ lifeSecurity  ? `CardInformationToDown   bg-cardGrayBg  px-3    pt-16 pb-5 rounded-b-cards absolute w-[250px] sm:w-[500px] md:w-[250px]` : 'CardInformationToTop  bg-cardGrayBg  px-3    pt-16 pb-5 rounded-b-cards absolute w-[250px] sm:w-[500px] md:w-[250px]'}   >
                        <h2 className="text-xl font-medium ">Sua vida mais segura</h2>
                        <p className="text-sm p-5 ">
                            Com o <strong>Ajuda.já</strong> você contará com a
                            nossa ajuda para emergencias médicas!
                        </p>
                        </div>
                </div>


                {/* Other box */}
    
                <div className={
                    moneyToggle ? `transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg mb-[250px] md:mb-[30px]` : `transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg mb-[70px]`
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
                    <div className="  px-16 py-9 bg-cardGreenBg w-[250px] sm:w-[500px] md:w-[250px] rounded-cards z-50  mb-[-50px] relative " >
                
                        <img className="w-[100px] m-auto z-auto" src={Money} alt="" />
                
                    </div>
                
                    <div className={ money  ? `CardInformationToDown   bg-cardGrayBg  px-3    pt-16 pb-5  rounded-b-cards absolute w-[250px] sm:w-[500px] md:w-[250px]` : 'CardInformationToTop  bg-cardGrayBg  px-3    pt-16 pb-5 rounded-b-cards absolute w-[250px] sm:w-[500px] md:w-[250px]'}   >
                        <h2 className="text-xl font-medium pb-3">Totalmente gratuito</h2>
                        <p className="text-sm ">
                            O <strong>Ajuda.já</strong> visa ajudar a maioria das pessoas
                            que utilizam, dessa forma, optamos por deixa-lo totalmente gratuito!
                        </p>
                        </div>
                </div>



                {/* Box - Family */}

                <div className={
                    familyToggle ? `transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg mb-[250px] md:mb-[30px]` : `transform hover:scale-105 transition duration-300 justify-center content-center text-center drop-shadow-lg mb-[70px]`
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
                    <div className="  px-16 py-9 bg-cardGreenBg w-[250px] sm:w-[500px] md:w-[250px] rounded-cards z-50  mb-[-50px] relative " >
                
                        <img className="w-[100px] m-auto z-auto" src={Family} alt="" />
                
                    </div>
                
                    <div className={ family  ? `CardInformationToDown   bg-cardGrayBg  px-3    pt-16 pb-5 rounded-b-cards absolute w-[250px] sm:w-[500px] md:w-[250px] mb-10` : 'CardInformationToTop  bg-cardGrayBg  px-3    pt-16 pb-5 rounded-b-cards absolute w-[250px] sm:w-[500px] md:w-[250px]'}   >
                        <h2 className="text-xl font-medium pb-3">Proteja quem você ama</h2>
                        <p className="text-sm ">
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