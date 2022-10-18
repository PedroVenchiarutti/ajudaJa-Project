import React, {useState, useContext} from "react";
import Header from "../../Components/Header";
import Api from "../../Api/api";
import { AuthContext } from "../../contexts/auth";

const urlRegister = 'https://ajudajaapi.herokuapp.com/api/public/login'

const FormLogin = () => { 

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {authenticated, login} = useContext(AuthContext)
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e) => { 
        e.preventDefault()
        login(email, password)
        
    }

    return (
        <>
            <Header/>
            <div className="w-[100w] h-[100vh] pt-32 bg-white">
                <div className="m-w-[1020px]">
                    
                    <div className="box bg-[#fff] w-[500px] h-[270px] m-auto flex flex-col gap-5 rounded-lg shadow-md p-10">
                        <h1 className="text-lg font-bold">Faça seu login!</h1>
                        <input className="border-b-2" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                        <input className="border-b-2" placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <div>
                            <button onClick={handleSubmit} className="my-4 px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 border  hover:text-navFontColor hover:border ">Login</button>
                                                <button className="ml-2 border px-8 py-2 rounded-lg text-navFontColor font-bold  hover:bg-navBg hover:text-white "><a href="/singup">Cadastrar</a></button>
                        </div>
                        </div> 
                   
                </div>

            </div>
        </>

        
    )
}

export default FormLogin