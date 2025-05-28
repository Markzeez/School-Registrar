import React from "react";

const SuccessCard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-[420px] h-[430px] hover:shadow-lg shadow-md bg-white rounded-[15px] mt-12 gap-6 border border-blue-500">
      <img
        className="w-[100px] h-[100px]"
        src="./images/error.png"
        alt="failed"
      />
      <h1 className="text-2xl text-[#1D1A22] font-semibold">Successfully!</h1>
    
      <div className="flex flex-row items-center justify-center gap-4 w-[352px] h-[45px]">
        <button className="w-[200px] h-[45px] rounded-[50px] bg-blue-300 hover:bg-blue-600 transition-colors duration-300 text-white">
          Done
        </button>
      </div>
    </div>
  );
};

export default SuccessCard;
