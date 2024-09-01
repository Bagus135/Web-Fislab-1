import {  Menu, Moon, Sun } from "lucide-react"
import Sidebar from "./Sidebar"
import { Link, useLocation } from "react-router-dom"
import useLogout from "../Auth/Logout/useLogout"
import { useAuthContext } from "../../context/AuthContext"
import { useEffect, useState } from "react"

const MenuButton =()=>{
    return(
        <div className="dropdown dropdown-end z-[50]">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-square" >
          <div className=" indicator">
            <Menu/>
            <Sidebar/>
          </div>
        </div>
      </div>
    )
}

const ProfileUser = () =>{
  const {authUser} = useAuthContext()
  const {logout, isLoading}= useLogout()
    return(
      <div className="dropdown dropdown-end ">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-8 md:w-10 rounded-full">
            <img className="dark:bg-[#ffa31a] dark:hover:bg-[#ff7d12]"
              alt="You"
              src={ !authUser?.profilPic ? "/user.png"  : authUser?.profilPic} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow dark:bg-[#1b1b1b] dark:border dark:border-[#808080]">
          <li >
            <Link to={`/profile/me`} className="justify-between dark:hover:bg-[#ffa31a] dark:hover:text-black">
              Profile
            </Link>
          </li>
          {!isLoading?(<li className="dark:hover:bg-[#ffa31a] dark:hover:text-black rounded-lg" onClick={logout}><a>Logout</a></li>) : (<li><div className="loading loading-dots"/></li>)}
          
        </ul>
      </div>
    )
}

const Navbar = () => {
    const currentLocation = useLocation()
   const mediaTheme =  window.matchMedia(`(prefers-color-scheme : light)`).matches ? "light": "dark"

    const [theme , setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme"): mediaTheme);
    
    const handleToogle = (e:React.ChangeEvent<HTMLInputElement>) =>{
      if(e.target.checked){
        setTheme("dark")
      } else {
        setTheme("light")
      }
    }

    useEffect(()=>{
      localStorage.setItem("theme", theme!);
      const localTheme = localStorage.getItem("theme");
      
      if(localTheme === "light")  document.documentElement.classList.remove("dark")
      else  document.documentElement.classList.add("dark")

      document.documentElement.setAttribute('data-theme',localTheme!)
    },[theme])

  return (
    <header className="navbar bg-base-100 fixed top-0 shadow-md px-2 z-50 dark:bg-[#1b1b1b]">
    <div className="flex-none">
        {currentLocation.pathname === "/login"? null: <MenuButton/> }
      <div className="text-2xl md:text-3xl font-bold text-black dark:bg-[#ffa31a] dark:text-black px-2 flex flex-row gap-2 rounded-md">
        <div className=" h-[80%] text-center text-black">FISLAB</div>
        <div className="">I</div> 
      </div>
    </div>
    <div className="flex-1 justify-end gap-1 md:gap-3">
      <button  className="btn btn-square btn-ghost">
       <label className="swap swap-rotate w-12 h-12">
        <input type="checkbox" onChange={handleToogle} checked={theme === "light" ? false : true}/>
        <Sun className="w-8 h-8 swap-off" />
        <Moon className="w-8 h-8 swap-on text-[#ffa31a]" />
        </label>
      </button>
    {currentLocation.pathname === "/login"? null: <ProfileUser/> }
    </div>
  </header>
  )
}

export default Navbar