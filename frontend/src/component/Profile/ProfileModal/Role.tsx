import { useState } from "react"
import toast from "react-hot-toast"
import useChangeRole from "./useChangeRole"

const RoleModal = ({profile , setTrigger, trigger, load} : { profile : ProfileTypes|null, setTrigger : (trigger:boolean) => void, trigger : boolean, load:boolean}) => {
    const [role , setRole] = useState(-1)
    const {changeRole,loading} = useChangeRole()
    const handleChangeRole = async (id : string|undefined, role : number ) =>{
        await changeRole(id, role);
        setTrigger(!trigger)
    }
    const nameRole = [`Praktikan`, 'Aslab', "Admin"]
    return (
      <dialog id="ModalRole" className="modal w-screen ">
      <div className="modal-box">
        { !load? profile?.role === 4 ? 
        <div className="text-center">
        <h3 className="font-bold text-lg">Cannot change role {profile.fullname}</h3>
    </div>
        : 
        <>
        <div className="text-center">
            <h3 className="font-bold text-lg dark:text-white">{profile?.fullname} {`(${nameRole[profile?.role as number -1]})`}</h3>
        </div>
        <div className="flex flex-col justify-stretch items-center text-center">
            <div className="font-normal"> Change role</div>
            <select className="pl-2 mt-10 mb-5 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080] focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3" onChange={(e)=> setRole(Number(e.target.value))}>
                <option value={-1}>-----</option>
                <option value={1}>Praktikan</option>
                <option value={2}>Aslab</option>
                <option value={3}>Admin</option>
            </select>
            <button type="button" 
                    disabled={loading}
                    onClick={() => role === -1 ? toast.error('Select Role') : handleChangeRole(profile?.id, role)} 
                    className={`w-full text-[#FFFFFF] bg-[rgb(6,6,6)] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6 dark:bg-[#ffa31a] dark:text-black dark:hover:bg-[#ff7d12] ${loading? `btn btn-disabled` : ''}`}>
                      {loading? <div className="loading loading-spinner"/> 
                      :
                      "OK"}
                    </button>
        </div>
        </>
        : 
        null
        }
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>  
  )
  }
  
  export default RoleModal