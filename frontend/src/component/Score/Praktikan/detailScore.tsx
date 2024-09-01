const DetailScoreModal = ({detailScore} : { detailScore : DetailScorePraktikum|null}) => {
  if(!detailScore) return(
    <dialog id={`ModalDetailScore`} className="modal w-screen ">
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
    <dialog id={`ModalDetailScore`} className="modal w-screen ">
      <div className="modal-box">
          <div className="flex flex-col text-center">
              <h3 className="font-bold text-lg dark:text-[#ffa31a]">{`E-${detailScore?.noJudul}`}</h3>
              <p className="">{detailScore.aslab}</p>
          </div>
          <div className="flex flex-col text-center">
              <h3 className="font-bold text-lg py-5 dark:text-white">Detail Score</h3>
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
              <h3 className="font-bold text-center mt-5 dark:text-white">Comment</h3>
             <div className="bg-gray-200 border mt-1 border-gray-400 rounded-sm p-2 dark:bg-[#1b1b1b] dark:border-[#808080]">
               {detailScore.comment}
             </div>
          </div>
      </div>
          
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>  
)}
  
  export default DetailScoreModal