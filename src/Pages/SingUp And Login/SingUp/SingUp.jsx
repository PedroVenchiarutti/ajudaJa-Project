import React, {useState} from "react";
import axios from "axios";

import Header from "../../../Components/Header";

const urlSingUp = 'https://ajudajaapi.herokuapp.com/api/public/register'






export default function SingUp() {
    const [firstName, setfirstName] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [sex, setSex] = useState('');

    
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post(urlSingUp, 
            {
                username: userName,
                email: email,
                password: password,
                passwordConfirmation: confirmPassword,
                birthday: "1990-01-01",
                emergencynumber: "11999999999",
                helth_insurance: "Nao",
                gender: sex,
                name: firstName,
                lastname:  lastName,
            }
            ).then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(err)
            })
        }

        

    
    

  return (
<div>
    <Header /> 
    <div className="bg-bgSingUp pt-12 font-secondary ">

        <h1 className="text-center pt-20 text-3xl ">
            Cadastro
        </h1>
        <form className="flex-col flex items-center" onSubmit={handleSubmit}>
            <input  type="text" value={firstName} onChange={(e) => setfirstName(e.target.value)} placeholder="Primeiro nome" className="placeholder-faqGrayBg max-w-3xl w-96 mt-7 border bg-firstBoxBg p-1"/>
            <input  type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Ultimo Nome" className="placeholder-faqGrayBg  max-w-3xl w-96 mt-7 border bg-firstBoxBg p-1"/>
            <input  type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="placeholder-faqGrayBg  bg-firstBoxBg border p-1 max-w-3xl w-96 mt-7"/>
            <input  type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Data de nascimento" className="placeholder-faqGrayBg  max-w-3xl w-96 mt-7 border bg-firstBoxBg p-1"/>
            <div className="mt-7">

            <label htmlFor="" className="mr-[240px]">
                Sexo:
            </label>
            <input type="radio" name="sexo" id="M" value='M' onChange={(e) => setSex(e.target.value)} />
            <label htmlFor="" className="ml-1">M</label>

            <input type="radio" name="sexo" id='f' className="ml-10" value='f' onChange={(e) => setSex(e.target.value)}/>

            <label htmlFor="" className="ml-1">F</label>  
            </div>
            <input  type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Nome de usuario (Apenas para login)" className="placeholder-faqGrayBg  max-w-3xl w-96 mt-7 border bg-firstBoxBg p-1"/>
            <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" className="placeholder-faqGrayBg  bg-firstBoxBg border p-1 max-w-3xl w-96 mt-7"/>
            <input  type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirme sua Senha" className="placeholder-faqGrayBg  bg-firstBoxBg border p-1 max-w-3xl w-96 mt-7"/>
            
            
            <div className="mt-7 mb-8">
        <button className='group bg-buttonColor hover:bg-faqGrayBg md:p-1 border-[1px] border-hidden hover:border-solid shadow-2xl p-1 
       rounded-lg hover:animate-pulse duration-500hhhhhhh
       ml-16
    ' >
          <h1 className='group-hover:text-buttonColor group-hover:animate-pulse text-faqGrayBg md:font-bold text-xl pl-10 pr-10'>
        Avançar
          </h1>
      </button> 

      <p className="mt-1">
        Já tem conta no Ajuda.JÁ? {' '}
        <a href="#" className='text-buttonColor'>
            Clique aqui
        </a>
      </p>

      <p>
        sexo: {sex}
      </p>
            </div>
            
        </form>
    </div>    
</div>
  )
}