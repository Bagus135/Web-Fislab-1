import { ChevronRight, ContactRound, Lock, UserRoundPen } from "lucide-react"
import { useAuthContext } from "../../context/AuthContext"
import { ModalChangePassword, ModalEditContact, ModalEditProfile } from "./ModalMenuProfile"
import useEditProfile from "./useEditProfile"

const Profile = () => {
  const {authUser} = useAuthContext()
  
  const {ProfileUser, editProfile, isLoading} = useEditProfile(authUser)
    if(!authUser) return 
    return (
        <>
        <ModalEditProfile authUser={ProfileUser}  editProfile={editProfile} loading={isLoading}/>
        <ModalEditContact authUser={ProfileUser} editProfile={editProfile} loading={isLoading}/>
        <ModalChangePassword authUser={ProfileUser}/>
        {  !ProfileUser?.profilPic || !ProfileUser.description || !ProfileUser.nickname ?
            <div className="mt-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center" role="alert">
                <strong className="font-bold">Anda belum melengkapi profile!</strong>
                <p className="block sm:inline pl-5">Segera lengkapi profile anda</p>
            </div>
            :

            !ProfileUser?.contact || !ProfileUser.ig ? 
                <div className="mt-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center" role="alert">
                    <strong className="font-bold">Anda belum melengkapi data contact!</strong>
                    <p className="block sm:inline pl-5">Segera lengkapi contact anda</p>
                </div>
            :
            null
        }

            <div className="flex flex-col md:flex-row p-2 justify-start ">
                <ProfilePrev profile={ProfileUser}/>
                <ProfileMenu/>
            </div>
        </>
  )
}


const ProfilePrev = ({profile}:{profile:AuthUserTypes|null})=>{
    return(
    <div className="flex flex-col justify-center w-full sm:px-12 bg-transparent">
        <img src={(!profile?.profilPic ? '/user.png' : profile.profilPic)} alt="" className=" mt-3 w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square md:size-60" />
        
        <div className="space-y-4 text-center pt-2">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl dark:text-white">{profile?.fullname}</h2>
              <p className="px-5 text-xs sm:text-base dark:text-[#ffa31a]">{profile?.nickname}</p>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">
                <div className="rounded-sm bg-slate-500"> </div>
                <div className="rounded-sm bg-slate-500"> </div>
                <div className="rounded-sm bg-slate-500"></div>
            </div>
            <div className="my-2 ">
                <hr className="md:mt-10"/>
              <p className="px-5 text-xs sm:text-base mt-2 text-center md:mt-4">{profile?.description}</p>
                <hr className="mt-2"/>
            </div>
        </div>
    </div>
)
}

const ProfileMenu =()=>{
     return (
        <div className="flex flex-col justify-stretch w-full mt-5 gap-5">
            <div className="flex rounded-md  shadow-[1px_2px_2px_2px_rgba(0,0,0,0,1)] shadow-gray-500 flex-row items-center  w-full justify-between p-3  hover:scale-y-105 transition duration-200 dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080]" onClick={() =>{
                  (document.getElementById(`ModalEditProfile`) as HTMLDialogElement).showModal()}}>
                <div className="flex flex-row items-center gap-4">
                    <UserRoundPen className="size-8 md:size-10 dark:text-white"/>
                    <div className="flex flex-col">
                        <p className="font-bold dark:text-[#ffa31a]">Edit Profile</p>
                        <p className="text-sm">Edit your profile here</p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <ChevronRight className="dark:text-white"/>
                </div>
            </div>

            <div className="flex rounded-md  shadow-[1px_2px_2px_2px_rgba(0,0,0,0,1)] shadow-gray-500 flex-row items-center  w-full justify-between p-3 hover:scale-y-105 transition duration-200 dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080]" onClick={() =>{
                  (document.getElementById(`ModalEditContact`) as HTMLDialogElement).showModal()}}>
                <div className="flex flex-row items-center gap-4">
                    <ContactRound className="size-10 dark:text-white "/>
                    <div className="flex flex-col">
                        <p className="font-bold dark:text-[#ffa31a]">Contact</p>
                        <p className="text-sm">Add your contact number and social media here</p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <ChevronRight className="dark:text-white"/>
                </div>
            </div>

            <div className="flex rounded-md  shadow-[1px_2px_2px_2px_rgba(0,0,0,0,1)] shadow-gray-500 flex-row items-center  w-full justify-between p-3  hover:scale-y-105 transition duration-200 dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080]" onClick={() =>{
                  (document.getElementById(`ModalChangePass`) as HTMLDialogElement).showModal()}}>
                <div className="flex flex-row items-center gap-4">
                    <Lock className="size-8  dark:text-white"/>
                    <div className="flex flex-col">
                        <p className="font-bold dark:text-[#ffa31a]">Password</p>
                        <p className="text-sm"> Change your password here</p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <ChevronRight className="dark:text-white"/>
                </div>
            </div>
        </div>
     )
}

export default Profile