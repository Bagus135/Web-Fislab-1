import { useState } from "react";
import useChangePass from "./useChangePass";
import toast from "react-hot-toast";

interface InputComponentProps{
    title:string;
    type:string; 
    placeholder : string, 
    value : string|null, 
    setValue : React.ChangeEventHandler<HTMLInputElement> | undefined
}

interface inputEditProfileValue{
    nickname : string|null|undefined,
    description : string|null|undefined,
    profilPic : string|undefined,
}

interface ModalEditProfileProps {
     authUser : AuthUserTypes|null,
     editProfile : (authUser: AuthUserTypes|null, payload: any) => Promise<void>, 
     loading:boolean}

export const ModalEditProfile =({authUser, editProfile,loading}:ModalEditProfileProps) =>{
    const [value, setValue] = useState<inputEditProfileValue>({
        nickname : authUser?.nickname,
        description : authUser?.description,
        profilPic : undefined
    })

    const convertFile = (files: FileList|null) =>{
        if(files){
            const fileRef = files[0]|| ""
            const fileType : string = fileRef.type || "";
            const reader = new FileReader();
            reader.readAsBinaryString(fileRef);
            reader.onload = (ev : any) =>{
                setValue({...value, profilPic :`data:${fileType};base64,${btoa(ev.target.result)}`})
            }
        }
    }

    const handleSubmit = async() =>{
        if(!value.description||!value.nickname||!value.profilPic) return toast.error(`Please fill all input`)
        await editProfile(authUser, value);
        (document.getElementById(`ModalEditProfile`) as HTMLDialogElement).close()
    }

    return(
        <dialog id="ModalEditProfile" className="modal w-screen ">
    <div className="modal-box">
        <div className="flex flex-col gap-2">
            <div className="text-center font-bold text-2xl pb-5"> Edit Profile</div>
            <div className="pb-2">
                <label className="block mb-2 text-sm font-medium text-[#111827]">{`Profile Picture (max 500kb)`}</label>
            {!value.profilPic ? null :<img className='mb-5' src={value.profilPic}/>}
                <div className="relative text-gray-400">
                    <input type='file'
                            accept="image/*"
                            className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-[100%] p-2.5 rounded-l-lg py-3 px-4" 
                            onChange={(e)=> convertFile(e.target.files)}/>
                </div>
            </div>
          
           <InputComponent title="Nickname" placeholder="Albert" value={value.nickname!} setValue={(e)=> setValue({...value, nickname : e.target.value})} type="text"/>
           <InputComponent title="Description" placeholder="Saya adalah seorang pemula" value={value.description!} setValue={(e)=> setValue({...value, description : e.target.value})} type="text"/>

           <button type="button" 
                    onClick={handleSubmit}
                    className={`w-full text-[#FFFFFF] bg-[rgb(6,6,6)] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6 ${loading? "btn btn-disabled" : ''}`}
                    disabled = {loading}> {loading? <div className="loading loading-spinner"/> : "Upload"}
            </button>
        </div>

    </div>
    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>  
    )
}

interface ModalEditContactINput {
    contact :  string | null | undefined,
    ig : string | null | undefined,
    github :  string | null | undefined,
    email :  string | null | undefined,
}

export const ModalEditContact = ({authUser, editProfile,loading}:ModalEditProfileProps) =>{
    const [value, setValue] = useState<ModalEditContactINput>({
        contact : authUser?.contact,
        ig : authUser?.ig,
        github : authUser?.github,
        email : authUser?.email,
    })

    const handleSubmit = async() =>{
        if(!value.contact||!value.ig) return toast.error(`Please Fill All Data`)
        await editProfile(authUser, value);
        (document.getElementById(`ModalEditContact`) as HTMLDialogElement).close()
    }

    return(
        <dialog id="ModalEditContact" className="modal w-screen ">
    <div className="modal-box">
        <div className="flex flex-col gap-2">
            <div className="text-center font-bold text-2xl pb-5"> Edit Contact</div>
          
           <InputComponent title="Whatsapp" placeholder="+6283817837   Pakai format +62!!" value={value.contact!} setValue={(e)=> setValue({...value, contact : e.target.value})} type="text"/>
           <InputComponent title="Instagram" placeholder="https://instagram.com " value={value.ig!} setValue={(e)=> setValue({...value, ig : e.target.value})} type="text"/>
           <InputComponent title="Email (optional)" placeholder="Richard@gmail.com" value={value.email!} setValue={(e)=> setValue({...value, email : e.target.value})} type="text"/>
           <InputComponent title="Github (optional)" placeholder="https://github.com" value={value.github!} setValue={(e)=> setValue({...value, github : e.target.value})} type="text"/>

           <button type="button" 
                    onClick={handleSubmit}
                    className={`w-full text-[#FFFFFF] bg-[rgb(6,6,6)] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6 ${loading? "btn btn-disabled" : ''}`}
                    disabled = {loading}> {loading? <div className="loading loading-spinner"/> : "Upload"}
            </button>
        </div>

    </div>
    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>        
    )
}

interface ModalChangePassInput {
    pass : string|null;
    newPass : string|null;
}

export const ModalChangePassword = ({authUser}:{ authUser : AuthUserTypes|null,}) =>{
    const {changePass, isLoading} = useChangePass()
    const [value, setValue] = useState<ModalChangePassInput>({
        pass : null, 
        newPass : null
    })

    const handleSubmit = async() =>{
        if(!value.newPass||!value.pass) return toast.error(`Please Fill All Fields`)
        await changePass(value.newPass, value.pass, authUser?.id as string);
    }

    return(
        <dialog id="ModalChangePass" className="modal w-screen ">
    <div className="modal-box">
        <div className="flex flex-col gap-2">
            <div className="text-center font-bold text-2xl pb-5"> Edit Profile</div>
          
           <InputComponent title="Password" placeholder="*******"  value={value.pass!} setValue={(e)=> setValue({...value, pass : e.target.value})} type="text"/>

           <InputComponent title="New Password" placeholder="New Password" value={value.newPass!} setValue={(e)=> setValue({...value, newPass : e.target.value})} type="text"/>

           <button type="button" 
                    onClick={handleSubmit}
                    className={`w-full text-[#FFFFFF] bg-[rgb(6,6,6)] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6 ${isLoading? "btn btn-disabled" : ''}`}
                    disabled = {isLoading}> {isLoading? <div className="loading loading-spinner"/> : "Change"}
            </button>
        </div>

    </div>
    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>        
    )
}



const InputComponent = ({title, type, placeholder, value, setValue} : InputComponentProps) =>{
    return (
   <div className="pb-2">
       <label className="block mb-2 text-sm font-medium text-[#111827]">{title}</label>
       <div className="relative text-gray-400">
           <input type={type}
                   className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-[100%] p-2.5 rounded-l-lg py-3 px-4" 
                   placeholder={placeholder}
                   value={value!}
                   onChange={setValue}/>
       </div>
   </div>
    )
}