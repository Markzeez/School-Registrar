


const RechangePassword = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm bg-white border border-gray-300 rounded-xl p-6 shadow-lg">
        <h1 className="text-[25px] font-semibold">Set your new password</h1>
        
        <div className="text-xs font-medium text-center">Your new password should to different from password previously used </div>
        
        <form action="" className="flex flex-col space-y-2 text-sm">
          <label htmlFor="" className="pl-2 mt-3">
            Type Old Password:
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            className="p-0.5 w-full bg-white bg-opacity-60 backdrop-filter backdrop-blur-md border-b-1 outline-none focus:outline-none "
          />
          <label htmlFor="" className="pl-2">
            Type New password:
          </label>
          <input
            type="password"
            placeholder="Confirm new password"
            className="p-0.5 w-full bg-white bg-opacity-60 backdrop-filter backdrop-blur-md border-b-1 outline-none focus:outline-none "
          />
          <label htmlFor="" className="pl-2">
            Confirm your new password:
          </label>
          <input
            type="password"
            placeholder="Confirm new password"
            className="p-0.5 w-full bg-white bg-opacity-60 backdrop-filter backdrop-blur-md border-b-1 outline-none focus:outline-none "
          />
        </form>

        <button className="w-full rounded-xl p-1 bg-blue-400 text-white mt-3">
          Confirm
        </button>
        <div className="text-center text-black font-semibold  text-xs mt-3">
            Back to <span className="text-blue-400 underline">sign in ?</span>
          </div>     
      </div>
    </div>
  )
}

export default RechangePassword