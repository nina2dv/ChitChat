import React from 'react';
import Signin from './Signin'
import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import ThemeSwitcher from './ThemeSwitcher';

const style = {
    nav: `h-20 flex justify-between items-center p-4 dark:bg-slate-800 bg-gray-100  duration-100`,
    heading: `dark:text-white text-3xl font-semibold duration-100`,
    first:`text-[#2a50fa] dark:text-[#6682ff]`,
    second: `dark:text-[#56db6e]/80  text-[#1cb840]/80 duration-100`,
}

const Navbar = () => {
    const [user] = useAuthState(auth)
    // console.log(user)
  return (
    <div className={style.nav}>
      <h1 className={style.heading}><span className={style.second}>Chit</span><span className={style.first}>Chat</span></h1>
      <ThemeSwitcher/>
      {user ? <LogOut /> : <Signin />}
    </div>
  );
};

export default Navbar;