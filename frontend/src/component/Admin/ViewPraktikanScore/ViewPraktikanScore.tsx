import { CloudUpload } from "lucide-react";
import Loading from "../../Other/Loading";
import ProfileModal from "../../Profile/ProfileModal/ProfileModal";
import useGetProfile from "../../Profile/ProfileModal/useGetProfile";
import useGetScore from "./useGetScore"
import useSyncFinalScore from "./useSyncFinalScore";

const ViewPraktikanScore = () => {
    const {dataScores,isLoading}= useGetScore();
    const {Profile, getProfile, isLoading:LoadingProfile} =useGetProfile()
    const {isLoading:loadSync, syncScore} = useSyncFinalScore()
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
        <div className="flex justify-end items-center w-full">
        <button
            onClick={async() => await syncScore(dataSyncScore)}
                    className={`mt-5 text-[#FFFFFF] bg-[rgb(6,6,6)] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  w-1/5 mb-6 hover:bg-gray-800 ${loadSync? "btn btn-disabled flex justify-center hover:-translate-y-2 transition duration-500" : ''}`}
                    disabled = {loadSync}> 
                            {loadSync? <div className="loading loading-spinner"/> 
                            : 
                            <div className="w-full flex-row flex justify-center hover:-translate-y-2 transition duration-500">
                                <CloudUpload/>
                                <p className="pl-2"> Synchronize</p>
                            </div>
                                }
                    </button>
        </div>
    </div>
</>
  )
}

export default ViewPraktikanScore