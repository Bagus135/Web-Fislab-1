import { ReactNode, useState } from "react"
import useGetAslabSession from "./useGetAslabSession"
import JudulPraktikum from "../../../utils/JudulPraktikum";
import { SquarePlus } from "lucide-react";
import { ModalDetailScore, ModalInputScore } from "./modalScore";
import Loading from "../../Other/Loading";
import ProfileModal from "../../Profile/ProfileModal/ProfileModal";
import useGetProfile from "../../Profile/ProfileModal/useGetProfile";


const SortData = (Data : aslabScoringDetails[][]) => {
  const groupedArr: { [key: number]: { [key: number]: aslabScoringDetails[] } } = Data.flat().reduce((acc, obj) => {
    const keyB = obj.noJudul;
    const keyA = obj.kelompokId;
    if (!acc[keyB]) {
      acc[keyB] = {};
    }
    if (!acc[keyB][keyA]) {
      acc[keyB][keyA] = [];
    }
    acc[keyB][keyA].push(obj);
    return acc;
  }, {});
  
  const result: aslabScoringDetails[][][] = Object.values(groupedArr).map(group => {
    return Object.values(group);
  });

   return result
}

export const SelectPraktikan = () =>{
  const [selectPraktikan, useSelectPraktikan] = useState<aslabScoringDetails|null>(null)
  const GetPraktikan = (data : aslabScoringDetails) =>{
    useSelectPraktikan(data)
  }
  return{selectPraktikan, GetPraktikan}
}

const Score = () => {
    const {AslabScoringList, isLoading, setTrigger, trigger} = useGetAslabSession()
    const {Profile, getProfile, isLoading:LoadingProfile} =useGetProfile()
    const {selectPraktikan, GetPraktikan} = SelectPraktikan();
    
    if(isLoading) return <Loading/>
    if(!AslabScoringList) return

    const sortScoringList = SortData(AslabScoringList)
     const scoreMap = sortScoringList.map((val1,idx1)=>{
        const Kelompok = val1.map((val2, idx2)=>{
          const Praktikan = val2.map((val3,idx3)=>{
            return <ListCard detail={val3} key={idx3} SelectPraktikan={GetPraktikan} GetProfile={getProfile}/>
          }) 
          return <CollapseKelompok key={idx2} noKelompok={val2[0].kelompokId} children={Praktikan}/>
        })
      return <CollapseJudul key={idx1} noJudul={val1[0][0].noJudul} children={Kelompok} />
     })  


    return (
      <>
        <ProfileModal profile={Profile} loading={LoadingProfile}/>
        <ModalDetailScore detailScore={selectPraktikan} id={`ModalDetailScoring`}/>
        <ModalInputScore detailScore={selectPraktikan as aslabScoringDetails} id="ModalInputScore" trigger={trigger} setTrigger={setTrigger}/>

        <div className="px-2">
       {
         sortScoringList.length == 0 ? <p className="text-center">
           --No Data-- 
         </p>
           :
        scoreMap
        }
        </div>
      </>
  )
}

const CollapseJudul = ({children , noJudul, } : {children? : ReactNode, noJudul:number}) =>{
  return(
    <div tabIndex={0} className="collapse collapse-arrow border-2 border-black bg-base-300  mt-5 ">
    <input type="checkbox" />
    <div className="collapse-title text-xl font-medium">
      <p>{JudulPraktikum(noJudul-1)}</p>
      <p>{`E-${noJudul}`}</p>
    </div>
    <div className="collapse-content bg-white">
      {children}
    </div>
  </div>
  )
}

const CollapseKelompok = ({children , noKelompok } : {children? : ReactNode, noKelompok:number}) =>{
  return(
    <div tabIndex={0} className="collapse collapse-arrow bg-base-300 border-2 border-black mt-2 ">
    <input type="checkbox" className="h-0" />
    <div className="collapse-title text-xl font-medium flex flex-col gap-2">{`Kelompok ${noKelompok}`}</div>
    <div className=" collapse-content bg-white p-2">
      {children}
    </div>
  </div>
  )
}

interface ListCardProp{
  detail : aslabScoringDetails, 
  SelectPraktikan : (selectPraktikan: aslabScoringDetails)=> void ,
  GetProfile: (id: string) => Promise<void>
}

const ListCard = ({detail, SelectPraktikan, GetProfile}:ListCardProp) =>{
  return(
    <>
    <div className="flex flex-row justify-between items-center rounded-md border border-black mt-2 h-12 p-2 hover:bg-gray-200">
      <div className="flex flex-row justify-between w-11/12 pr-2 items-center py-2">
        <div className="flex flex-col w-full"  onClick={()=>{
          GetProfile(detail.userId);
          (document.getElementById('ModalProfile') as HTMLDialogElement).showModal()!
          }}>
            <p className="font-bold">{detail.name}</p>
            <p>{detail.nrp}</p>
          </div>

              {detail.nilaiTotal === null ? 
                <p className="text-sm md:text-base">Not Scored</p> 
                : 
                <p  onClick={() =>{
                  SelectPraktikan(detail);
                  (document.getElementById(`ModalDetailScoring`) as HTMLDialogElement).showModal()}}>
                    {detail.nilaiTotal}
                </p> 
              } 
      </div>
      <SquarePlus onClick={() =>{
        SelectPraktikan(detail);
        (document.getElementById(`ModalInputScore`) as HTMLDialogElement).showModal()
      }}/>
    </div>
    </>
  )
}
export default Score