import React, { useEffect, useRef, useState, useContext } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SendIcon from '@mui/icons-material/Send';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
//import io from 'socket.io-client';
import Api from '../../Api/api';
import Input from '../../Components/TextField';
import { AuthContext } from '../../contexts/auth';
import {
  chatPreview,
  botMessage,
  chatMessage,
  messageArea,
  titleChat,
} from './classTailwind';
import CircleIcon from '@mui/icons-material/Circle';
import Message from '../../Components/Message';

const Chatbox = (props) => {
  // definindo a sala de 
  const { user } = useContext(AuthContext);
  const room = `chat01#pedro`;
  // const room = `chat01#${user.username}`;

  const [clientChat, setClientChat] = useState({
    name: '',
    email: '',
    uuid: '',
  });
  const [emailVerific, setEmailVerific] = useState(false);
  const [userVerific, setUserVerific] = useState(false);
  const [initChat, setInitChat] = useState(true);
  const [textMessage, setTextMessage] = useState('');
  const [disableMsg, setDisableMsg] = useState(false);
  const [closeWindow, setCloseWindow] = useState(false);
  const [myArray, updateMyArray] = useState([]);
  const [newData, setNewData] = useState({});
  const bottomRef = useRef(null);

  const { name, email } = clientChat;

  const handleChange = (props) => (e) => {
    let newClientChat = { ...clientChat, [props]: e.target.value };
    setClientChat(newClientChat);
  };

  const [msg, setMsg] = useState([
    {
      id: 1,
      message: `Olá, como posso te ajudar?`,
      user: 'bot',
      time: '14:20',
    },
  ]);

  const onClick = () => {
    const data = {
      room,
      message: textMessage,
      user: 'user',
      username: 'pedro ta fixo mudar ',
    };

    if (data.message.length < 3) {
      return;
    } else if (data.message.length > 40) {
      return;
    } else {
      socket.emit('message', data);
      setDisableMsg(true);
      setTextMessage('');
      setTimeout(function () {
        setDisableMsg(false);
      }, 3000);
    }
  };

  useEffect(() => {
    Api.get('/public/webchat')
      .then((response) => {
        console.log(response.data);
        const maps = response.data.map((item) => {
          let obj = {
            room: item.room,
            username: item.username,
            user: item.user,
            message: item.message,
            time: item.createdAt,
          };
          console.log(obj);
          return obj;
        });
        setMsg((msg) => [...msg, ...maps]);
      })
      .catch((error) => {
        console.log(error);
      });

    // return () => {
    //   socket.off('message_client');
    // };
  }, []);

  /*   useEffect(() => {
    socket.on('message_new', (newdata) => {
      if (newdata == null) return;
      setMsg((msg) => [...msg, newdata]);
    });
    socket.on('message_bot', (data) => {
      if (data == null) return;
      setMsg((msg) => [...msg, data]);
    });
  }, [setMsg]); */

  const keyHandler = (e, f) => {
    if (e.key === 'Enter') {
      return onClick();
    } else if (e.key === 'Escape') {
      setTextMessage('');
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msg]);

  const initiateChat = () => {
    if (!/^[A-Za-z0-9]{4,255}$/.test(name)) {
      setInitChat(true);
      setUserVerific(true);
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setInitChat(true);
      setEmailVerific(true);
    } else {
      setInitChat(false);
      setUserVerific(false);
      setEmailVerific(false);
    }
  };

  return (
    <div className={chatPreview(closeWindow)}>
      <div className={titleChat(closeWindow)}>
        <div className="flex gap-2 items-center">
          <h3 className="font-bold">
            {closeWindow ? `` : `ChatBot - Online `}
          </h3>
          {closeWindow ? null : (
            <CircleIcon
              sx={{ fontSize: '10px', color: '#6DE040' }}
              className="animate-pulse"
            />
          )}
        </div>
        <button onClick={(_) => setCloseWindow(!closeWindow)}>
          {closeWindow ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        </button>
      </div>

      <div className={closeWindow ? 'hidden' : ''}>
        <div className={messageArea}>
          {initChat ? (
            <>
              <h2 className="font-bold pl-2 pb-2">
                Insira seus dados para falar com Bot
              </h2>
              <div className="flex flex-col gap-2 px-2 pb-3">
                <Input
                  info={clientChat.name}
                  label="Seu nome"
                  handleChange={handleChange('name')}
                />
                <Input
                  info={clientChat.email}
                  label="Seu email"
                  handleChange={handleChange('email')}
                />
              </div>
            </>
          ) : null}

          {initChat ? (
            <>
              <h2 className="font-bold pl-2 pb-2">
                Insira seus dados para falar com Bot
              </h2>
              <div className="flex flex-col gap-2 px-2 pb-3">
                <Input
                  error={userVerific}
                  helperText={userVerific ? 'Usuário Inválido' : ''}
                  info={clientChat.name}
                  label="Seu nome"
                  handleChange={handleChange('name')}
                />

                <Input
                  error={emailVerific}
                  helperText={emailVerific ? 'Email inválido' : ''}
                  info={clientChat.email}
                  label="Seu email"
                  handleChange={handleChange('email')}
                />
              </div>
            </>
          ) : null}

          {initChat === false ? (
            <>
              {msg.map((item) => (
                <Message
                  key={item.id}
                  message={item.message}
                  user={item.user}
                  timer={item.time}
                />
              ))}
              <div ref={bottomRef} />
            </>
          ) : (
            ''
          )}

          <div
            className={
              initChat ? 'hidden' : 'fixed bottom-1  flex gap-2 pb-[8px] w-full'
            }
          >
            <input
              disabled={disableMsg}
              className="p-1 rounded-lg drop-shadow-md w-10/12 outline-none"
              type="text"
              value={textMessage}
              onKeyUp={(e) => keyHandler(e)}
              onChange={(e) => setTextMessage(e.target.value)}
            />
            <button
              onClick={onClick}
              className="text-navFontColor transform hover:scale-95 transition duration-100 "
            >
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chatbox;
