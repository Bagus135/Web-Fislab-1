import { useState } from "react"
import useEditScore from "./useEditScore";
import toast from "react-hot-toast";

export const ModalDetailScore = ({detailScore, id}:{detailScore : aslabScoringDetails|null, id:string}) => {
  if(!detailScore) return(
  <dialog id={id} className="modal w-screen ">
    <div className="modal-box">
        <div className="flex flex-col gap-2">
            <p className="py-4">Loading...</p>
        </div>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>  
  )

  const ComponentListScore = ({title, value} : {title : string, value : number|null})=>{
    return (
        <div className="flex flex-row justify-between py-1">
            <p className="">{title}</p>
            <p className="">{value}</p>
        </div>
    )
  }
    return (
  <dialog id={id} className="modal w-screen ">
    <div className="modal-box dark:bg-[#1b1b1b]">
        <div className="flex flex-col text-center">
            <h3 className="font-bold text-lg dark:text-[#ffa31a]">{detailScore?.name}</h3>
            <p className="">{`${detailScore.nrp} - ${detailScore?.kelompokId}`}</p>
        </div>
        <div className="flex flex-col text-center">
            <h3 className="font-bold text-lg py-4">Detail Score</h3>
        </div>
        <ComponentListScore title="PreLab" value={detailScore.PreLab}/>
        <ComponentListScore title="InLab" value={detailScore.InLab}/>
        <ComponentListScore title="Abstrak" value={detailScore.Abstrak}/>
        <ComponentListScore title="Pendahuluan" value={detailScore.Pendahuluan}/>
        <ComponentListScore title="Metodologi" value={detailScore.Metodologi}/>
        <ComponentListScore title="Pembahasan" value={detailScore.Pembahasan}/>
        <ComponentListScore title="Kesimpulan" value={detailScore.Kesimpulan}/>
        <ComponentListScore title="Format" value={detailScore.Format}/>
        <div className="flex flex-row justify-between py-1">
            <p className="font-bold dark:text-[#ffa31a]">Total Score</p>
            <p className="font-bold dark:text-[#ffa31a]">{detailScore.nilaiTotal}</p>
        </div>
    
        
        <div className="flex flex-col">
            <h3 className="font-bold text-center mt-5 mb-2">Comment</h3>
           <div className="bg-gray-200 border-2 border-gray-400 rounded-sm p-2 dark:bg-[#1b1b1b] dark:border-[#808080]">
             {detailScore.comment}
           </div>
        </div>
    </div>
        
    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>  
)}

interface InputComponentProps{
    title:string;
    type:string; 
    placeholder : string, 
    value : string|undefined, 
    setValue : React.ChangeEventHandler<HTMLInputElement> | undefined
}

interface InputScore{
    PreLab :string|undefined;
    InLab :string|undefined ;
    Abstrak :string|undefined ;
    Pendahuluan :string|undefined ;
    Metodologi :string|undefined ;
    Pembahasan :string|undefined ;
    Kesimpulan :string|undefined ;
    Format :string|undefined ; 
    comment : string|undefined;
}

