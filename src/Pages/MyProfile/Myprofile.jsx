import React, {useState, useEffect} from "react";

import Header from '../../Components/Header/'
import Footer from '../../Components/Footer/'
import EditProfilePNG from '/images/editprofile.png'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import QRCode from 'qrcode'
import Fade from 'react-reveal/Fade';
import Api from "../../Api/api";
import { notify } from "../../Components/alerts";



const MyProfile = () => { 

  const [client, setClient] = useState({
      username: '',
      email: '',
      cellphone: '',
      birthday: '',
      avatar: '',
  })
  
  const [url, setUrl] = useState('https://ajudajaapi.herokuapp.com/docs/#/')
  const [qrcode, setQrCode] = useState('')
  const [state, setState ] = useState([])


  const id = localStorage.getItem('id')


  const handleAdd = e => { 
      e.preventDefault()
      const abc = [...state, []]
      setState(abc)
  }

  const config = {
    headers: {
      authorization: `${localStorage.getItem('token')}`,
    },
  };

  const GenerateQRCode = (_) => {
    QRCode.toDataURL(url, (err, url) => {
      if (err) return console.error(err);
      setQrCode(url);
    });
  };


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

      useEffect((e) => {
          Api.get(`/private/client/${id}`, config).then((response) => {
              setClient({
                  username: response.data.user.username,
                  email: response.data.user.email,
                  cellphone: response.data.user_informations.emergencynumber,
                  birthday: response.data.user_informations.birthday,
                  avatar: response.data.user_informations.avatar
              
              })
      
          }).then(() => {
      })
      }, [])

      return (
          <div className="w-full   bg-white"> 
          <Header/>
      
            <div className="lg:w-[1080px] pt-32 grid m-auto"> 
            
            
                      {/* Content */}
                    <Fade bottom>
                        
                        <div className=" bg-[#fff] drop-shadow-lg  grid-cols-2 m-auto lg:px-10 py-5 rounded-lg pb-10 px-4">
                            <div className="flex justify-center items-center ">
                                <img className="w-52 h-52 object-cover mr-7" src={client.avatar} alt="" />
                                <div className=" flex flex-col gap-2">
                                    <button onClick={GenerateQRCode} className="border mr-5 px-6 py-2 rounded-lg text-navFontColor font-bold  hover:bg-navBg hover:text-white ">Gerar código QR</button>
                                  
                                </div>
      
                                <img src={qrcode} alt="" />
                            </div>
                            <div className="pt-4 formAndButtons flex flex-col lg:w-[550px] content-center ">
                                <form className="flex flex-col gap-5 items-center ">
                                    <input className="border-b-2 w-[400px] text-xl " value={client.username} type="text" readOnly/>
                                    <input className="border-b-2 w-[400px] text-xl " value={client.email}  type="email" readOnly/>
                                    <input className="border-b-2 w-[400px] text-xl " value={client.cellphone}  type="tel" readOnly/>
                                    <div className="flex gap-2">
                                        <label className="text-xl mr-3" htmlFor="">
                                           Data de Nascimento
                                        </label>
                                        <input className="border-b-2 text-xl w-[200px]"  value={client.birthday}/>
                                    </div>
                                        <div className="self-start pl-1 lg:pl-[78px] font-bold text-xl"><label className="pr-6" > Contatos de emergência </label>
                                        <button onClick={handleAdd}>
                        
                                            <AddCircleOutlineIcon/>
                                        </button>
                                        </div>
                                    {state.map((data, i) => {
                                        return (
                                           <div key={i} className="flex gap-2">
                        
                                               <input className=" border-b-2  text-xl "  placeholder="Número de Emergência"  type="tel" readOnly />
                                               <button onClick={e => handleDelete(e,i)}><DeleteForeverIcon/></button>
                                           </div>
                                        )
                                    })}
                        
                        
                                </form>
                        
                                <div className="buttons py-6 pt-14 flex gap-4 justify-center">
                        
                                    <button className="border px-8 py-2 rounded-lg text-navFontColor font-bold  hover:bg-navBg hover:text-white "><a href="/editprofile">Editar</a></button>
                                <button className="px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 hover:text-navFontColor hover:border ">Informações Adicionais</button>
                                </div>
                                <button className="mx-24 px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border hover:text-navFontColor hover:border "><a href={qrcode} download="qrcode.png">Baixar Código QR</a></button>
                            </div>
                        </div>
                    </Fade>
            
            </div>
          
            <Footer/>
          </div>
      )
} 

export default MyProfile
