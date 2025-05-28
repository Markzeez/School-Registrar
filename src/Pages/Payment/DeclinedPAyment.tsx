import { CircleStop } from "lucide-react";

export default function DeclinedPayment() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full max-w-xs h-[380px] hover:shadow-lg shadow-md bg-white rounded-[15px] mt-12 gap-6 border border-blue-500 p-4">
      <CircleStop size={48} className="text-red-500" />
      <h1 className="text-2xl text-[#1D1A22] font-semibold text-center">
        Your Payment was denied
      </h1>
      <p className="text-xs text-center text-gray-600">
        Sorry, we weren't able to complete your payment at this time. <br />
        Please try again later.
      </p>

      <div className="flex items-center justify-center w-full">
        <button className="w-full h-[45px] rounded-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white font-medium">
          Try again
        </button>
      </div>
    </div>
  );
}
