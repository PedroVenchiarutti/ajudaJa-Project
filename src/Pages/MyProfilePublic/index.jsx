import React, {useState, useEffect} from "react";
import EditProfilePNG from '/images/editprofile.png'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Fade from 'react-reveal/Fade';
import Api from "../../Api/api";


const MyProfile = () => {

    const [username, setUsername] = useState('Demerson Oliveira');
    const [email, setEmail] = useState('demersontorres520@gmail.com');
    const [cellphone, setCellphone] = useState('+55 (13) 9742-67835');
    const [birthday, setBirthday] = useState('1997-06-10');

   
    const [client, setClient] = useState({
        username: '',
        email: '',
        cellphone: '',
        birthday: '',
        avatar: '',
        helth_insurance: 'Não'
    })


    const id = localStorage.getItem('id')

    const config = {
        headers: {
          authorization: `${localStorage.getItem('token')}`,
        },
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

    return (
        <div className="w-full   bg-white">

                    {/* Content */}
                <div className="lg:w-[1080px] pt-32 grid m-auto">
                  <Fade bottom>
                      
                      <div className=" bg-[#fff] drop-shadow-lg  grid-cols-2 m-auto lg:px-16 py-5 rounded-lg pb-5 px-14">
                          <div className="flex justify-center items-center ">
                              <img className="w-32 h-32 rounded-[50%] border border-[#E3E6E3]" src={client.avatar} alt="" />
                              <div className=" flex flex-col gap-2">
                              </div>
                          
                          </div>
                          <div className="pt-4 formAndButtons flex flex-col items-center content-center justify-center  pb-10 ">
                              <div className="grid grid-cols-2 gap-5 text-center  ">

                                <div>
                                      <div><strong className="text-sm">Nome: <br /></strong> {client.name}</div>
                                  </div>

                                  <div>
                                     
                                      <div><strong className="text-sm">Tel: <br /></strong> {client.cellphone}</div>
                                  </div>

                                  <div>
                                    
                                      <div><strong className="text-sm">Data de Nascimento: <br /></strong> {client.birthday}</div>
                                      
                                  </div>

                                  <div>
                                   

                                      <div><strong className="text-sm">Tel Emergência: <br /></strong> {client.cellphone}</div>
                                  </div>

                              <div>
                                  <h3 className="font-bold text-sm text-hoverFontColor">Doenças e Alergias:</h3>
                                     <ul className="text-left ml-2 pt-1 text-sm">
                                        <li> <ArrowRightIcon/> Asma</li>
                                        <li> <ArrowRightIcon/>  Bronquite</li>
                                        <li> <ArrowRightIcon/>  Rinite</li>
                                     </ul>
                                  
                              </div>
                      
                      
                              </div>

                        <button className="my-4 px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border  hover:text-navFontColor hover:border "><a href={`tel:${client.cellphone}`}>Número de Emergência</a></button>
                        <button className="px-6 py-2 rounded-lg text-white font-bold  bg-[#E62822] hover:bg-opacity-0 border  hover:text-[#E62822] hover:border "><a href="tel:192">SAMU</a></button>
                           
                          </div>
                      </div>
                  </Fade>
                </div>

         
        </div>
    )
}

export default MyProfile 