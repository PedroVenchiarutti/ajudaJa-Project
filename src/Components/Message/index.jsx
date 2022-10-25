import React from 'react';
import { chatMessage, botMessage } from './classTailwind';

const Message = ({ message, user, timer }) => {
  return (
    <>
      <div>
        {user === 'user' ? (
          <>
            <div className={chatMessage}>{message}</div>
            <span className="flex w-full  text-colorFontHeadline justify-end relative bottom-[10px] right-[15px] ">
              {timer}
            </span>
          </>
        ) : (
          <>
            <div className="flex w-full pt-[10px]">
              <div className={botMessage}>
                <p>{message}</p>
              </div>
              <img
                src="https://www.pngitem.com/pimgs/m/122-1223088_one-bot-discord-avatar-hd-png-download.png"
                alt=""
                className="w-10 h-9 rounded-full relative bottom-[25px] left-[2px]"
              />
            </div>
            <span className="flex w-full  text-colorFontHeadline relative top-[5px] left-[7px]">
              {timer}
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default Message;
