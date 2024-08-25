import useGetNilai from "../Score/Praktikan/useGetNilai";

const StatCard = () => {
    const { nilai, isLoading } = useGetNilai();
    
    let NilaiTotal : number|null = null 
    let nNilai  = 0
    let rerataNilai : number|null = null
    let kelompokId : number|null = null

    const a = [...Array(10)].map((_, idx) => {
        
        if (!nilai || !nilai[`praktikum${idx+1}`]) return null; // Check if property exists
        
        const detailScorePraktikum = nilai[`praktikum${idx+1}`] as DetailScorePraktikum
        kelompokId = detailScorePraktikum.kelompokId

        if(!nilai[`praktikum${idx+1}`].nilaiTotal) return null
        NilaiTotal = NilaiTotal! + detailScorePraktikum.nilaiTotal!
        nNilai = nNilai + 1
    })

    if(NilaiTotal) rerataNilai = NilaiTotal!/nNilai

  return (
    <div className='flex flex-row justify-stretch gap-5 p-5'>
        <div className="flex items-center p-4 bg-white rounded shadow-[1px_2px_2px_2px_rgba(0,0,0,0,1)] shadow-gray-300  w-full">
            {isLoading? 
            <>
            <div className="flex justify-center items-center w-full">
                <div className="loading loading-dots size-5"/>
            </div>
            </>
            :
            <div className="bg-gray-300 flex flex-shrink-0 items-center md:text-xl font-bold justify-center h-12 w-10 rounded">
                {!kelompokId? '-' : kelompokId}
            </div>
            }
            <div className="flex-grow flex flex-col ml-4 ">
                <span className="text-sm md:text-xl font-bold top-0 pt-0">Kelompok</span>
                <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-xs md:text-sm">Apakah kelompokmu hoki?</span>
                </div>
            </div>
        </div>
        
        <div className="flex items-center p-4 bg-white rounded w-full shadow-[1px_2px_2px_2px_rgba(0,0,0,0,1)] shadow-gray-300 ">
            {isLoading? 
            <><div className="flex justify-center items-center w-full">
                <div className="loading loading-dots size-5"/>
            </div>
            </>
            :
            <>
            <div className="bg-gray-300 flex flex-shrink-0 items-center  font-bold justify-center h-12 w-10 rounded md:text-xl">
                {!rerataNilai?  '-' : rerataNilai }
            </div>
                <div className="flex-grow flex flex-col ml-4 ">
                    <span className="text-sm md:text-xl font-bold top-0 pt-0">Nilai Rerata</span>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-xs md:text-sm">Mainnya Hebat!!</span>
                        <span className="text-green-500 text-sm font-semibold ml-2"></span>
                    </div>
                </div>
            </>
        }
        </div>

</div>
  )
}

export default StatCard