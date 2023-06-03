import React from "react";
import { auth } from "../firebase";

const style = {
    message: `flex items-center shadow-xl dark:shadow-gray-400/20 m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
    name: `absolute mt-[-4rem] text-gray-600/80 text-xs dark:text-gray-300/80 duration-100`,
    sent: `bg-[#395dff]/90 text-white flex-row-reverse text-end float-right rounded-bl-full`,
    received: `dark:bg-[#56db6e]/80  bg-[#239e40]/80 text-white float-left rounded-br-full duration-100`,
}
const Message = ({message}) => {
    const messageClass = 
  message.uid === auth.currentUser.uid
  ? `${style.sent}`
  : `${style.received}`

  return (
    <div>
        <div className="w-10 rounded-full">
            <img src={message.avatar} />
          </div>
      <div className={`${style.message} ${messageClass}`}>
         
        <p className={style.name}>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};
export default Message