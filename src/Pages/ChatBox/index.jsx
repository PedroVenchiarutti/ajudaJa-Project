import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const Chatbox = props => { 

    const [textMessage, setTextMessage] = useState('')
    const [closeWindow, setCloseWindow] = useState(false)
    const [myArray, updateMyArray] = useState([])

    const onClick = () => { 
        updateMyArray(arr => [...arr, `${textMessage}`])
        setTextMessage('')
    }


    return(
       <div className={closeWindow ?'hidden' : "fixed bottom-0 right-4 object-right-top w-[300px] h-[400px] bg-secondBoxBg m-0 p-0 rounded-t-lg drop-shadow-lg" }>

        <div className="flex justify-between p-2 bg-navFontColor text-white rounded-t-lg">
            <h3 className="font-bold">ChatBot - Online</h3>
        <button onClick={_ => setCloseWindow(!closeWindow)}><CloseIcon/></button>
        </div>

        <div className="overflow-y-auto overflow-x-hidden text-sm h-[300px] m-2 rounded-md ">

            <div className="bg-navFontColor text-white w-[150px] px-3 py-2 rounded-md drop-shadow-md">
                Bom dia, no que posso ajudar?
            </div>


            {myArray.map(e => 
            <div className="text-right bg-faqGreenBg  px-3 py-2 rounded-md w-[150px] m-3 ml-[8.5rem] drop-shadow-md"> 
                {e} 
                </div>
            )}

        </div>

        <div className="fixed h-[30px] m-2 flex gap-2">


        <input className="rounded-lg drop-shadow-md" type="text" value={textMessage} onChange={e => setTextMessage(e.target.value)} />


        <button onClick={onClick} className="text-navFontColor">
            <SendIcon/>
        </button>
        </div>
       </div>
    )
}

export default Chatbox