import React, { useState } from "react";
import PersonSVG from '../../../public/images/image-firs-seasson.png'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { LteMobiledata } from "@mui/icons-material";

const UserInformation = () => { 

        const [formValues, setFormsValues] = useState([{id: 1, description:''}])
       
    
           const handleChange = (i,e) => { 
            let newFormValues = [...formValues];
            let add = i + 1
            newFormValues[i].id = add++
            newFormValues[i].description = e.target.value;
            setFormsValues( newFormValues)
        
        }

        const addFormFields = () => { 
            let newFormValues = [...formValues];
            let abc = [...formValues, {id: '' , description: ''}]
                setFormsValues(abc)
            console.log(newFormValues)

        }

        const removeFormFields = (i) => { 
            let newFormValues = [...formValues];
            newFormValues.splice(i, 1);
            setFormsValues(newFormValues)
        }

  

    return(
        <div className="bg-white ">
            <Header/>

        <div className="w-full pt-28">
            <div className=" sm:p-5 md:w-[700px] lg:w-[1080px] m-auto pt-6">

                <div className="title  px-2 pb-10">
                    <h1 className="text-2xl  md:text-3xl font-bold pb-3">Informe aqui alguma alergia, condição ou síndrome que você possui!</h1>
                    <p className="text-sm ">Por favor, siga o exemplo abaixo</p>
                </div>

                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex lg:mt-[33px] flex-col gap-2 ">
                
                 
                                {formValues.map((element, index)=> (
                                       <div key={index} className="flex justify-center lg:justify-start  gap-1 items-center px-2">
                                
                                       <input className="border w-[300px] p-1 rounded-md" type="text"  placeholder="Insira sua doença ou alergia aqui"  onChange={e => handleChange(index, e)} />
                                       <button onClick={()=> addFormFields()} >
                                           <AddCircleOutlineIcon/> </button>
                                           {index ?
                                            <button onClick={() => removeFormFields(index)}>
                                            <DeleteForeverIcon />
                                        </button> : <div className="invisible"><DeleteForeverIcon /></div> }
                                
                                       </div>
                                ))}
                            

                 
                     
                        <div className="buttons flex lg:justify-start lg:pl-2 justify-center gap-4 pt-10">
                            <button className="px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 hover:text-navFontColor hover:border ">Voltar</button> 
                            <button className="border px-6 py-2 rounded-lg text-navFontColor font-bold  hover:bg-navBg hover:text-white ">Avançar</button>
                        </div>


                    </div>

                    <div className=" p-6 lg:flex-row  flex content-center items-center lg:items-start flex-col gap-2">

                        <p className="text-lg ">Essas informações estarão visiveis em seu perfil,
                            <strong> qualquer pessoa que escanar seu código QR </strong>
                            irá visualiza-las.</p>

                        <img className="w-[350px]" src={PersonSVG} alt="" />

                    </div>
                </div>

               
            </div>

        </div>
        </div>
    )
}

export default UserInformation