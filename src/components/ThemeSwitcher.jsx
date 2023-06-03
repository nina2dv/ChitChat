import React, { useState, useEffect} from "react";

const ThemeSwitcher = () => {
const element = document.documentElement
const [theme, setTheme] = useState(
localStorage.getItem("theme") ? localStorage.getItem("theme") : 'system'
  );
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const options = [
    {
      icon: "☼",
      text: "light",
    },
    {
      icon:"☾",
      text:"dark",
    },
    {
      icon:"system",
      text:"system",
    }
  ];

  function onWindowMatch() {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkQuery.matches)) {
      element.classList.add("dark");
    } else{
      element.classList.remove("dark");
    }
  }
  onWindowMatch();


  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add("dark");
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        element.classList.remove("dark");
        localStorage.setItem('theme', 'light');
        break;
      default:
        localStorage.removeItem('theme');
        break;
    }
  }, [theme]);

  darkQuery.addEventListener('change', (e) => {
    if (!("theme" in localStorage)){
      if(e.matches){
        element.classList.add("dark");
      }else{
        element.classList.remove("dark");
      }
    }
  })

    return (
        <>
        <div className="flex top-5 right-10 duration-100 rounded justify-end">
          {
          options?.slice(0,2).map(opt=>(
            <button 
            key={opt.text} 
            onClick={() => setTheme(opt.text)}
            className={`w-8 h-8 leading-8 text-2xl m-1 ${theme === opt.text && "text-blue-500/75"}`}
            > 
              {opt.icon}
            </button>

          ))
        }
        </div>
        </>
          
    );
};
export default ThemeSwitcher;