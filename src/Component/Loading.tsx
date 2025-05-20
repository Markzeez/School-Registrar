const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
   <div className="relative w-12 h-12 rounded-full border-4 border-gray-400 border-solid border-t-white border-r-white border-b-dotted border-l-dotted animate-spin">
  <div className="absolute inset-0 m-auto w-6 h-6 rounded-full border-4 border-[#FF3D00] border-solid border-t-[#FF3D00] border-r-[#FF3D00] border-b-dotted border-l-transparent animate-[spinReverse_1s_linear_infinite]"></div>
</div>



    </div>
  );
};

export default Loading;

{/* <style>
@keyframes spinReverse {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style> */}