export const ModalInputScore = ({detailScore, id, trigger, setTrigger}:{detailScore : aslabScoringDetails, id:string, trigger:boolean, setTrigger : (trigger : boolean)=> void}) => {
    
    const [value, setValue] = useState<InputScore>({
        PreLab :undefined,        
        InLab :undefined,
        Abstrak :undefined,
        Pendahuluan :undefined,
        Metodologi :undefined,
        Pembahasan :undefined,
        Kesimpulan :undefined,
        Format :undefined, 
        comment : undefined,
})
    
    const {editScore,isLoading} = useEditScore()
    if(!detailScore) return (
        <dialog id={id} className="modal w-screen ">
            <div className="modal-box"></div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>  
    )
    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();
        
        if(value.PreLab === undefined|| value.InLab === undefined || value.Abstrak === undefined || value.Pendahuluan ===  undefined|| value.Metodologi ===  undefined|| value.Pembahasan ===undefined|| value.Kesimpulan=== undefined|| value.Format === undefined){
          return toast.error(`Please fill all fields`)
        }

        const newValue = ChangeTypeNumber(value);

        if(0 > newValue.PreLab || newValue.PreLab > 30) return toast.error(`Nilai Prelab Berkisar 0-30`)
        if(0 > newValue.InLab || newValue.InLab > 10) return toast.error(`Nilai Inlab Berkisar 0-10`)
        if(0 > newValue.Abstrak || newValue.Abstrak > 5) return toast.error(`Nilai Abstrak Berkisar 0-5`)
        if(0 > newValue.Pendahuluan || newValue.Pendahuluan > 10) return toast.error(`Nilai Pe.Pendahuluan Berkisar 0-10`)
        if(0 > newValue.Metodologi || newValue.Metodologi > 5) return toast.error(`Nilai Metodologi Berkisar 0-5`)
        if(0 > newValue.Pembahasan || newValue.Pembahasan > 30) return toast.error(`Nilai Pembahasan Berkisar 0-30`)
        if(0 > newValue.Kesimpulan || newValue.Kesimpulan > 5) return toast.error(`Nilai Kesimpulan Berkisar 0-5`)
        if(0 > newValue.Format || newValue.Format > 5) return toast.error(`Nilai Format Berkisar 0-5`)
        
        const nilaiTotal = (newValue.PreLab + newValue.InLab + newValue.Abstrak + newValue.Pendahuluan + newValue.Metodologi + newValue.Pembahasan + newValue.Kesimpulan + newValue.Format);

        await editScore(detailScore, newValue,nilaiTotal);
        (document.getElementById(`ModalInputScore`) as HTMLDialogElement).close()
        setTrigger(!trigger)
    }

  return (
  <dialog id={id} className="modal w-screen ">
    <div className="modal-box h-[75%]">
        <p className="text-xl text-center font-semibold dark:text-[#ffa31a]">{detailScore.name}</p>
        <p className="pb-5 text-l text-center">{detailScore.nrp}</p>
        <h3 className="font-bold text-2xl pb-5 text-center">Input Score</h3>
    <div className="flex flex-col">
            <InputComponent title="Pre Lab" placeholder="0-30" type="number" 
                            value={value.PreLab} 
                            setValue={(e)=> setValue({...value, PreLab : e.target.value })}/>
            
            <InputComponent title="In Lab" placeholder="0-10" type="number" 
                            value={value.InLab} 
                            setValue={(e)=> setValue({...value, InLab : e.target.value })}/>
            
            <InputComponent title="Abstrak" placeholder="0-5" type="number" 
                            value={value.Abstrak} 
                            setValue={(e)=> setValue({...value, Abstrak : e.target.value })}/>
            
            <InputComponent title="Pendahuluan" placeholder="0-10" type="number" 
                            value={value.Pendahuluan} 
                            setValue={(e)=> setValue({...value, Pendahuluan : e.target.value })}/>
            
            <InputComponent title="Metodologi" placeholder="0-5" type="number" 
                            value={value.Metodologi} 
                            setValue={(e)=> setValue({...value, Metodologi : e.target.value })}/>
            
            <InputComponent title="Pembahasan" placeholder="0-30" type="number" 
                            value={value.Pembahasan} 
                            setValue={(e)=> setValue({...value, Pembahasan : e.target.value })}/>
            
            <InputComponent title="Kesimpulan" placeholder="0-5" type="number" 
                            value={value.Kesimpulan} 
                            setValue={(e)=> setValue({...value, Kesimpulan : e.target.value })}/>
           
            <InputComponent title="Format" placeholder="0-5" type="number" 
                            value={value.Format} 
                            setValue={(e)=> setValue({...value, Format : e.target.value })}/>
                            
            <div className="pb-2">
                <label className="block mb-2 text-sm font-medium text-[#111827] dark:text-white">Comment</label>
                <div className="relative text-gray-400">
                    <input type='text'
                            className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4 h-20 dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080] dark:text-[#ffa31a]" 
                            placeholder='Kerja Bagus!!'
                            value={value.comment}
                            onChange={(e)=> setValue({...value, comment : e.target.value })}/>
                </div>
            </div>

            <button type="button" 
                    onClick={handleSubmit}
                    className={`w-full text-[#FFFFFF] bg-[rgb(6,6,6)] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6  dark:bg-[#ffa31a] mt-5 dark:text-black ${isLoading? "btn btn-disabled" : ''}`}
                    disabled = {isLoading}> {isLoading? <div className="loading loading-spinner"/> : "Submit"}</button>
        </div>
    </div>
    <form method="dialog" className="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>  
)}

const ChangeTypeNumber = (a : InputScore)=>{
 return {
    PreLab :Number(a.PreLab),        
    InLab :Number(a.InLab),
    Abstrak :Number(a.Abstrak),
    Pendahuluan :Number(a.Pendahuluan),
    Metodologi :Number(a.Metodologi),
    Pembahasan :Number(a.Pembahasan),
    Kesimpulan :Number(a.Kesimpulan),
    Format :Number(a.Format), 
    comment : a.comment,
 }
}


const InputComponent = ({title, type, placeholder, value, setValue} : InputComponentProps) =>{
     return (
    <div className="pb-2">
        <label className="block mb-2 text-sm font-medium text-[#111827] dark:text-white">{title}</label>
        <div className="relative text-gray-400 dark:text-white">
            <input type={type}
                    className="pl-2 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-[90%] p-2.5 rounded-l-lg py-3 px-4 dark:bg-[#1b1b1b] dark:shadow-[#292929] dark:border-[#808080] dark:text-[#ffa31a]" 
                    placeholder={placeholder}
                    value={value}
                    onChange={setValue}
                    onWheel={(e) => e.currentTarget.blur()}
                    />
        </div>
    </div>
     )
}