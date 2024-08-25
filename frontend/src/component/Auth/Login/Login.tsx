import React, { useState } from "react";
import { Lock, UserRound } from "lucide-react";
import useLogin from "./useLogin";


function Login(){
    const {login, isLoading} = useLogin();
    console.log(process.env.BACKEND);
    
    
    const [input, setInput] = useState({
        nrp : "",
        password : ""
    });

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        login(input.nrp, input.password);    
    }

    return(
<div className=" h-screen w-screen bg-neutral-50 mx-auto items-center p-4 justify-center flex ">
    <div className="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto p-8 md:p-10 2xl:p-12 3xl:p-14 bg-white rounded-2xl shadow-xl">
        <div className="flex flex-col justify-center mx-auto items-center gap-3 pb-4">
            <div>
                <img src="/logofisika.png" width="50" alt="Logo"/>
            </div>
             <h1 className="text-3xl font-bold text-black my-auto">LOGIN</h1>
        </div>

        <div className="text-sm font-serif text-center text-[#6c7483] pb-8 mx-auto">Welcome to the dark system of Fisika Laboratorium I</div>

        <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="pb-2">
                <label className="block mb-2 text-sm font-medium text-[#111827]">NRP</label>
                <div className="relative text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                        <UserRound />
                    </span> 
                    <input  name="nrp" 
                            id="email" 
                            className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4" 
                            placeholder="5001221060"
                            value={input.nrp}
                            onChange={(e)=> setInput({...input, nrp : e.target.value })}/>
                </div>
            </div>

            <div className="pb-6">
                <label className="block mb-2 text-sm font-medium text-[#111827]">Password</label>
                <div className="relative text-gray-400">
                    <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                        <Lock/>
                    </span> 
                    <input type="password"
                            name="password" 
                            id="password" 
                            placeholder="••••••••••"
                            className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring ring-transparent focus:ring-1 focus:outline-none focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"  
                            aria-autocomplete="list"
                            autoComplete="on"
                            value={input.password}
                            onChange={(e)=> setInput({...input, password : e.target.value})}/>
                </div>
            </div>
            
            <button type="submit" 
                    className={`w-full text-[#FFFFFF] bg-[rgb(6,6,6)] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-6 ${isLoading? "btn btn-disabled" : ''}`}
                    disabled = {isLoading}> {isLoading? <div className="loading loading-spinner"/> : "Login"}</button>
        </form>
    </div>
</div>
    )
}

export default Login