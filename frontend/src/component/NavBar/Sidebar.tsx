import { Link } from "react-router-dom"
import { useAuthContext } from "../../context/AuthContext"

const Sidebar = () => {
  const {authUser} = useAuthContext();
 
  return (
    <div className=" dropdown-content min-h-screen flex flex-row bg-gray-100 rounded-r-3xl w-44 md:w-60 absolute z-[50] -top-5 -left-10">
    <div className="flex flex-col w-40 md:w-56 bg-white rounded-r-3xl overflow-hidden">
      <div className="flex items-center justify-center h-16 shadow-md">
        <h1 className=" text-xl font-bold uppercase text-black md:text-3xl">FISLAB I </h1>
      </div>
      <ul className="flex text-xs md:text-sm text-left flex-col py-4">
          <Menu name="Dashboard" path="/dashboard"/>
        
        {authUser?.role === 1 ? (
          <> 
            <Menu name="Score" path="/score"/>
            <Menu name="Schedule" path="/schedule"/>
            <Menu name="Shortlink" path="/shortlink"/>
            <Menu name="Users" path="/users"/>
          </>
        ) : null }
        {
          authUser?.role === 2 ? (
            <> 
            <Menu name="Score" path="/score"/>
            <Menu name="Schedule" path="/schedule"/>
            <Menu name="Shortlink" path="/shortlink"/>
            <Menu name="Users" path="/users"/>
          </>
          ) : null
        }
        {
          authUser?.role === 3 ? (
            <> 
            <Menu name="Score" path="/score"/>
            <Menu name="Schedule" path="/schedule"/>
            <Menu name="Shortlink" path="/shortlink"/>
            <Menu name="Users" path="/users"/>
          </>
          ) : null
        }
        {
          authUser?.role === 4 ? (
            <> 
            <Menu name="Score" path="/score"/>
            <Menu name="Schedule" path="/schedule"/>
            <Menu name="Shortlink" path="/shortlink"/>
            <Menu name="Users" path="/users"/>
          </>
          ) : null
        }
      </ul>
    </div>
  </div>
  )
}

function Menu ({path, name} : {path : string, name : string}){
  return(
    <li>
    <Link to={path} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
      <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
      <span className="font-medium">{name}</span>
    </Link>
  </li>
  )
}

export default Sidebar