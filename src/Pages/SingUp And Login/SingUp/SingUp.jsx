import React, {useState} from "react";
import axios from "axios";
import ReactInputDateMask from 'react-input-date-mask';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { storage } from "../../../Components/connectionFirebase";




import Header from "../../../Components/Header";







const urlSingUp = 'https://ajudajaapi.herokuapp.com/api/public/register'



const firebaseUpload = (e) => {
    e.preventDefault();
    console.log(e);
    const file = e.target[0]?.files[0];
    if (!file) return;
    const storageRef = ref(storage, `image/user/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
        "state_changed",
      (snapshot) => {
          console.log("snapshot", snapshot);
      },
      (error) => {}
      );
      uploadTask.then((res) => {
          getDownloadURL(storageRef)
          .then((url) => {
              let urlImage = url;
              setImgURL(urlImage);
              personalDataRecord({
                  ...personalName,
                  img: urlImage,
                });
                setProgress(true);
            })
            .catch((error) => {
                console.log(error);
                return <div>Error...</div>;
            });
        });
    };
    
    
    
    
    
    
    
    
    
    
    export default function SingUp() {
    const [firstName, setfirstName] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [sex, setSex] = useState('');
    const [dateNasc, setDateNasc] = useState(''); 
    const [sucess, setSucess] = useState(false);
 

    function getaPTesta (){
        axios.get('https://ajudajaapi.herokuapp.com/api/private/users').then( response => console.log(response))

    }



    
    
    const handleSubmit = (e) => {
        e.preventDefault()        
        axios.post(urlSingUp, 
            {
                username: userName,
                email: email,
                password: password,
                passwordConfirmation: confirmPassword,  
                birthday: dateNasc,
                emergencynumber: "11999999999",
                helth_insurance: "Nao",
                gender: sex,
                name: firstName,
                lastname:  lastName,
            }
            ).then((response) => {
                console.log(response)
                setSucess(true)
                getaPTesta()
            }).catch((err) => {
                console.log(err)
                getaPTesta()
            })
        }

        function getBack(){
            window.location.href = "/";
        }


        function next(){
            handleSubmit();
                    }
        

    
    

  return (
<div className="bg-bgSingUp h-screen">
    <Header />
    
     
        {sucess ? (
            <section className="pt-28 h-screen">

                <h1 className="pl-[490px]">CADASTRO REALIZADO COM SUCESSO!!</h1>
            </section>
            ) : (
                <div className="bg-bgSingUp pt-10 font-secondary flex">
        
        <div className="items-center ml-40 pr-28">

         
        <AccountCircleOutlinedIcon sx={{fontSize: 250  }} className="mt-28 ml-44 absolute"> 
        </AccountCircleOutlinedIcon>
        <input type="file" id="fileImg" className="ml-36 absolute placeholder-colorFontHeadline max-w-3xl w-80 mt-[362px] border-b bg-faqGrayBg p-1 "/>
        <input  type="text" value={firstName} onChange={(e) => setfirstName(e.target.value)} placeholder="Primeiro nome" className="ml-36 absolute placeholder-colorFontHeadline max-w-3xl w-80 mt-[408.3px] border-b bg-faqGrayBg p-1 "/>
            <input  type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Ultimo Nome" className="ml-36 placeholder-colorFontHeadline absolute mt-[463px]  max-w-3xl w-80 border-b bg-faqGrayBg p-1"/>
        </div>
        <form className="bg-faqGrayBg shadow-2xl flex-col flex items-center rounded-2xl pb-1 mt-[100px] pr-5 pl-96 pt-2" onSubmit={handleSubmit}>
        <h1 className="text-center text-3xl ">
            Cadastro
        </h1>
            <input  type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="placeholder-colorFontHeadline  bg-faqGrayBg border-b p-1 max-w-3xl w-96 mt-5"/>
            <input  type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Nome de usuario (Apenas para login)" className="placeholder-colorFontHeadline  max-w-3xl w-96 mt-5 border-b bg-faqGrayBg p-1"/>
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
      <button onClick={next}className='group bg-buttonColor hover:bg- md:p-1 border-[1px] border-hidden  shadow-2xl p-1 
       rounded-lg hover:animate-pulse duration-500hhhhhhh
       ml-16
       ' >
          <h1 className=' group-hover:animate-pulse text-faqGrayBg md:font-bold text-xl pl-10 pr-10'>
        Avançar
          </h1>
      </button> 
      <button onClick={firebaseUpload} className='group bg-buttonColor hover:bg- md:p-1 border-[1px] border-hidden  shadow-2xl p-1 
       rounded-lg hover:animate-pulse duration-500hhhhhhh
       ml-16
       ' >
          <h1 className=' group-hover:animate-pulse text-faqGrayBg md:font-bold text-xl pl-10 pr-10'>
        Avançar
          </h1>
      </button> 
      

       <p className="mt-4">
         Já tem conta no Ajuda.JÁ? {' '}
         <a href="/" className='text-buttonColor'>
             Clique aqui
         </a>
       </p>

            </div>
            
        </form>

         
    </div>
            ) }
</div>
  )
}