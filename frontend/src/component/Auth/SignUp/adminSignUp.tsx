import { useState } from "react"
import GenderCheckBox from "./genderCheckbox";
import { Lock, LockKeyhole, PenLine, SignatureIcon, UserRound } from "lucide-react";
import useAdminSignUp from "./useAdminSignUp";


const AdminSignUp = () => {
    const {signUp,isLoading} = useAdminSignUp();
    const [input, setInput] = useState<AdminSignUpInputs>({
        nrp : "",
        fullname : "",
        password : "",
        confirmPassword : "",
        gender : "",
        signature : ""
    }) 

    const handleGenderCheckbox = (gender : 'male' | 'female') =>{
        setInput({...input, gender})
    }

    const handlerSubmit = (e : React.FormEvent) =>{
        e.preventDefault();
        signUp(input)
    }

  return (
    <div className="mx-auto items-center p-4 justify-center flex ">
    <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-4 md:p-6 2xl:p-8 3xl:p-10 bg-white rounded-2xl shadow-xl dark:bg-[#1b1b1b] dark:text-[#808080]">
        <div className="flex flex-col justify-center mx-auto items-center gap-3 pb-4">
            <div>
                <img src="/logofisika.png" width="50" alt="Logo"/>
            </div>
             <h1 className="text-3xl font-bold text-black my-auto dark:text-white">ADMIN SIGN UP</h1>
        </div>

        <div className=" text-sm font-serif text-center text-[#808080] pb-8 mx-auto">Are you ready for Fisika Laboratorium I? </div>

        <form className="flex flex-col" onSubmit={handlerSubmit}>

            <div className="pb-2">
                <label className="block mb-2 text-sm font-medium text-[#111827] dark:text-[#808080]">Signature</label>
                <div className="relative text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                         <SignatureIcon/>
                    </span> 
                    <input  name="Signature" 
                            id="Signature" 
                            className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4 dark:bg-[#292929]" 
                            placeholder="Your Signature"
                            aria-autocomplete="list"
                            autoComplete="on"
                            value={input.signature}
                            onChange={(e)=> setInput({...input, signature : e.target.value })}/>
                </div>
            </div>
            
            <div className="pb-2">
                <label className="block mb-2 text-sm font-medium text-[#111827] dark:text-[#808080]">NRP</label>
                <div className="relative text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                         <UserRound/>
                    </span> 
                    <input  name="nrp" 
                            id="nrp" 
                            className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4 dark:bg-[#292929]" 
                            placeholder="5001221060"
                            aria-autocomplete="list"
                            autoComplete="on"
                            value={input.nrp}
                            onChange={(e)=> setInput({...input, nrp : e.target.value })}/>
                </div>
            </div>

            <div className="pb-2">
                <label className="block mb-2 text-sm font-medium text-[#111827] dark:text-[#808080]">Fullname</label>
                <div className="relative text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                        <PenLine/>
                    </span> 
                    <input type="text"
                            name="fullname" 
                            id="fullname" 
                            placeholder="Hugo Walkers"
                            className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4 dark:bg-[#292929]"  
                            value={input.fullname}
                            aria-autocomplete="list"
                            autoComplete="on"
                            onChange={(e)=> setInput({...input, fullname : e.target.value})}/>
                </div>
            </div>

            <div className="pb-2">
                <label className="block mb-2 text-sm font-medium text-[#111827] dark:text-[#808080]">Password</label>
                <div className="relative text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                        <Lock/>
                    </span> 
                    <input type="password"
                            name="password" 
                            id="password" 
                            placeholder="••••••••••"
                            className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4 dark:bg-[#292929]"  
                            value={input.password}
                            onChange={(e)=> setInput({...input, password : e.target.value})}/>
                </div>
            </div>

            <div className="pb-2">
                <label className="block mb-2 text-sm font-medium text-[#111827] dark:text-[#808080]">Confirm Password</label>
                <div className="relative text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                         <LockKeyhole />
                    </span> 
                    <input type="password"
                            name="confirmpassword" 
                            id="confirmpassword" 
                            placeholder="••••••••••"
                            className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4 dark:bg-[#292929]"  
                            value={input.confirmPassword}
                            onChange={(e)=> setInput({...input, confirmPassword : e.target.value})}/>
                </div>
            </div>
            
            <div className="pb-6">
            <GenderCheckBox selectedGender={input.gender} onCheckboxChange={handleGenderCheckbox}/>
            </div>
            
            <button type="submit" 
                    className={`w-full text-[#FFFFFF] bg-[rgb(6,6,6)] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6 dark:bg-[#ffa31a] dark:text-black dark:hover:bg-[#ff7d12] ${isLoading? "btn btn-disabled" : ''}`}
                    disabled = {isLoading}>{ isLoading? <div className="loading loading-spinner"/> : 'Sign Up'}</button>
        </form>
    </div>
</div>
  )
}

export default AdminSignUp