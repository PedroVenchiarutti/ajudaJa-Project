import React, { useEffect, useRef, useState, useContext } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SendIcon from '@mui/icons-material/Send';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Api from '../../Api/api';
import { v4 as uuidv4 } from 'uuid';
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

/* const socket = io('http://localhost:3333'); */
// const socket = io(import.meta.env.VITE_URL_CONNECTION);

const Chatbox = (props) => {
  const [emailVerific, setEmailVerific] = useState(false);
  const [userVerific, setUserVerific] = useState(false);
  const [initChat, setInitChat] = useState(true);
  const [textMessage, setTextMessage] = useState('');
  const [disableMsg, setDisableMsg] = useState(false);
  const [closeWindow, setCloseWindow] = useState(false);
  const [myArray, updateMyArray] = useState([]);
  const [newData, setNewData] = useState({});
  const [clientChat, setClientChat] = useState({
    name: '',
    email: '',
    room: '',
    timeStart: '',
  });
  const bottomRef = useRef(null);

  const [msg, setMsg] = useState([]);

  // definindo a sala
  const { user } = useContext(AuthContext);
  const { name, email } = clientChat;

  const uidRoom = uuidv4();

  const startChat = () => {
    const newDate = new Date();
    const convertNewDate = newDate.toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
    });

    const day = convertNewDate.split(' ')[0];
    const time = convertNewDate.split(' ')[1];

    const newUid = uidRoom.split('-')[0];

    const emailConvert =
      email.split('@')[0] + email.split('@')[1].split('.')[1];

    const room = `${emailConvert}${newUid}${day.split('/').join('')}`;

    const data = {
      name: clientChat.name,
      email: clientChat.email,
      room: room,
      timeStart: time.split(':')[0] + ':' + time.split(':')[1],
    };

    setClientChat(data);

    socket.emit('message', {
      id: uidRoom,
      message: `Olá ${data.name}, como posso te ajudar? caso queira sair do chat, digite "sair" e aguarde!`,
      user: 'bot',
      username: 'bot',
      date: time.split(':')[0] + ':' + time.split(':')[1],
      room: room,
      initial: true,
    });

    const localStore = localStorage.setItem('clientChat', JSON.stringify(data));
  };

  const handleChange = (props) => (e) => {
    let newClientChat = { ...clientChat, [props]: e.target.value };
    setClientChat(newClientChat);
  };

  // Enviando para backend
  const onClick = () => {
    if (textMessage === '') {
      return;
    } else if (textMessage == 'sair') {
      localStorage.removeItem('clientChat');
      setTimeout(() => {
        setCloseWindow(true);
        setInitChat(true);
        setClientChat('');
        setMsg([]);
      }, 3000);
    }

    const data = {
      room: clientChat.room,
      message: textMessage,
      user: 'user',
      username: clientChat.name,
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
    if (localStorage.getItem('clientChat') !== null) {
      setInitChat(false);
      const data = JSON.parse(localStorage.getItem('clientChat'));
      Api.post(`/public/webchat/${data.room}`)
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
            return obj;
          });
          setMsg((msg) => [...msg, ...maps]);
        })
        .catch((error) => {
          console.log(error);
        });
      // Para atualiszar as msg
      useEffect(() => {
        socket.on('message_new', (newdata) => {
          if (newdata == null) return;
          setMsg((msg) => [...msg, newdata]);
        });
        socket.on('message_bot', (data) => {
          if (data == null) return;
          setMsg((msg) => [...msg, data]);
        });
      }, [setMsg]);

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
          console.log('if');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          setInitChat(true);
          setEmailVerific(true);
          console.log('if 2');
        } else {
          setInitChat(false);
          setUserVerific(false);
          setEmailVerific(false);
          socket.connect();
          startChat();
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
              <button
                className={
                  initChat
                    ? 'my-4 px-6 py-2 rounded-lg text-white font-bold  bg-navBg hover:bg-opacity-0 w-full  hover:text-navFontColor hover:border'
                    : 'hidden'
                }
                onClick={initiateChat}
              >
                Iniciar Chat
              </button>

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
                  initChat
                    ? 'hidden'
                    : 'fixed bottom-1  flex gap-2 pb-[8px] w-full'
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
    }
  });
};

export default Chatbox;
