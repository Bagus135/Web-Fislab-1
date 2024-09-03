import { Info } from "lucide-react"

const RedirectedPage = ({url} : {url : string}) => {
    return (
        <div className = "flex flex-col justify-center items-center p-2 px-5">
            <div className="bg-white w-full border-t-4 border-r-4 border-blue-900 rounded-b text-teal-900 px-4 py-3 shadow-md dark:border-[#ffa31a] dark:text-[#ffa31a]" role="alert">
                <div className="flex p-2">
                    <div className="px-2">
                        <Info />
                    </div>
                    <div className="w-full">
                        <p className="font-bold text-xl border-b-2 text-blue-900 dark:border-[#ffa31a] border-blue-900 w-full dark:text-[#ff7d12]">Redirected</p>
                        <p className="text-sm pt-1">You will be redirected to <a href={url}>{url} </a> <div className=" flex items-end loading loading-dots"/></p>
                    </div>
                </div>
            </div>
            <img src="https://media1.tenor.com/m/VuNe7PwAQqwAAAAd/mahiru-shiina.gif" alt="Shiina Mahiru" className="p-3 pt-5"/>
        </div>
    )
  }
  
  const Redirected =  ({url} : {url : string}) => {
      
      setTimeout(()=>{location.assign(url)      
      }, 3500)
      
      return (
          <>
            <RedirectedPage url={url}/>
          </>
      )
  }
  
  export default Redirected