import { PiMarkerCircleThin } from "react-icons/pi";

export default function ReceiptPayment() {
  return (
    <div className="w-[420px] h-[430px] mt-12 mx-auto flex flex-col items-center justify-center gap-6 bg-white border border-blue-500 rounded-[15px] shadow-md hover:shadow-lg transition-shadow">
      <PiMarkerCircleThin size={50} />

      <h1 className="text-2xl font-semibold text-[#1D1A22]">
        Payment received
      </h1>

      <p className="text-xs border-b border-[#0f0f0f0f] pb-1">
        We've received your <strong>$52.47</strong> payment, Alexander
      </p>

      <h2 className="text-xs font-semibold tracking-wide text-gray-600">
        PAYMENT DETAILS
      </h2>

      <div className="text-sm text-gray-700 px-5">
        <p><span className="font-medium">Payment amount:</span> $52.47</p>
        <p><span className="font-medium">Payment date:</span> Mar 4, 2016</p>
         <p><span className="font-medium">Payment method:</span> Bank Accoun *9026</p>
          <p><span className="font-medium">Confirmation:</span> 1RSTGO-5B</p>
      </div>

      <div className="w-[352px]">
        <button className="w-[200px] h-[45px] mx-auto block rounded-full bg-blue-300 hover:bg-blue-600 text-white transition-colors duration-300">
          Done
        </button>
      </div>
    </div>
  );
}
