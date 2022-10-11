import React, { useState } from "react";
import Header from "../../Components/Header";
import PersonSVG from '../../../public/images/image-firs-seasson.png'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const UserInformation = () => { 
 
    const [serviceList, setServiceList] = useState([{service: ''}])

    return(
        <div className="bg-white ">
            <Header/>

        <div className="w-full pt-28">
            <div className="w-[1080px] m-auto pt-6">

                <div className="title pb-10">
                    <h1 className="text-3xl font-bold">Informe aqui alguma alergia, condição ou síndrome que você possui!</h1>
                    <p className="text-sm ">Por favor, siga o exemplo abaixo</p>
                </div>

                <div className="flex justify-between">
                    <div className="flex flex-col gap-2 ">
                        <div>
                            <input className="border w-[400px] p-1 rounded-md" type="text" placeholder="Asma" />
                        </div>

                        <div className="flex gap-1 items-center">
                            
                        <input className="border w-[400px] p-1 rounded-md" type="text" placeholder="Alergia a amendoim" /> 
                        <button onClick={e => inputSick()}>
                            <AddCircleOutlineIcon/> </button>
                            <button>
                                <DeleteForeverIcon />
                            </button>
                        </div>

                        {serviceList.map((item, key)=> { 
                            return(
                                <div key={key} className="flex gap-1 items-center">
                            
                                <input className="border w-[400px] p-1 rounded-md" type="text" placeholder="Alergia a amendoim" /> 
                                <button onClick={e => inputSick()}>
                                    <AddCircleOutlineIcon/> </button>
                                    <button>
                                        <DeleteForeverIcon />
                                    </button>
                                </div>
                            )
                        })}

                        

                 
                     
                        <div className="buttons flex justify-center gap-4 pt-10">
                            <button className="px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 hover:text-navFontColor hover:border ">Voltar</button> 
                            <button className="border px-6 py-2 rounded-lg text-navFontColor font-bold  hover:bg-navBg hover:text-white ">Avançar</button>
                        </div>


                    </div>

                    <div className="w-[50%] flex">

                        <p className="text-lg">Essas informações estarão visiveis em seu perfil
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