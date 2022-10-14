import React, {useState} from "react";
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import EditProfilePNG from '../../../public/images/editprofile.png'


const EditProfile = () => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [cellphone, setCellphone] = useState();
    const [birthday, setBirthday] = useState();


    return (
        <div className="w-full   bg-white">
            <Header/>

                    {/* Content */}
                <div className="w-[1080px] pt-32 flex m-auto">
                    <div className=" bg-[#fff] drop-shadow-lg  flex justify-around m-auto px-10 py-5 rounded-lg pb-10">
                        <div className="flex flex-col justify-center items-center ">
                            <img className="w-[400px]" src={EditProfilePNG} alt="" />
                            <button className="border mr-5 px-6 py-2 rounded-lg text-navFontColor font-bold  hover:bg-navBg hover:text-white ">Gerar código QR</button>
                        </div>
                        <div className="pt-14  formAndButtons flex flex-col w-[550px] content-center ">
                            <form className="flex flex-col gap-5 items-center ">
                                <input className=" border-b-2 w-[400px] text-xl " value='Demerson Oliveira' type="text" />
                                <input className="border-b-2 w-[400px] text-xl " value='demersontorres520@gmail.com'  type="text" />
                                <input className="border-b-2 w-[400px] text-xl " value='+55 (13) 9742-67835'  type="text" />
                                <div className="flex gap-2 mr-14  ">
                                    <label className="text-xl " htmlFor="">
                                       Data de Nascimento
                                    </label>
                                    <input className="border-b-2 text-xl" type="date" value="1997-06-10"/>
                                </div>
                        
                        
                            </form>
                        
                            <div className="buttons py-6 pt-14 flex gap-4 justify-center">
                        
                                <button className="border px-8 py-2 rounded-lg text-navFontColor font-bold  hover:bg-navBg hover:text-white ">Editar</button>
                            <button className="px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 hover:text-navFontColor hover:border ">Informações Adicionais</button>
                            </div>
                            <button className="mx-24 px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 hover:text-navFontColor hover:border ">Baixar Código QR</button>
                        </div>
                    </div>
                </div>

            <Footer/>
        </div>
    )
}

export default EditProfile 