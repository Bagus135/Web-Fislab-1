import { useAuthContext } from "../../context/AuthContext"
import AslabSchedule from "./Aslab/AslabSchedule"
import SchedulePraktikan from "./Praktikan/PraktikanSchedule"

const Schedule = () => {
  document.title = 'Schedule'
    const {authUser} = useAuthContext()
    return (
    <>
    { authUser?.role === 1 ? <SchedulePraktikan/> : <AslabSchedule/> }
    </>
  )
}

export default Schedule