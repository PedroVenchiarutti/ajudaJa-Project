import React, { useEffect, useRef, useState, useContext } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SendIcon from '@mui/icons-material/Send';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import io from 'socket.io-client';
import { AuthContext } from '../../contexts/auth';
import {
  chatPreview,
  botMessage,
  chatMessage,
  messageArea,
  titleChat,
} from './classTailwind';

const socket = io('http://localhost:3333');

const Chatbox = (props) => {
  // definindo a sala
  const { user } = useContext(AuthContext);
  const room = `chat01#${user.username}`;

  const [textMessage, setTextMessage] = useState('');
  const [closeWindow, setCloseWindow] = useState(true);
  const [myArray, updateMyArray] = useState([]);
  const [msg, setMsg] = useState([
    {
      id: 1,
      message: 'Olá, como posso te ajudar?',
      user: 'bot',
    },
  ]);
  const [newData, setNewData] = useState({});
  const bottomRef = useRef(null);

  // console.log('ary', myArray);

  const onClick = () => {
    // updateMyArray((arr) => [...arr, `${textMessage}`]);
    setMsg([...msg, { message: textMessage, user: 'user' }]);
    const data = {
      room,
      message: textMessage,
      username: user.username,
    };
    socket.emit('message', data);
    // returnMesssage();
    setTextMessage('');
  };

  useEffect(() => {
    socket.on('message_bot', (data) => {
      if (data == null) return;
      // updateMyArray((arr) => [...arr, `${data.message}`]);
      setMsg([...msg, { message: data.message, user: 'bot' }]);
    });
  }, [newData]);

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      return onClick();
    } else if (e.key === 'Escape') {
      setTextMessage('');
    }
  };

  useEffect(() => {
    socket.on('message_new', (data) => {
      console.log('data', data);
    });
  }, [newData]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [textMessage]);

  // useEffect(() => {
  //   socket.emit('select_room', {
  //     room,
  //     user: user.username,
  //     userID: user.id,
  //   });
  // }, [user, room]);

  // console.log('msg', msg);

  return (
    <div className={chatPreview(closeWindow)}>
      <div className={titleChat(closeWindow)}>
        <h3 className="font-bold">{closeWindow ? `` : `ChatBot - Online`}</h3>
        <button onClick={(_) => setCloseWindow(!closeWindow)}>
          {closeWindow ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        </button>
      </div>
      <div className={closeWindow ? 'hidden' : ''}>
        <div className={messageArea}>
          {/* <div className={botMessage}>Bom dia, no que posso ajudar?</div> */}
          {msg.map((item) => {
            return (
              <div
                className={item.user === 'user' ? chatMessage : botMessage}
                key={item.id}
              >
                {item.message}
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>
        <div className="fixed h-[30px] m-2 flex gap-2 pb-1">
          <input
            className="pl-1 rounded-lg drop-shadow-md "
            type="text"
            value={textMessage}
            onKeyUp={(e) => keyHandler(e)}
            onChange={(e) => setTextMessage(e.target.value)}
          />
          <button onClick={onClick} className="text-navFontColor">
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Chatbox;

{
  /* {msg ? (
            msg.map((item, index) => {
              return (
                <div key={index} className={botMessage}>
                  {item.msg}
                </div>
              );
            })
          ) : (
             myArray.map((e, key) => (
            <div className={chatMessage} key={key}>
              {e}
              <div ref={bottomRef}> </div>
            </div>
          ))
          )}
        </div> */
}

{
  /* {msg.map((item, index) => {
            return (
              <div key={index} className={botMessage}>
                {item.msg}
                <div ref={bottomRef}> </div>
              </div>
            );
          })} */
}
