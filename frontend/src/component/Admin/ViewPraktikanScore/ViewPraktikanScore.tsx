import { CloudUpload, Trash } from "lucide-react";
import Loading from "../../Other/Loading";
import ProfileModal from "../../Profile/ProfileModal/ProfileModal";
import useGetProfile from "../../Profile/ProfileModal/useGetProfile";
import useGetScore from "./useGetScore"
import useSyncFinalScore from "./useSyncFinalScore";
import useResetFInalScore from "./useResetFInalScore";

const ViewPraktikanScore = () => {
    const {dataScores,isLoading}= useGetScore();
    const {Profile, getProfile, isLoading:LoadingProfile} =useGetProfile()
    const {isLoading:loadSync, syncScore} = useSyncFinalScore();
    const {isLoading : loadReset ,resetScore} = useResetFInalScore()

    if(isLoading) return <Loading/>
    if(!dataScores) return null
    
   const dataScoresMap= dataScores.map((val , idx)=>{
        let nilaiTotal : number|null = null
        let nama = '';
        let nrp = '';
        let n : number|null= null
        let nilaiRataRata : number|null = null
        const a = [...Array(10)].map((_,idx2)=>{
            const dataMap = val[`praktikum${idx2+1}`] as getViewPraktikumAdminRes
            if(!dataMap) return
            nama = dataMap.name
            nrp = dataMap.nrp
            if(!dataMap.nilaiTotal) return 
            nilaiTotal = nilaiTotal! + dataMap.nilaiTotal
            n = n!+1
        })
        if(n||nilaiTotal) nilaiRataRata = nilaiTotal!/n!
        return (
            <div className="rounded-md w-full shadow-[1px_2px_2px_2px_rgba(0,0,0,0,1)] shadow-gray-300  flex flex-row items-center border border-black gap-4 p-2 text-center" key={idx}>
                <div className="w-[25%]" 
                onClick={()=>{
                getProfile(val.userID);
                (document.getElementById('ModalProfile') as HTMLDialogElement).showModal()!
                }} >
                    {nama}
                </div>
                <div className="w-[25%]">{nrp}</div>
                <div className="w-[25%]">Kelompok-{val.kelompokid}</div>
                <div className="w-[25%]">{nilaiRataRata}</div>
            </div>
        )
    })

    const dataSyncScore= dataScores.map((val)=>{
        let nilaiTotal : number|null = null
        let nama = '';
        let nrp = '';
        let n : number|null= null
        let nilaiRataRata : number|null = null
        const a = [...Array(10)].map((_,idx2)=>{
            const dataMap = val[`praktikum${idx2+1}`] as getViewPraktikumAdminRes
            if(!dataMap) return
            nama = dataMap.name
            nrp = dataMap.nrp
            if(!dataMap.nilaiTotal) return 
            nilaiTotal = nilaiTotal! + dataMap.nilaiTotal
            n = n!+1
        })
        if(n||nilaiTotal) nilaiRataRata = nilaiTotal!/n!
        return {uid : val.userID, nrp : nrp, noKel : val.kelompokid, totalScore : nilaiRataRata, name : nama}
    })


    return (    
<>
    <ModalDelete resetScore={resetScore}/>
    <ProfileModal profile={Profile} loading={LoadingProfile}/>
    <div className="p-2 flex-col flex justify-stretch items-center gap-4">
        <div className="text-center font-bold text-2xl pt-5"> All Score Praktikan</div>
        {dataScores.length == 0 ? 
        <p className="text-center">
            ---No Data---
        </p>
        :
        dataScoresMap    
    }
        <div className="flex justify-between flex-row items-center w-full">
        <button
            onClick={async() => await syncScore(dataSyncScore)}
                    className={`mt-5 text-[#FFFFFF] bg-[rgb(6,6,6)] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  w-[25%] mb-6  flex justify-center hover:-translate-y-2 transition duration-500 hover:bg-gray-800 ${loadSync? "btn btn-disabled" : ''}`}
                    disabled = {loadSync}> 
                            {loadSync? <div className="loading loading-spinner"/> 
                            : 
                            <div className="w-full flex-col md:flex-row flex hover:-translate-y-2 transition duration-500 justify-center">
                                <CloudUpload className="w-full md:max-w-10"/>
                                <p className="pl-2">Sync</p>
                            </div>
                                }
                    </button>
        <button type="button"
                key={2}
            onClick={()=>(document.getElementById('ModalResetFinalScore') as HTMLDialogElement).showModal()!}
                    className={`mt-5 text-[#FFFFFF] bg-red-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium  flex justify-center hover:-translate-y-2 transition duration-500 rounded-lg text-sm px-5 py-2.5 text-center  w-1/5 mb-6 hover:bg-gray-800 ${loadReset? "btn btn-disabled" : ''}`}
                    disabled = {loadReset}> 
                            {loadReset? <div className="loading loading-spinner"/> 
                            : 
                            <div className="w-full flex-col md:flex-row flex justify-center hover:-translate-y-2 transition duration-500">
                                <Trash className="w-full md:max-w-10"/>
                                <p className=" text-center "> Reset</p>
                            </div>
                                }
                    </button>
        </div>
    </div>
</>
  )
}

const ModalDelete = ({resetScore}:{resetScore : ()=> Promise<void>}) =>{    
    return(
    <dialog id="ModalResetFinalScore" className="modal w-screen">
        <div className="modal-box">
            <div className="justify-center flex flex-col items-center p-2 gap-3">
                <p className=" text-2xl font-bold text-center">Warning!</p> 
                <p className="text-center">Are you sure to reset?</p> 
                <button
            onClick={()=> {resetScore();
                (document.getElementById('ModalResetFinalScore') as HTMLDialogElement).close()!
            }}
                    className='mt-5 text-[#FFFFFF]  bg-red-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  w-1/5 mb-6 hover:bg-red-800'>
                        Reset
                    </button>
            </div>
        </div>
        <form method="dialog" className="modal-backdrop">
            <button>Close</button>
        </form>
    </dialog>  
    )
}

export default ViewPraktikanScore