import React from 'react'
import {auth} from '../firebase'

const style = {
    button: `bg-slate-200 px-4 py-2 hover:bg-slate-300 dark:hover:bg-slate-500 dark:bg-slate-600 dark:text-white duration-100`
}


const LogOut = () => {
const signOut = () => {
    signOut(auth)
}

  return (
    <button onClick={() => auth.signOut()} className={style.button}>
        Logout
    </button>
  )
}

export default LogOut