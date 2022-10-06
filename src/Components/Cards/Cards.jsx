import React  from "react";
import Person from '../../assets/images/people.svg'
import './style.css'

export default function Cards() { 
  

    return(
        <section className="w-full border-solid border-black border-2">


            <div className="max-w-7xl flex justify-center content-center p-10 pb-[200px]">

                <div className=" max-w-[280px] justify-center content-center text-center drop-shadow-lg" >
                    
                    {/* Box */}
                    <div className=" px-16 py-9 bg-cardGreenBg w-[250px] rounded-cards z-50  mb-[-50px] relative " >
                
                        <img className="w-[100px] m-auto z-auto" src={Person} alt="" />
                
                    </div>
                
                    <div className={`CardInformationToDown teste  bg-cardGrayBg  px-3    pt-16 pb-5 rounded-b-cards absolute w-[250px] ` }   >
                        <h2 className="text-xl font-medium pb-3">Sua vida mais segura</h2>
                        <p className="text-sm">
                            Com o <strong>Ajuda.já</strong> você contará com a
                            nossa ajuda para emergencias médicas!
                        </p>
                        </div>
                </div>

                
            </div>
        </section>
    )

}