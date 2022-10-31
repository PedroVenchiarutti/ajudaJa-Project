import React from 'react';
import { chatMessage, botMessage } from './classTailwind';
import Fade from 'react-reveal/Fade';

const Message = ({ message, user, timer }) => {
  return (
    <>
      <div>
        {user === 'user' ? (
          <>
            <Fade right>
              <div className='flex w-full pt-[10px] '>
                <div className={chatMessage}>
                <p className='flex gap-3 items-center justify-between '>{message} <span className=' text-[8.5px] justify-self-end self-end'>{timer}</span></p>
                  </div>
              </div>
            </Fade>
          
          </>
        ) : (
          <>
            <Fade left>
              <div className="flex w-full pt-[15px]">
              <div className='w-[35px] '>
                <img
                    src="https://www.pngitem.com/pimgs/m/122-1223088_one-bot-discord-avatar-hd-png-download.png"
                    alt=""
                    className=" rounded-full relative bottom-[10px] left-[5px] z-50"
                  />
              </div>
                <div className={botMessage}>
              
              
                  <p className='flex gap-2 '>{message} <span className='text-[#fff] text-[8.5px] justify-self-end self-end'>{timer}</span></p>
              
                </div>
              
              </div>
            </Fade>
            
          </>
        )}
      </div>
    </>
  );
};

export default Message;