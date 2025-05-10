import React from "react";

const FailedCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-[420px] h-[430px] hover:shadow-lg shadow-md bg-white rounded-[15px] mt-12 gap-6 border border-red-500">
      <img
        className="w-[100px] h-[100px]"
        src="./images/error.png"
        alt="failed"
      />
      <h1 className="text-2xl text-[#1D1A22] font-semibold">ERROR!</h1>
    
      <div className="flex flex-row items-center justify-center gap-4 w-[352px] h-[45px]">
        <button className="w-[200px] h-[45px] rounded-[50px] bg-red-600 hover:bg-red-400 transition-colors duration-300 text-white">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default FailedCard;
