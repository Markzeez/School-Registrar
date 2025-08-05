
// import { BiArrowBack, BiKey } from 'react-icons/bi';
// import { GiPadlock } from 'react-icons/gi';

const ResetPassword = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-4">
        <div className="w-full max-w-sm bg-white border border-gray-300 rounded-xl p-6 shadow-lg">
        <h1 className="text-[20px] font-semibold">Reset password</h1>
        
        
        {/* <GiPadlock color="#007f00" size={100} /> */}
        
        <form action="" className="flex flex-col space-y-2 text-[14px]">
          
            <label htmlFor="" className="pl-2 ">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            className="p-0.5 w-full bg-white bg-opacity-60 backdrop-filter backdrop-blur-md border-b-1 outline-none focus:outline-none"
          />
          
          
          <label htmlFor="" className="pl-2">
            Confirm your new password
          </label>
          <input
            type="password"
            placeholder="Confirm new password"
            className="p-0.5 w-full bg-white bg-opacity-60 backdrop-filter backdrop-blur-md border-b-1 outline-none focus:outline-none"
          />
          
        </form>
        
        <button className="w-full h-[40px] mt-3 p-3 bg-blue-400 text-white border-none cursor-pointer rounded-3xl">
          Confirm
        </button>
        <div className="text-center text-black font-semibold  text-xs mt-3">
            Back to <span className="text-blue-400 underline">sign in ?</span>
          </div>        
        </div>
      </div>
  );
};

export default ResetPassword;


