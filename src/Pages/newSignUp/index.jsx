import React, {useState, useContext, useEffect, useRef} from "react";
import logo from "/images/logo-v2.png"
import Fade from 'react-reveal/Fade';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Input from "../../Components/TextField";
import InputDate from "../../Components/InputDate";
import RowRadioButtonsGroup from "../../Components/Radio";
import {storage} from '../../Api/api'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
import {noImage} from '../../Components/alerts'
import Api from "../../Api/api";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';



const newSignUp = ({backToLogin}) => { 

    const [date, setDate] = useState(null)
    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        password: '',
        confirmPassword: '',
        username: '', 
        email: '',
        gender: 'F',
        emergencyNumber: ''

    })
   
    const [success, setSuccess] = useState(false)
    const [imageUpload, setImageUpload] = useState(null);
    const [preview, setPreview] = useState(null);   
    const [imgUrl, setImgUrl] = useState('');
    const fileInputRef = useRef(null);

    

    useEffect(() => {
        if (imageUpload){
            const reader = new FileReader();
            reader.onload = () => {
                setPreview(reader.result);
            }
            reader.readAsDataURL(imageUpload)
        } else {}}, 
        [imageUpload]);

 
    const uploadImage = () => {
        if (preview == null) { 

            noImage();

        } else{

            if(imageUpload == null) return;
            const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
            uploadBytes(imageRef, imageUpload).then((snapshot) => {
                console.log('Uploaded a blob or file!');
                getDownloadURL(imageRef)
                .then((url) => {
                    setImgUrl(url);
                    handleSubmit(url)   
                })
            })
        }
    }
        
    const handleChange = prop => e => { 
        e.preventDefault()
        setState({...state, [prop]: e.target.value})
    }

    const handleSubmit = (url) => {
        Api.post('/public/register', { 
            username: state.username,
            email: state.email,
            password: state.password,
            passwordConfirmation: state.confirmPassword,  
            birthday: date,
            emergencynumber: state.emergencyNumber,
            helth_insurance: "Não informado no momento",
            gender: state.gender,
            name: state.firstname,
            lastname:  state.lastname,
            avatar: url,

        }).then(resp => { 
            console.log(resp)
        }).catch(err => { 
            console.log(err)
        })

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
        
            <div className="w-[100w] h-[100vh] bg-gradient-to-t from-navFontColor to-firstSessionFontColor  md:from-white md:to-white">
                <div className="grid grid-cols-1 md:grid-cols-2 h-[100vh]">

                    

                {success ? null : <Fade left>
                        <div className="box bg-[#fff] w-[370px] lg:w-[500px] md:w-[370px] md:mx-auto md:h-[470px] m-auto flex flex-col gap-5 rounded-lg shadow-md p-10">
                            <div className="flex justify-between items-center">
                                <h1 className="text-lg font-bold">Cadastre-se agora!</h1>
                                <button onClick={backToLogin}><img className="w-[120px]" src={logo} alt="" /></button>
                            </div>

                            <Input label="Nome de usuário" type='text' info={state.username} handleChange={handleChange('username')} />

                            <Input label="Insira seu email" type='email' info={state.email} handleChange={handleChange('email')} />
                            
                            
                            <Input label="Insira sua senha"  type='password' info={state.password} handleChange={handleChange('password')} />
                            <Input label="Repita sua senha"  type='password' info={state.confirmPassword} handleChange={handleChange('confirmPassword')}  />
                          

                          
                            <div className="pt-10 flex justify-between  content-center ">
                           

                            <a onClick={backToLogin} className="hover:underline hover:cursor-pointer text-sm" >Usuário já cadastrado? <strong>Volte para o login!</strong></a>
                                
                            <a onClick={e => { 
                                if(state.username === '' || state.password === '' || state.confirmPassword === '' || state.email === '') return setSuccess(false) 
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
                        <Input type="text" info={state.firstname} handleChange={handleChange('firstname')} label="Seu nome"/>
                        <Input type="text" info={state.lastname} handleChange={handleChange('lastname')} label="Seu sobrenome"/>

                     

                        <InputDate date={date} handleChange={(newValue) => {
                            newValue && setDate(`${newValue['$y']}-${newValue['$M'] + 1}-${newValue['$D']}` );
                            }}/>

                        
                     
                     


                        <Input type="number" placeholder='00 00000 0000' info={state.emergencyNumber} handleChange={handleChange('emergencyNumber')} label="Telefone de emergência"/>
                        

                        <RowRadioButtonsGroup  handleChange={handleChange('gender')}/>
                      
                        <div className="">
                        
                            <button onClick={next}  className="my-4 mt-[-10px] mb-5 w-[100%] px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border  hover:text-navFontColor hover:border ">Finalizar Cadastro</button>
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