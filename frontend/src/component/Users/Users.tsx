import { Ellipsis, Search,} from "lucide-react";
import Loading from "../Other/Loading";
import useGetUsers from "./useGetUsers";
import { useAuthContext } from "../../context/AuthContext";
import useGetProfile from "../Profile/ProfileModal/useGetProfile";
import ProfileModal from "../Profile/ProfileModal/ProfileModal";
import RoleModal from "../Profile/ProfileModal/Role";
import { useState } from "react";

const AllUsers = () => {
  const {isLoading, users, setTrigger, trigger} = useGetUsers()
  const {authUser} = useAuthContext()
  const {Profile, getProfile, isLoading:LoadingProfile} =useGetProfile()
  const [search , setSearch] = useState<string>('')
  const [clickSearch, setClickSearch] = useState<boolean>(true)

  if(isLoading || !users) return <Loading/>
  
  let usersFilter = users;
  const role = ['Praktikan', "Aslab", "Admin", "Manipulator"]
  if(search?.length !==0) usersFilter = usersFilter.filter(val => val.nrp.includes(search)|| val.fullname.toLowerCase().includes(search.toLowerCase()))

  const mapUsers = usersFilter?.map((val : AllUsers, idx : number)=>{
    return (
      <div key={idx} className="">
        {authUser?.role ===4 ?<div className="flex flex-row justify-end px-3"> 
            <Ellipsis className=" hover:bg-slate-400  top-5 " onClick={()=>{
            getProfile(val.id);
            (document.getElementById('ModalRole') as HTMLDialogElement).showModal()!
            }} />
        </div> : null}

      <div 
        onClick={()=>{
          getProfile(val.id);
          (document.getElementById('ModalProfile') as HTMLDialogElement).showModal()!
          }} 
        className="flex border items-center p-4 bg-white rounded shadow-[1px_2px_2px_2px_rgba(0,0,0,0,1)] shadow-gray-500 hover:scale-95 transition duration-500 dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080]">

          <div className="flex flex-shrink-0 items-center justify-center h-20 w-20 rounded">
          <img src={!val.profilPic ? "/user.png" : val.profilPic} alt="" className="w-20 h-20 mx-auto rounded-xl dark:bg-gray-500 aspect-square" />
          </div>
          <div className="flex-grow flex flex-col ml-4">
              <div className="flex items-center justify-between">
              <span className="text-xl font-bold dark:text-white">{val.fullname}</span> 
                </div>
              <div className="flex items-center justify-between">
                  <span className="text-gray-500">{val.nrp}</span>
                  <span className="text-blue-900 text-sm font-semibold ml-2 dark:text-[#ffa31a]">{role[val.role-1]}</span>
              </div>
          </div>
      </div>
    </div>
  )
})

    return (
      <>
  <ProfileModal profile={Profile} loading={LoadingProfile}/>
  <RoleModal profile={Profile} setTrigger={setTrigger} trigger={trigger} load={LoadingProfile}/>
  <div className="flex flex-row gap-3 p-2 items-center">
      <div className="rounded-md  mt-3  w-[80%] md:w-[85%] overflow-hidden">
                <div className="relative text-gray-400 ">
                    <input type="text"
                            className={`${clickSearch? 'translate-x-full': ''}  transform transition-transform ease-in duration-500 pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent  block w-full rounded-l-lg py-3 px-2 dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080] dark:text-[#ffa31a]`} 
                            placeholder="NRP / Fullname "
                            disabled={clickSearch}
                            value={search!}
                            onChange={(e)=> setSearch(e.target.value)}/>
                </div>
            </div>
            <button className="w-[20%] md:[w-15%] text-[#FFFFFF] bg-[rgb(6,6,6)] focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg  md:text-l h-full py-3 text-center font-semibold dark:bg-[#ffa31a] dark:text-black dark:hover:bg-[#ff7d12] flex justify-center"
            onClick={()=>setClickSearch(!clickSearch)}>
              <Search />
            </button>
  </div>
 
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-stretch items-stretch p-2 mt-2">
      {mapUsers}
    </div>
  </>
    )

}

export default AllUsers