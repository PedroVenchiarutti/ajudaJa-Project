import React, {useState} from "react";
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import EditProfilePNG from '../../../public/images/editprofile.png'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Fade from 'react-reveal/Fade';


const MyProfile = () => {

    const [username, setUsername] = useState('Demerson Oliveira');
    const [email, setEmail] = useState('demersontorres520@gmail.com');
    const [cellphone, setCellphone] = useState('+55 (13) 9742-67835');
    const [birthday, setBirthday] = useState('1997-06-10');

    return (
        <div className="w-full   bg-white">
            <Header/>

                    {/* Content */}
                <div className="lg:w-[1080px] pt-32 grid m-auto">
                  <Fade bottom>
                      
                      <div className=" bg-[#fff] drop-shadow-lg  grid-cols-2 m-auto lg:px-16 py-5 rounded-lg pb-5 px-14">
                          <div className="flex justify-center items-center ">
                              <img className="w-[200px]" src={EditProfilePNG} alt="" />
                              <div className=" flex flex-col gap-2">
                              </div>
                          
                          </div>
                          <div className="pt-4 formAndButtons flex flex-col items-center content-center justify-center  pb-10 ">
                              <div className="grid grid-cols-2 gap-5 text-center  ">

                                <div>
                                      <div><strong className="text-sm">Nome: <br /></strong> {username}</div>
                                  </div>

                                  <div>
                                     
                                      <div><strong className="text-sm">Tel: <br /></strong> {cellphone}</div>
                                  </div>

                                  <div>
                                    
                                      <div><strong className="text-sm">Data de Nascimento: <br /></strong> {birthday}</div>
                                      
                                  </div>

                                  <div>
                                   

                                      <div><strong className="text-sm">Tel Emergência: <br /></strong> {cellphone}</div>
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

                        <button className="my-4 px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border  hover:text-navFontColor hover:border "><a href={`tel:${cellphone}`}>Número de Emergência</a></button>
                        <button className="px-6 py-2 rounded-lg text-white font-bold  bg-[#E62822] hover:bg-opacity-0 border  hover:text-[#E62822] hover:border "><a href="tel:192">SAMU</a></button>
                           
                          </div>
                      </div>
                  </Fade>
                </div>

            <Footer/>
        </div>
    )
}

export default MyProfile 