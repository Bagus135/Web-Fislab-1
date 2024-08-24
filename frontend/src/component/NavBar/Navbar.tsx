import {  Menu } from "lucide-react"
import Sidebar from "./Sidebar"
import { Link, useLocation } from "react-router-dom"
import useLogout from "../Auth/Logout/useLogout"
import { useAuthContext } from "../../context/AuthContext"

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
        <div className="flex-1 justify-end">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-8 md:w-10 rounded-full">
            <img
              alt="You"
              src={ !authUser?.profilPic ? "/user.png"  : authUser?.profilPic} />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li >
            <Link to={`/profile/me`} className="justify-between">
              Profile
            </Link>
          </li>
          {!isLoading?(<li onClick={logout}><a>Logout</a></li>) : (<li>loading<div className="loading loading-dots"/></li>)}
          
        </ul>
      </div>
    </div>
    )
}

const Navbar = () => {
    const currentLocation = useLocation()
  return (
    <header className="navbar bg-base-100 fixed top-0 shadow-md px-2 z-50">
    <div className="flex-none">
        {currentLocation.pathname === "/login"? null: <MenuButton/> }
      <a className="text-xl md:text-3xl font-bold text-black">FISLAB I</a>
    </div>
    {currentLocation.pathname === "/login"? null: <ProfileUser/> }
  </header>
  )
}

export default Navbar