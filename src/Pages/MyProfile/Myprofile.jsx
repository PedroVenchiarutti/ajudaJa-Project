import React, {useState, useEffect} from "react";
import QRCode from 'qrcode'
import Fade from 'react-reveal/Fade';
import Api from "../../Api/api";
import { notify } from "../../Components/alerts";
import Input from '../../Components/TextField'
import { Link } from "react-router-dom";

const MyProfile = () => { 

  const [client, setClient] = useState({
      username: '',
      email: '',
      cellphone: '',
      birthday: '',
      avatar: '',
      helth_insurance: 'Não'
  })
  
  const [url, setUrl] = useState('https://ajudajaapi.herokuapp.com/docs/#/')
  const [qrcode, setQrCode] = useState('')


  const id = localStorage.getItem('id')

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


      useEffect((e) => {
          Api.get(`/private/client/${id}`, config).then((response) => {
              setClient({
                  username: response.data.user.username,
                  email: response.data.user.email,
                  cellphone: response.data.user_informations.emergencynumber,
                  birthday: response.data.user_informations.birthday,
                  avatar: response.data.user_informations.avatar,
                  helth_insurance: response.data.user_informations.helth_insurance,
                  name: response.data.user_informations.name, 
                  lastname: response.data.user_informations.lastname, 
                  
              
              })
      
          }).then(() => {
      })
      }, [])

      useEffect(()=>{
        GenerateQRCode()
      },[])

      return (
          <div className="w-full  bg-white h-full "> 
      
            <div className="lg:w-[1080px]  pt-32  pb-32 grid m-auto"> 
            
            
                      {/* Content */}
                    <Fade bottom>
                        
                        <div className=" bg-[#fff] drop-shadow-lg  grid-cols-2 m-auto lg:px-10 py-5 rounded-lg pb-10 px-4">
                            <div className="flex justify-center items-center ">
                                <img className="w-32 h-32 rounded-[50%] border border-[#E3E6E3] object-cover mr-7" src={client.avatar} alt="" />
                              
      
                                <img src={qrcode} alt="" />
                            </div>
                            <div className="pt-4 formAndButtons flex flex-col lg:w-[500px] content-center gap-4 px-4 ">

                                        <Input info={client.name} id="outlined-read-only-input"  label="Nome" readOnly={true}/>
                                        <Input info={client.lastname} id="read-only-input" label="E-mail" readOnly={true}/>
                                       
                                        <Input info={client.email} id="read-only-input" label="Email" readOnly={true}/>
                                        <Input info={client.cellphone} id="read-only-input" label="Telefone de Emergência" readOnly={true}/>
                                        <Input info={client.birthday} id="read-only-input" label="Data de Nascimento" readOnly={true}/>
                                
                                  
                                
                        
                        
                             
                        
                                <div className="buttons py-6 pt-14 flex gap-4 justify-center">
                        
                                    <button className="border px-8 py-2 rounded-lg text-navFontColor font-bold  hover:bg-navBg hover:text-white "><Link to="/editprofile">Editar</Link></button>


                             
                                </div>
                                <button className="mx-24 px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border hover:text-navFontColor hover:border "><a href={qrcode} download="qrcode.png">Baixar Código QR</a></button>
                            </div>
                        </div>
                    </Fade>
            
            </div>

          </div>
      )
} 

export default MyProfile