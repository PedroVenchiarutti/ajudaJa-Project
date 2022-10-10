
import React from "react";
import DoctorGirl from '../../assets/images/doctor-girl.svg'
import DoctorMan from '../../assets/images/doctor-man.svg'

export default function Information() { 


    const contentClass = 'animate-contentClass m-2.5 flex flex-col sm:flex-row md:flex-row justify-center items-center gap-1 sm:gap-10 animation-toRight  '
    const contentClassReverse = 'animate-contentClassReverse m-2.5 flex flex-col sm:flex-row-reverse md:flex-row-reverse justify-center items-center gap-1 sm:gap-10 '
    const svgImage = 'flex justify-self-center w-20 sm:w-24 transform hover:scale-110 transition duration-300'
    const firstBox = 'm-2.5 bg-firstBoxBg rounded-input p-2.5 sm:w-[50rem] sm:text-xl shadow-md transform hover:scale-95 transition duration-300'
    const secondBox = 'm-2.5 sm:m-0 bg-secondBoxBg p-2.5 rounded-input sm:w-[50rem] sm:text-xl shadow-md transform hover:scale-95 transition duration-300 '

    return ( 

    <div className="w-[100%] pt-32">

        <div className={contentClass}>

            <div className={svgImage}>
                <img src={DoctorGirl} alt="" />
            </div>
            <div className={firstBox}>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nobis, beatae natus unde alias eaque, fugit dicta nostrum cumque ipsa, odio provident suscipit optio aut. Distinctio impedit minima facilis sit.
                </p>
            </div>
        </div>

        <div className={contentClassReverse}>
            
        <div className={svgImage}>
                <img src={DoctorMan} alt="" />
            </div>

        <div className={secondBox}>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nobis, beatae natus unde alias eaque, fugit dicta nostrum cumque ipsa, odio provident suscipit optio aut. Distinctio impedit minima facilis sit.
                </p>
            </div>

            
           
        </div>
    </div>
    )
}
