import { useState } from 'react';
import Loading from '../../Other/Loading';
import useGetNilai from './useGetNilai'
import DetailScoreModal from './detailScore';
import JudulPraktikum from '../../../utils/JudulPraktikum';
import useGetProfile from '../../Profile/ProfileModal/useGetProfile';
import ProfileModal from '../../Profile/ProfileModal/ProfileModal';

const PraktikanScore = () => {
    const { nilai, isLoading } = useGetNilai();
    const {Profile, getProfile, isLoading:LoadingProfile} = useGetProfile();
    const [detailScore, setDetailScore] = useState<DetailScorePraktikum|null>(null)
    

    if (isLoading) return <Loading/>
    if (!nilai) return <p className="text-center">{`Not Scored`}</p>
    
    const dataMap = [...Array(10)].map((_, idx) => {
        
        if (!nilai || !nilai[`praktikum${idx+1}`]) return null; // Check if property exists
        
        const detailScorePraktikum = nilai[`praktikum${idx+1}`] as DetailScorePraktikum
        return (
            <div key={idx} className="flex flex-row justify-around bg-white border-2 border-black shadow-md  rounded-md  w-full h-20 items-center font-semibold text-center text-sm md:text-base py-7 dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080]">
                <p className="w-[15%]">{`E-${idx+1}`}</p>
                <p className="w-[30%]">{JudulPraktikum(idx)}</p>
                <p className="w-[35%]" onClick={()=>{
                    getProfile(detailScorePraktikum.aslabId);
                    (document.getElementById('ModalProfile') as HTMLDialogElement).showModal()!
                }} >
                    {detailScorePraktikum.aslab}
                </p>
                
                <p className="w-[20%] flex flex-col">
                    { !detailScorePraktikum.nilaiTotal?
                        <span className="text-center">{`Not Scored`}</span>
                    :
                    <>
                        <span className="" onClick={()=>{
                                setDetailScore(detailScorePraktikum); 
                                (document.getElementById('ModalDetailScore') as HTMLDialogElement).showModal()! 
                            }}>{`${detailScorePraktikum.nilaiTotal}`}</span>
                    </>
                    }
                    </p>
      </div>
    
        )
    }) 

    return (
    <>
        <ProfileModal profile={Profile} loading={LoadingProfile}/>
        <DetailScoreModal detailScore={detailScore}/>
        <div className="flex flex-col justify-stretch items-center gap-3 p-2">
            <div className="flex flex-row justify-around bg-black border-2  text-white w-full h-10 items-center font-bold px-1 text-center text-sm md:text-base dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080] dark:text-[#ffa31a]">
                <p className="pl-2 w-[15%]">Kode</p>
                <p className="w-[30%]">Judul</p>
                <p className="w-[35%]">Aslab</p>
                <p className="w-[20%]">Score</p>
            </div>
                {dataMap}
        </div>
    </>
)
}

export default PraktikanScore