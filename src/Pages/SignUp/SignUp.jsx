import React, {
    useState,
    useRef, 
    useEffect
} from "react";
import axios from "axios";
import {storage} from '../../Components/connectionFirebase'
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
import Header from "../../Components/Header/Header";
import {urlSignUp} from "../../Components/Axios/AxiosRoutes";
import {IMaskInput} from 'react-imask';
import {ToastContainer} from 'react-toastify';
import {notify, noImage} from '../../Components/alerts'


    
    export default function SignUp() {
    const [firstName, setfirstName] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [sex, setSex] = useState('');
    const [dateNasc, setDateNasc] = useState(''); 
    const [sucess, setSucess] = useState(false);
    const [emergencyNumber, setEmergencynumber] = useState('');
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
            console.log('sajin')

            

        } else{


            if(imageUpload == null) return;
            const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
            uploadBytes(imageRef, imageUpload).then((snapshot) => {
                console.log('Uploaded a blob or file!');
                getDownloadURL(imageRef)
                .then((url) => {
                    setImgUrl(url);
                    console.log(url)
                    handleSubmit(url)   
                })
            })
        }
    }
        
    
    const handleSubmit = (url) => {
        
        axios.post(urlSignUp,  {
            username: userName,
            email: email,
            password: password,
            passwordConfirmation: confirmPassword,  
            birthday: dateNasc,
            emergencynumber: emergencyNumber.replace('(', '').replace(')', '').replace('-', '').replace(' ', ''),
            helth_insurance: "Nao",
            gender: sex,
            name: firstName,
            lastname:  lastName,
            avatar: url,
        }
            ).then((response) => {
                console.log(response)
                setSucess(true)
            }).catch((err) => {
                console.log(err)
            })
        }


        function getBack(){
            window.location.href = "/";
        }



        function next(){
            uploadImage();

        }
        
    
    

  return (
<div className="bg-bgSignUp h-screen">
    <Header />
    
     
        {sucess ? (
            <section className="pt-28 h-screen">

                <h1 className="pl-[490px]">CADASTRO REALIZADO COM SUCESSO!!</h1>
            </section>
            ) : (
                <div className="bg-bgSignUp pt-10 font-secondary flex">
        
        <div className="items-center ml-40 pr-28">

         {preview ? (<img className='w-52 h-52  rounded-[50%] cursor-pointer mt-36 ml-44 border absolute' src={preview} style={{objectFit: 'cover'}} onClick={() =>{
            setPreview(null)
         }} alt="" /> ):(
        <button className="w-52 h-52  rounded-[50%] cursor-pointer mt-36 ml-44 border absolute" onClick={(e) => {
            e.preventDefault();
            fileInputRef.current.click();
        }}>Foto de perfil</button>)
    }
        
        <IMaskInput mask='(00) 00000-0000' type="text" value={emergencyNumber} onChange={(e) => setEmergencynumber(e.target.value)} placeholder="Número de emêrgencia" className="ml-36 absolute placeholder-colorFontHeadline max-w-3xl w-80 mt-[362px] border-b bg-faqGrayBg p-1 "/>
        <input type="file" ref={fileInputRef} accept='image/*' id="fileImg" onChange={(e) => setImageUpload(e.target.files[0])} className="ml-36 absolute hidden placeholder-colorFontHeadline max-w-3xl w-80 mt-[362px] border-b bg-faqGrayBg p-1 "/>
        <input type="text" value={firstName} onChange={(e) => setfirstName(e.target.value)} placeholder="Primeiro nome" className="ml-36 absolute placeholder-colorFontHeadline max-w-3xl w-80 mt-[408.3px] border-b bg-faqGrayBg p-1 "/>
            <input  type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Ultimo Nome" className="ml-36 placeholder-colorFontHeadline absolute mt-[463px]  max-w-3xl w-80 border-b bg-faqGrayBg p-1"/>
        </div>
        <form className="bg-faqGrayBg shadow-2xl flex-col flex items-center rounded-2xl pb-1 mt-[100px] pr-5 pl-96 pt-2" onSubmit={(e) => e.preventDefault()}>
        <h1 className="text-center text-3xl ">
            
            Cadastro
        </h1>
            <input  type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="placeholder-colorFontHeadline  bg-faqGrayBg border-b p-1 max-w-3xl w-96 mt-5"/>
            <input  type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Nome de usuario" className="placeholder-colorFontHeadline  max-w-3xl w-96 mt-5 border-b bg-faqGrayBg p-1"/>
            {/* <ReactInputDateMask mask='mm-dd-yyyy' value={dateNasc} required showMaskOnFocus='true'  showMaskOnHover='true' onChange={(e) => setDateNasc(e.target.value)} className='placeholder-colorFontHeadline  max-w-3xl w-96 mt-5 border-b bg-faqGrayBg p-1' /> */}
            <input  type="text" value={dateNasc} onChange={(e) => setDateNasc(e.target.value)} placeholder="Data de nascimento" className="placeholder-colorFontHeadline  max-w-3xl w-96 mt-5 border-b bg-faqGrayBg p-1"/>
            <div className="mt-4">

        

            <label htmlFor="" className="mr-[240px]">
                Sexo:
            </label>
            <input type="radio" name="sexo" id="M" value='M' onChange={(e) => setSex(e.target.value)} />
            <label htmlFor="" className="ml-1">M</label>

            <input type="radio" name="sexo" id='F' className="ml-10" value='F' onChange={(e) => setSex(e.target.value)}/>

            <label htmlFor="" className="ml-1">F</label>  
            </div>
            <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" className="placeholder-colorFontHeadline  bg-faqGrayBg border-b p-1 max-w-3xl w-96 mt-3"/>
            <input  type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirme sua Senha" className="placeholder-colorFontHeadline  bg-faqGrayBg border-b p-1 max-w-3xl w-96 mt-5"/>
            
            
            <div className="mt-5 mb-1 text-center">
            <button onClick={getBack}className='group bg-buttonColor hover:bg- md:p-1 border-[1px] border-hidden shadow-2xl p-1

       rounded-lg hover:animate-pulse duration-500hhhhhhh
       ' >
          <h1 className=' group-hover:animate-pulse text-faqGrayBg md:font-bold text-xl pl-10 pr-10'>
        Voltar
          </h1>
      </button> 
      <button onClick={next} className='group bg-buttonColor hover:bg- md:p-1 border-[1px] border-hidden  shadow-2xl p-1 
       rounded-lg hover:animate-pulse duration-500hhhhhhh
       ml-16
       ' >
          <h1 className=' group-hover:animate-pulse text-faqGrayBg md:font-bold text-xl pl-10 pr-10'>
        Avançar
          </h1>
      </button>

      <ToastContainer limit={3} style={{marginTop:'90px'}}/>



       <p className="mt-4">
         Já tem conta no Ajuda.JÁ? {' '}
         <a href="/login" className='text-buttonColor'>
             Clique aqui
         </a>
       </p>


            </div>
            
        </form>

         
    </div>
    )}
</div>
  )
}