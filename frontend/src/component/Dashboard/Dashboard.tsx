import { useAuthContext } from "../../context/AuthContext"
import AdminMenuCard from "./adminMenuCard"
import InfoBoard from "./InfoBoard"
import StatCard from "./StatCard"
import TimeCard from "./timeCard"
import TimeGreeting from "./timeGreeting"

const Dashboard = () => {
  const {authUser} = useAuthContext()
  return (
<>
    <TimeGreeting/>
    <TimeCard/>
    {authUser?.role === 1 ? (
      <>
        <StatCard/>
        <InfoBoard/>
      </> 
      ) : null}

    {authUser?.role === 2 ? (
      <>
      <InfoBoard/>
      </>
    ) : null }
    
    {authUser?.role === 3? (
      <>
        <InfoBoard/>
        <AdminMenuCard/>
      </>
    ): null}

    {authUser?.role === 4? (
      <>
        <InfoBoard/>
        <AdminMenuCard/>
      </>
    ): null}

    </>
  
)}

export default Dashboard