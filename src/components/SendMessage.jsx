import React, { useState } from "react";
import { db, auth } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
    form: `h-14 w-full max-w-[728px]  flex text-xl absolute bottom-0 position: sticky`,
    input: `w-full text-xl p-3 bg-gray-200 dark:bg-gray-800 text-black dark:text-white outline-none border-none duration-100`,
    button: `w-[20%] bg-[#395dff]/60 dark:bg-[#395dff]/90 dark:text-white duraiton-100 rounded-xl`,
};

const SendMessage = ({scroll}) => {
    const [input, setInput] = useState('');
  
    const sendMessage = async (e) => {
      e.preventDefault()
      if (input === '') {
          alert('Please enter a valid message')
          return
      }
      const {uid, displayName} = auth.currentUser
      await addDoc(collection(db, 'message'), {
          text: input,
          name: displayName,
          uid,
          timestamp: serverTimestamp()
      })
      setInput('')
      scroll.current.scrollIntoView({behavior: 'smooth'})
    }
  
    return (
      <form onSubmit={sendMessage} className={style.form}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={style.input}
          type='text'
          placeholder='Message'
        />
        <button className={style.button} type='submit'>↘
        </button>
      </form>
    );
  };
  
  export default SendMessage;