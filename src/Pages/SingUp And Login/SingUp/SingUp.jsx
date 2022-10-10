import React, {useState} from "react";
import axios from "axios";

import Header from "../../../Components/Header";

const urlSingUp = 'https://ajudajaapi.herokuapp.com/api/public/register'





export default function SingUp() {
    const [name, setName] = useState('');
    const [count, setCount] = useState(0);
  return (
<div>
    <Header /> 
    <div className="bg-firstBoxBg h-screen pt-24">
        <div className="flex-col flex items-center">
            <input type="text" value={name} onChange={()=> setName()} placeholder="email" className="max-w-3xl w-96 mt-20"/>
            <input type="text" placeholder="senha" className="max-w-3xl w-96 mt-10"/>
            <button className="mt-5" onClick={()=>setCount(count +1)}>
                Proximo
            </button>
            <p>
                voce escreveu {name}
            </p>
        </div>
    </div>    
</div>
  )
}