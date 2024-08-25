import { useState } from "react";
import { useAuthContext } from "../../../context/AuthContext";
import NotAuth from "../../Other/NotAuth";
import useGetUsers from "../../Users/useGetUsers";
import useAddAslabModul from "./useAddAslabModul";
import useGetAslabModul from "./useGetAslabModul";
import Loading from "../../Other/Loading";
import useDeleteAslabModul from "./useDeleteAslabModul";
import { Trash } from "lucide-react";
import useGetProfile from "../../Profile/ProfileModal/useGetProfile";
import ProfileModal from "../../Profile/ProfileModal/ProfileModal";

const AslabModul = () => {
    const{authUser} = useAuthContext()
    const {users} = useGetUsers()
    const {Profile, getProfile, isLoading:LoadingProfile} =useGetProfile()
    const {addJudulAslab,isLoading} = useAddAslabModul();
    const {trigger,setTrigger,dataJudul,isLoading : LoadAllGroup,} = useGetAslabModul();
    const {deleteJudulAslab,loadDelete } = useDeleteAslabModul()

    const [value, setValue] = useState<any>({
        uid: null,
        kodeJudul : null,
        noJudul : null,
        Judul : null,
        Aslab : null,
    })
    
    if(!users||!dataJudul) return <Loading/>
    if( (authUser?.role as number) < 3) return <NotAuth pageName="Praktikan Role"/> 

    
    
    const handleSelectName = (e : any) =>{
        const data = Aslab![Number(e.target.value)]
        setValue({...value, uid : data.id, Aslab : data.fullname})
    }

    const handleSelectJudul = (e : any) =>{
        const Judul = ['Pengenalan Alat Ukur', `Node and Mesh`, `Rangkaian Thevenin Norton`, `Karakteristik Dioda`, `Transistor Dwi Kutub`, `Rangkaian Non Linear`, `Op-Amp sebagai Penguat Sinyal`, `OPM`, `Rangkaian Filter Pasif`, `RLC`];

        setValue({...value,  noJudul : Number(e.target.value), kodeJudul : `E-${e.target.value}`, Judul : Judul[Number(e.target.value)-1]})
    } 
    
    const handleSubmit = async (e : React.FormEvent) =>{
        e.preventDefault();
        await addJudulAslab(value);
        setTrigger(!trigger);
        
    }
    
    const handleSubmitDelete = async (id : string) =>{
        await deleteJudulAslab(id);
        setTrigger(!trigger);
        
    }
    
    const Aslab = users?.filter((value) => value.role >= 2)
    Aslab.sort((a,b)=>{
        if(Number(a.nrp)< Number(b.nrp)) return -1
        if(Number(a.nrp)> Number(b.nrp)) return 1
        return 0
    })
    const dataGroupMap = dataJudul.map((val, idx)=>{
        return (
            <div className="rounded-md w-full shadow-[1px_2px_2px_2px_rgba(0,0,0,0,1)] shadow-gray-300  flex flex-row items-center border border-black gap-1 p-2" key={idx}>
                <div className="text-center w-[10%]">{val.kodeJudul}</div>
                <div className="text-center w-[45%]">{val.judul}</div>
                <div className="text-center w-[35%]" onClick={()=>{
                    getProfile(val.idAslab);
                    (document.getElementById('ModalProfile') as HTMLDialogElement).showModal()!
                    }} >
                        {val.Aslab}
                </div>
                <div onClick={() => handleSubmitDelete(val.id)} className="w-[10%]">
                    { loadDelete ? 
                        <div className="loading loading-dots"/>
                            :  
                        <Trash className=" text-red-500 font-bold rounded-md border-2 border-red-500 hover:scale-110 transition duration-500"/>
                    }
                </div>
        </div>
        )
    })

    return (
    <>
     <ProfileModal profile={Profile} loading={LoadingProfile}/>
    <div className="w-full p-2">
    <h1 className="font-bold text-2xl text-center mt-5"> Judul Aslab</h1>
        <form className='w-full flex flex-col items-center justify-start  mt-5 p-2' onSubmit={handleSubmit}>
        
        <div className="pb-2 w-full">
            <label className="pl-2 block mb-2 text-sm font-medium text-[#111827]">Aslab</label>
            <div className="relative w-full">
                <select onChange={handleSelectName} className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3">
                <option value={undefined}>-----</option>
                {Aslab!.map((val : AllUsers, idx : number)=>{ return (
                    <option value={idx} key={idx}>
                    {`${val.fullname} - ${val.nrp}`}
                    </option>
                    )
                    })}
                </select>
            </div>
        </div>
        
        <div className="pb-2 w-full">
            <label className="pl-2 block mb-2 text-sm font-medium text-[#111827]">Judul</label>
            <div className="relative w-full">
                <select  id="nameSelect" onChange={handleSelectJudul} className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3">
                <option value={undefined}>-----</option>
                {[...Array(10)].map((_, idx : number)=>{ return (
                <option value={idx+1} key={idx+1}>{`E-${idx+1}`}</option>
                    )
                })}
                </select>
            </div>
        </div>

        <button type="submit"
                    className={`mt-5 text-[#FFFFFF] bg-[rgb(6,6,6)] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full mb-6 hover:bg-gray-800 ${isLoading? "btn btn-disabled" : ''}`}
                    disabled = {isLoading}> 
                            {isLoading? <div className="loading loading-spinner"/> : "Add"}
        </button>
      </form>
      <div className="flex flex-col justify-stretch items-center gap-3 p-2">
            <div className="flex flex-row justify-around bg-black border-2  text-white w-full h-10 items-center font-bold px-3 text-center text-sm md:text-base">
                <p className="w-[10%]">Kode</p>
                <p className="w-[45%]">Judul</p>
                <p className="w-[35%]">Aslab</p>  
                <p className="w-[10%]"></p>  
            </div>
            {LoadAllGroup? 
            <>
             <div className="flex justify-center">
                <div className="loading loading-spinner"></div>
             </div>
            </>
            :
            null
            }
              { dataJudul.length == 0 ? <p className="text-center">--No Data--</p> : dataGroupMap}
            </div>
        </div>
</>
    )
}

export default AslabModul