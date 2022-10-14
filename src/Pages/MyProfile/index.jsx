import React, {useState} from "react";
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import EditProfilePNG from '../../../public/images/editprofile.png'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Fade from 'react-reveal/Fade';


const MyProfile = () => {

    const [username, setUsername] = useState('Demerson Oliveira');
    const [email, setEmail] = useState('demersontorres520@gmail.com');
    const [cellphone, setCellphone] = useState('+55 (13) 9742-67835');
    const [birthday, setBirthday] = useState('1997-06-10');

    const [state, setState ] = useState([])

    const handleAdd = e => { 
        e.preventDefault()
        const abc = [...state, []]
        setState(abc)
    }

    const handleChange = (e, i)=> { 
        let inputData = [...state]
        inputData[i] = e.target.value
        setState(inputData)
    }

    const handleDelete = (e, i) => { 
        e.preventDefault()
        let deleteVal = [...state]
        deleteVal.splice(i, 1)
        setState(deleteVal)
    }


    return (
        <div className="w-full   bg-white">
            <Header/>

                    {/* Content */}
                <div className="lg:w-[1080px] pt-32 grid m-auto">
                  <Fade bottom>
                      
                      <div className=" bg-[#fff] drop-shadow-lg  grid-cols-2 m-auto lg:px-10 py-5 rounded-lg pb-10 px-4">
                          <div className="flex justify-center items-center ">
                              <img className="w-[200px]" src={EditProfilePNG} alt="" />
                              <div className=" flex flex-col gap-2">
                                  <button className="border mr-5 px-6 py-2 rounded-lg text-navFontColor font-bold  hover:bg-navBg hover:text-white ">Gerar código QR</button>
                                  <button className="px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 hover:text-navFontColor hover:border ">Alterar foto</button>
                              </div>
                          </div>
                          <div className="pt-4 formAndButtons flex flex-col lg:w-[550px] content-center ">
                              <form className="flex flex-col gap-5 items-center ">
                                  <input className=" border-b-2 w-[400px] text-xl " value={username} type="text" readOnly/>
                                  <input className="border-b-2 w-[400px] text-xl " value={email}  type="email" readOnly/>
                                  <input className="border-b-2 w-[400px] text-xl " value={cellphone}  type="tel" readOnly/>
                                  <div className="flex gap-2 mr-16">
                                      <label className="text-xl " htmlFor="">
                                         Data de Nascimento
                                      </label>
                                      <input className="border-b-2 text-xl " type="date" value={birthday} readOnly />
                                  </div>
                                      <div className="self-start pl-[78px] font-bold text-xl"><label className="pr-6" > Contatos de emergência </label>
                                      <button onClick={handleAdd}>
                      
                                          <AddCircleOutlineIcon/>
                                      </button>
                                      </div>
                                  {state.map((data, i) => {
                                      return (
                                         <div key={i} className="flex gap-2">
                      
                                             <input className=" border-b-2  text-xl "  placeholder="Número de Emergência" onChange={e => handleChange(e, i)} type="tel" />
                                             <button onClick={e => handleDelete(e,i)}><DeleteForeverIcon/></button>
                                         </div>
                                      )
                                  })}
                      
                      
                              </form>
                      
                              <div className="buttons py-6 pt-14 flex gap-4 justify-center">
                      
                                  <button className="border px-8 py-2 rounded-lg text-navFontColor font-bold  hover:bg-navBg hover:text-white ">Editar</button>
                              <button className="px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 hover:text-navFontColor hover:border ">Informações Adicionais</button>
                              </div>
                              <button className="mx-24 px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 hover:text-navFontColor hover:border ">Baixar Código QR</button>
                          </div>
                      </div>
                  </Fade>
                </div>

            <Footer/>
        </div>
    )
}

export default MyProfile 