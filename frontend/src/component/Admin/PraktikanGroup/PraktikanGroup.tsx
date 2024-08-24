import {useState } from "react"
import useGetUsers from "../../Users/useGetUsers"
import { useAuthContext } from "../../../context/AuthContext"
import NotAuth from "../../Other/NotAuth"
import useAddGroupPraktikan from "./useAddGroup"
import useGetAllGroupPraktikan from "./useGetGroup"
import Loading from "../../Other/Loading"
import toast from "react-hot-toast"

const PraktikanGroup = () => {
    const{authUser} = useAuthContext()
    const {users} = useGetUsers()
    const {addGroup,isLoading} = useAddGroupPraktikan();
    const {trigger,setTrigger,dataGroup,isLoading : LoadAllGroup,} = useGetAllGroupPraktikan();
    
    const [value, setValue] = useState({
        uid: '',
        nrp : '',
        nomor : 0,
        fullname : "",
    })
    
    if(!users||!dataGroup) return <Loading/>
    if( (authUser?.role as number) < 3) return <NotAuth pageName="Praktikan Role"/> 

    const praktikan = users?.filter((value) => value.role === 1)
    praktikan.sort((a,b)=>{
        if(Number(a.nrp)< Number(b.nrp)) return -1
        if(Number(a.nrp)> Number(b.nrp)) return 1
        return 0
    })
    const dataGroupMap = dataGroup.map((val, idx)=>{
        return (
        <div className="flex flex-row text-center rounded shadow-[1px_2px_2px_2px_rgba(0,0,0,0,1)] shadow-gray-300 border border-black w-full" key={idx}>
            <div className="w-[10%]">{val.nomorKel}</div>
            <div className="w-[45%]">{val.nrp}</div>
            <div className="w-[45%]">{val.fullname}</div>
        </div>
        )
    })


    const handleSelectName = (e : any) =>{
        const data = praktikan![Number(e.target.value)]
        setValue({...value, uid : data.id, fullname : data.fullname, nrp : data.nrp})
    } 

    const handleSubmit = async (e : React.FormEvent) =>{
        e.preventDefault();
        if(value.uid==='') return toast.error('Please choose the praktikan')
        if(value.nomor===0) return toast.error('Please choose the nomor group')
        await addGroup(value);
         setTrigger(!trigger);
        
    }

    return (
    <>
<div className="w-full">
    <h1 className="font-bold text-2xl text-center mt-3"> Praktikan Grouping</h1>
      <form className='flex flex-col items-center justify-stretch p-3 mt-3 w-full ' onSubmit={handleSubmit}>
        
        <div className="pb-2 w-full">
            <label className="pl-2 block mb-2 text-sm font-medium text-[#111827]">Praktikan</label>
            <div className="relative w-full">
                <select onChange={handleSelectName} className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3">
                    <option value={undefined}>-----</option>
                    {praktikan!.map((val : AllUsers, idx : number)=>{ return (
                        <option value={idx} key={idx}>
                            <div>{`${val.fullname}   -    ${val.nrp}`}</div>
                        </option>
                    )
                    })}
                </select>
            </div>
        </div>

        <div className="pb-2 w-full">
            <label className="pl-2 block mb-2 text-sm font-medium text-[#111827]">Nomor Kelompok</label>
            <div className="relative w-full">
                <select  id="nameSelect" onChange={(e)=> setValue({...value, nomor : Number(e.target.value)})} className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3">
                    <option value={undefined}>-----</option>
                    {[...Array(20)].map((_, idx : number)=>{ return (
                        <option value={idx+1} key={idx+1}>{idx+1}</option>
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
                <p className="w-[10%]">No</p>
                <p className="w-[45%]">NRP</p>
                <p className="w-[45%] ml-2">Nama</p>  
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
            {dataGroupMap}
        </div>
    </div> 
</>
    )
}

export default PraktikanGroup