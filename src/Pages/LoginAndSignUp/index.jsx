import React, {useEffect, useState} from "react";
import Login from '../Login'
import NewSignUp from "../newSignUp";
import Fade from 'react-reveal/Fade';

const LoginAndSign = () => {
    const [state, setState] = useState(true)    
    const [page, setPage] = useState('')

    useEffect(()=> {
        if(state) { 
            return setPage(<Login goToRegister={e=> setState(false)} />)
        } else {
            return setPage(<NewSignUp backToLogin={e=> setState(true)}/>)
        }
    },[state])


    return(
        <>
            <Fade>{page}</Fade>
        </> 
    )
}

export default LoginAndSign