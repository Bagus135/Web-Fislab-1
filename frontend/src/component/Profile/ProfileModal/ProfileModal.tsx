import { Github, Instagram, MessageCirclePlus } from "lucide-react"

const ProfileModal = ({profile, loading} : { profile : ProfileTypes|null, loading : boolean}) => {
    if(loading) return ( 
<dialog id="ModalProfile" className="modal w-screen">
    <div className="modal-box">
        <p className="py-4 text-center">Loading...</p>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button>Close</button>
    </form>
  </dialog>  
    )
    if(!profile) return ( 
<dialog id="ModalProfile" className="modal w-screen">
    <div className="modal-box">
        <p className="py-4 text-center">{`Users not found :(`} </p>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button>Close</button>
    </form>
  </dialog>  
    )

  return (
    <dialog id="ModalProfile" className="modal w-screen ">
      <div className="modal-box shadow-md rounded-xl">
        <div className="flex flex-col justify-centers w-full sm:px-12 bg-transparent">
          <img src={profile.profilPic!} alt="" className="w-32 h-32 mx-auto rounded-xl dark:bg-gray-500 aspect-square" />
          <div className="space-y-4 text-center">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">{profile.fullname}</h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-600">{profile.nickname}</p>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">
                <div className="rounded-sm bg-slate-500"> </div>
                <div className="rounded-sm bg-slate-500"> </div>
                <div className="rounded-sm bg-slate-500"> </div>
            </div>
            <div className="my-2 ">
              <p className="px-5 text-xs sm:text-base dark:text-gray-600 text-center">{profile.description}</p>
            </div>
            <hr className="bg-black"/>
            <div className="flex flex-row gap-10 justify-center space-x-4 align-center">
              <a rel="noopener noreferrer" href={!profile.contact? '#': `https://wa.me/${profile.contact}`} aria-label="GitHub" className="size-10 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
                <MessageCirclePlus className="size-10"/>
              </a>
              <a rel="noopener noreferrer" href={ !profile.ig ? "#" : profile.ig} aria-label="Dribble" className=" size-10 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
                <Instagram className="size-10"/>
              </a>
              <a rel="noopener noreferrer" href={ !profile.github ? "#" : profile.github} aria-label="Twitter" className=" size-10 rounded-md dark:text-gray-800 hover:dark:text-violet-600">
                <Github className="size-10"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>  
)
}

export default ProfileModal