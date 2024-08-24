import { useAuthContext } from "../../context/AuthContext"
import ShortLinkAdmin from "./Admin/ShortLinkAdmin"
import Shortlink from "./NonAdmin/Shortlink"

const ShortlinkPage = () => {
  const {authUser} = useAuthContext()
  if(!authUser) return
    return (
        <>
        <div className="flex justify-stretch flex-col gap-4 items-stretch dark:bg-gray-800 h-screen w-full">

        { authUser.role >2 ?  
        <ShortLinkAdmin authUser={authUser}/>
        :
        null
    }
        <Shortlink  authUser={authUser}/>
    </div>
        </>
    )
}

export default ShortlinkPage