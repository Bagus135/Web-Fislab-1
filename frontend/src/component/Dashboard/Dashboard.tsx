import { useAuthContext } from "../../context/AuthContext"
import AdminMenuCard from "./adminMenuCard"
import NextSchedule from "./NextSchedule"
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
        <NextSchedule/>
      </> 
      ) : null}

    {authUser?.role === 2 ? (
      <>
      <NextSchedule/>
      </>
    ) : null }
    
    {authUser?.role === 3? (
      <>
        <NextSchedule/>
        <AdminMenuCard/>
      </>
    ): null}

    {authUser?.role === 4? (
      <>
        <NextSchedule/>
        <AdminMenuCard/>
      </>
    ): null}

    </>
  
)}

export default Dashboard