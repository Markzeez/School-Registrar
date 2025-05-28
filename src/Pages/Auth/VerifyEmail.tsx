import React from "react"


const VerifyEmail: React.FC = ()=>{
   
    return (

      <div className="flex flex-col items-center justify-center mx-auto w-[420px] h-[280px] hover:shadow-lg shadow-md bg-white rounded-[15px] mt-12 gap-6">

           <img className="w-[48px] h-[48px]"  src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717539775/Featured_icon_epkbqo.svg" alt="verify email" />
          <h1 className="text-2xl text-[#1D1A22] font-semibold">Verify Email</h1>
        <div className="flex flex-col items-center justify-center text-[#475467]">


        <p className="text-xs">Please note that a otp has been sent to your Email, </p>
        <p className="text-xs">kindly verify Email to complete registration</p>

        </div>
    
        <div className="flex  flex-row items-center justify-center gap-4 w-[352px] h-[45px]">
        <button className="w-[170px] h-[45px] rounded-[50px] text-blue-400 bg-white border border-stone-600 hover:bg-gray-300 transition-colors duration-300">Cancel</button>
        <button className="w-[170px] h-[45px] rounded-[50px] bg-blue-400 hover:bg-blue-600 transition-colors duration-300 text-white">Confirm</button>
        </div>
      </div>
    )
  
}

export default VerifyEmail;
