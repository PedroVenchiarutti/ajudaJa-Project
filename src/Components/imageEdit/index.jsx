import React from "react";
import logo from '/images/logo-v2.png';

const imageEdit = ({preview, onClickIMG, onClickButton, reference, onChange, srcPreview}) => { 
    return(
        <>
        <div className="flex justify-between items-center">
         {preview ? (
                    <img
                      className="w-24 h-24  rounded-[50%] cursor-pointer border border-[#E3E6E3] "
                      src={srcPreview}
                      style={{ objectFit: 'cover'  }}
                      onClick={onClickIMG}
                      alt=""
                    />
                  ) : (
                    <button
                      className="w-24 h-24  rounded-[50%] cursor-pointer border border-[#E3E6E3] "
                      onClick={onClickButton}
                    >
                      <span className="text-sm">
                        Foto de <br /> perfil
                      </span>
                    </button>
                  )
                  }
                  <img className="w-[120px]" src={logo} alt="" />
                    </div>
                  
                    <input
                  type="file"
                  ref={reference}
                  accept="image/*"
                  id="fileImg"
                  onChange={onChange}
                  className="ml-36 absolute hidden placeholder-colorFontParagraph max-w-3xl w-80 mt-[362px] border-b bg-faqGrayBg p-1 "
                />

          
        
        </>
    )
}

export default imageEdit