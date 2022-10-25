import React, {useState, useContext, useEffect, useRef} from "react";
import logo from "/images/logo-v2.png"
import Fade from 'react-reveal/Fade';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Input from "../../Components/TextField";
import InputDate from "../../Components/InputDate/";
import RowRadioButtonsGroup from "../../Components/Radio";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {v4} from 'uuid'
import {testeAlert, noImage} from '../../Components/alerts'
import Api from "../../Api/api";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import schemaValidation, {schemaValidation2} from "../../Validations/schemaUserValidation";
import {storage} from '../../Api/api'



const newSignUp = ({backToLogin}) => { 

    const Inputs = document.querySelectorAll('input')
    const [date, setDate] = useState()
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        username: '', 
        email: '',
        gender: '',
        emergencyNumber: ''

    })
   
    const [success, setSuccess] = useState(false)
    const [imageUpload, setImageUpload] = useState(null);
    const [preview, setPreview] = useState(null);   
    const [imgUrl, setImgUrl] = useState('');
    const [error, setError] = useState('');
    const fileInputRef = useRef(null);

    
    const data = {
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        date: date,
        username: user.username,
        email: user.email,
        emergencyNumber: user.emergencyNumber,
        gender: user.gender,
      };

    const data2 = {
        username: user.username,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
    }

      function classError() {
        document.querySelector('input').classList.add('error')
      }

    useEffect(() => {
        teste(false)
    }, [])
    useEffect(() => {
        if (imageUpload){
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(imageUpload)
        } else {}}, 
        [imageUpload]);


        function validate2(){
            const validation2 = async () => {
                if(user.password !== user.confirmPassword){
                    console.log('As senhas não coincidem')
                }
                let schema = schemaValidation2.validate(data2)
                try {
                    await schema
                    teste(true)
                } catch (error) {
                    classError()
                    setError({
                        type: 'error',
                        message: error.message,
                    });
                    teste()
                }
            
        }
        validation2()
    }

        function validate(){
            const validation = async () => {
                let schema = schemaValidation.validate(data);
          
                try {
                  await schema;
                  console.log('validou');
                  uploadImage();
  
              } catch (error) {
                  classError()
                  setError({
                      type: 'error',
                      message: error.message,
                  });
                  teste()
              }
          };
          validation();
        }

    
    
    console.log(user.firstName)
          console.log(error);
 
          const uploadImage = () => {
            if (preview == null) {
              noImage();
              console.log('sajin');
            } else {
              if (imageUpload == null) return;
              const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
              uploadBytes(imageRef, imageUpload).then((snapshot) => {
                console.log('Uploaded a blob or file!');
                getDownloadURL(imageRef).then((url) => {
                  setImgUrl(url);
                  console.log(url);
                  handleSubmit(url);
                });
              });
            }
          };
        
    const handleChange = prop => e => { 
        e.preventDefault()
        setUser({...user, [prop]: e.target.value})
    }

    const handleSubmit = (url) => {
        Api.post('/public/register', { 
            name: user.firstName,
            lastname:  user.lastName,
            password: user.password,
            passwordConfirmation: user.confirmPassword,  
            username: user.username,
            email: user.email,
            birthday: date,
            emergencynumber: user.emergencyNumber,
            helth_insurance: "Nao",
            gender: user.gender,
            avatar: url,

        }).then(resp => { 
            console.log(resp)
        }).catch(err => { 
            console.log(err)
        })

    }

    function teste() {
        if (error.type == 'error') {
            return true

        } else {
            false
        }
    } 

    console.log('Olá')

    function next(){
        uploadImage();

    }
  

    const keyHandler = e => { 
        if(e.key === 'Enter') { 
            return handleSubmit(e) }
       
        }

    return (
        <>
        
            <div className="w-[100w] h-[100%] bg-gradient-to-t from-navFontColor to-firstSessionFontColor  md:from-white md:to-white">
                <div className="grid grid-cols-1  md:p-0 md:grid-cols-2 h-[100vh]">

                    

                {success ? null : <Fade left>
                        <div className="box bg-[#fff] w-[370px] lg:w-[500px] md:w-[370px] md:mx-auto md:h-[470px] h-[500px] m-auto flex flex-col gap-5 rounded-lg shadow-md p-10">
                            <div className="flex justify-between items-center">
                                <h1 className="text-md md:text-lg font-bold">Cadastre-se agora!</h1>
                                <button onClick={backToLogin}><img className="w-[80px] md:w-[120px]" src={logo} alt="" /></button>
                            </div>

                            <Input id='myh1' label="Nome de usuário" err={teste()} txt={teste() ? 'O nome de usuario é obrigatório' : ''}  type='text' info={user.username} handleChange={handleChange('username')} />

                            <Input label="Insira seu email" err={teste()} txt={teste() ? 'Email Invalido' : ''} type='email' info={user.email} handleChange={handleChange('email')} />
                            
                            
                            <Input label="Insira sua senha" err={teste()} txt={teste() ? 'Insira uma senha' : ''}  type='password' info={user.password} handleChange={handleChange('password')} />
                            <Input label="Repita sua senha" err={teste()} txt={teste() ? 'As senhas não coincidem' : ''}  type='password' info={user.confirmPassword} handleChange={handleChange('confirmPassword')}  />
                          

                          
                            <div className="pt-10 flex justify-between md:flex-row flex-col gap-5  content-center ">
                           

                            <a onClick={backToLogin} className="hover:underline hover:cursor-pointer text-sm" >Usuário já cadastrado? <strong>Volte para o login!</strong></a>
                                
                            <a onClick={e => { 
                                if(user.username === '' || user.password === '' || user.confirmPassword === '' || user.email === '' || user.password !== user.confirmPassword) validate2() 
                                else return setSuccess(true)
                            }} className="hover:cursor-pointer text-sm flex items-center hover:text-navFontColor" >Próximo <ArrowRightIcon/></a>
                            </div>
                        
                            </div>
                    </Fade>
                }
                    
                    
                   {
                    success ?    
                    <Fade left>
                     <div className="box bg-[#fff] w-[370px] lg:w-[500px] md:w-[370px] md:mx-auto md:h-[610px] m-auto flex flex-col gap-5 rounded-lg shadow-md p-10">
                        <div className="flex justify-between items-center">
                            
                                    {preview ? (<img className='w-24 h-24  rounded-[50%] cursor-pointer border border-[#E3E6E3] ' src={preview} style={{objectFit: 'cover'}} onClick={() =>{
                    fileInputRef.current.click();
                }} alt="" /> ):(
                <button className="w-24 h-24  rounded-[50%] cursor-pointer border border-[#E3E6E3] " onClick={(e) => {
                    e.preventDefault();
                    fileInputRef.current.click();
                }}><span className="text-sm">Foto de <br /> perfil</span></button>)
                           

                     }
                      <img className="w-[120px]" src={logo} alt="" />
                        </div>
                        <input type="file" ref={fileInputRef} accept='image/*' id="fileImg" onChange={(e) => setImageUpload(e.target.files[0])} className="ml-36 absolute hidden placeholder-colorFontParagraph max-w-3xl w-80 mt-[362px] border-b bg-faqGrayBg p-1 "/>
                        <Input type="text" info={user.firstName} handleChange={handleChange('firstName')} label="Seu nome"/>
                        <Input type="text" info={user.lastName} handleChange={handleChange('lastName')} label="Seu sobrenome"/>

                     

                        <InputDate date={date} handleChange={(newValue) => {
                            newValue && setDate(`${newValue['$y']}-${newValue['$M'] + 1}-${newValue['$D']}` );
                            }}/>

                        
                     
                     


                        <Input type="number" placeholder='00 00000 0000' info={user.emergencyNumber} handleChange={handleChange('emergencyNumber')} label="Telefone de emergência"/>
                        

                        <RowRadioButtonsGroup  handleChange={handleChange('gender')}/>
                      
                        <div className="">
                        
                            <button onClick={validate}  className="my-4 mt-[-10px] mb-5 w-[100%] px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border  hover:text-navFontColor hover:border ">Finalizar Cadastro</button>
                            <a onClick={e => setSuccess(false)} className=" flex items-center hover:cursor-pointer text-sm hover:text-navFontColor" > <ArrowLeftIcon />Voltar </a>
                          
                           
                        </div>
                    
                        </div>
                </Fade> 
                : null
                   } 

                   

            <Fade right>
                <div className="hidden md:block bg-gradient-to-t from-navFontColor to-firstSessionFontColor drop-shadow-lg pl-10 pt-20">
                
                                        </div>
            </Fade>
                 
                </div>

            </div>
        </>

        
    )
}

export default newSignUp