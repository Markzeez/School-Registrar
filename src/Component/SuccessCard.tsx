import React from "react";

const SuccessCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-[420px] h-[430px] hover:shadow-lg shadow-md bg-white rounded-[15px] mt-12 gap-6 border border-green-600">
      <img
        className="w-[100px] h-[100px]"
        src="./images/success_7518748.png"
        alt="verify email"
      />
      <h1 className="text-2xl text-[#1D1A22] font-semibold">SUCCESS!</h1>
      
      <div className="flex flex-row items-center justify-center gap-4 w-[352px] h-[45px]">
        <button className="w-[200px] h-[45px] rounded-[50px] bg-green-600 hover:bg-green-400 transition-colors duration-300 text-white">
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessCard;
