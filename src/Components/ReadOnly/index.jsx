import React from "react";

const InputReadOnly = ({label, value}) => { 
    return (

    <div className="flex flex-col">

        <label className="text-[11px] text-colorFontParagraph  ">{label}</label>
        <input className="border-b-[1.5px] py-1 border-navBg active:outline-0 focus:outline-0" type="text" readOnly value={value}/>
                                           
        </div>
    )

}

export default InputReadOnly