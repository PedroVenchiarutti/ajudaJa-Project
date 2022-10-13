import React, { useState }  from "react";
import Person from '../../assets/images/people.svg'
import Money from '../../assets/images/money.svg'
import Family from '../../assets/images/security.svg'
import {boxGreen, imageSVG, titleBox, textBox,testMoneyToggle, cardlifeSecurityTitle, cardLifeSecurityContent, cardMoneyTitle, cardMoneyContent, cardFamilyContent, FAQCards} from './classTailwind'
import Fade from 'react-reveal/Fade';

export default function Cards() { 
  
    const [lifeSecurity, setLifeSecurity] = useState();
    const [money, setMoney] = useState();
    const [family, setFamily] = useState();
    const [lifeSecurityToggle, setlifeSecurityToggle] = useState();
    const [moneyToggle, setMoneyToggle] = useState()
    const [familyToggle, setFamilyToggle] = useState()

   
    return(
        <section className="w-full">
            <Fade bottom>
            <div className={FAQCards}>

                {/* Box 1 */}
                <div className={cardlifeSecurityTitle(lifeSecurityToggle)}
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
                
                    <div className={cardLifeSecurityContent(lifeSecurity)}   >
                        <h2 className={titleBox}>Sua vida mais segura</h2>
                        <p className={textBox}>
                            Com o <strong>Ajuda.já</strong> você contará com a
                            nossa ajuda para emergencias médicas!
                        </p>
                        </div>
                </div>


                {/* Other box */}
    
                <div className={
                    cardMoneyTitle(lifeSecurityToggle) 
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
                
                    <div className={ cardMoneyContent(money)}   >
                        <h2 className={titleBox}>Totalmente gratuito</h2>
                        <p className={textBox}>
                            O <strong>Ajuda.já</strong> visa ajudar a maioria das pessoas
                            que utilizam, dessa forma, optamos por deixa-lo totalmente gratuito!
                        </p>
                        </div>
                </div>
                {/* Box - Family */}

                {}

                <div className={testMoneyToggle(moneyToggle, family)} 
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
                
                    <div className={cardFamilyContent(family)}   >
                        <h2 className={titleBox}>Proteja quem você ama</h2>
                        <p className={textBox}>
                        Com o <strong>Ajuda.já</strong>, você pode cadastrar pessoas que
                        são importantes para você e assim saberá que
                        essas pessoas estarão seguras onde for
                        </p>
                        </div>
                </div>
            </div>

            </Fade>
        </section>
    )

}