import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import Login from "./component/Auth/Login/Login";
import Dashboard from "./component/Dashboard/Dashboard";
import SignUp from "./component/Auth/SignUp/SignUp";
import NoRoute from "./component/Auth/NoRoute";
import Navbar from "./component/NavBar/Navbar";
import NotAuth from "./component/Other/NotAuth";
import AllUsers from "./component/Users/Users";
import ShortLinkRoutes from "./utils/shortlink";
import { useShortLinkContext } from "./context/ShortlinkContext";
import Schedule from "./component/Schedule/Schedule";
import PraktikanGroup from "./component/Admin/PraktikanGroup/PraktikanGroup";
import AslabModul from "./component/Admin/AslabModul/aslabModul";
import AslabSession from "./component/Admin/AslabSession/AslabSession";
import ScorePage from "./component/Score/ScorePage";
import CheckSchedulePage from "./component/Schedule/Aslab/checkSchedule/checkSchedule";
import ShortlinkPage from "./component/ShortLink/ShortlinkPage";
import Profile from "./component/Profile/Profile";
import ViewPraktikanScore from "./component/Admin/ViewPraktikanScore/ViewPraktikanScore";
import Announcement from "./component/Announcement/Announcement";


function App(){
  const {isLoading,authUser} = useAuthContext()
  const {isLoading: loadingShortlink, ShortLink} = useShortLinkContext()
  
  if (isLoading|| loadingShortlink) return null
  
  return (
    <div className="justify-center flex z-0">
      <Navbar/>
      <div className="relative top-16 w-full">
      <Routes>
        <Route path="/login" element = { !authUser? <Login/> : <Navigate to={'/dashboard'}/>} />
        <Route path="/dashboard" element = { authUser? <Dashboard/> : <Navigate to={'/login'}/>} />
        <Route path="/signup" element = { !authUser? <Navigate to={'/login'}/> : (authUser.role > 2 ? <SignUp/> : <NotAuth pageName="Sign Up"/> ) } />
        <Route path="/announcement" element = { !authUser? <Navigate to={'/login'}/> : <Announcement/>} />
        <Route path="/score" element = { !authUser? <Navigate to={'/login'}/> : <ScorePage/> } />
        <Route path="/schedule" element = { !authUser? <Navigate to={'/login'}/> : <Schedule/> } />
        <Route path="/schedule/check-all" element = { !authUser? <Navigate to={'/login'}/> : <CheckSchedulePage/> } />
        <Route path="/shortlink" element = { !authUser? <Navigate to={'/login'}/> : <ShortlinkPage/>} />
        <Route path="/users" element = { !authUser? <Navigate to={'/login'}/> : <AllUsers/> } />

        <Route path="/admin/praktikan-grouping" element = { !authUser? <Navigate to={'/login'}/> : <PraktikanGroup/> } />
        <Route path="/admin/aslabmodul" element = { !authUser? <Navigate to={'/login'}/> : <AslabModul/> } />
        <Route path="/admin/aslabsession" element = { !authUser? <Navigate to={'/login'}/> : <AslabSession/> } />
        <Route path="/admin/viewscore" element = { !authUser? <Navigate to={'/login'}/> : <ViewPraktikanScore/>} />
        <Route path="/profile/me" element = { !authUser? <Navigate to={'/login'}/> : <Profile/>  } />
        <Route path="*" element={ !authUser? <Navigate to={'/login'}/> : <NoRoute/>}/>
        {ShortLinkRoutes(ShortLink)}
      </Routes>
    <Toaster/>
    </div>
  </div>
  )
}




export default App