function ForgettenPassword() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-xl p-6 shadow-lg">
        <form
          className="flex flex-col gap-3 items-center justify-center "
          action=""
        >
          <label className=" text-start text-black text-base " htmlFor="">
            Forgotten Password
          </label>
          <input
            className="p-0.5 w-full bg-white bg-opacity-60 backdrop-filter backdrop-blur-md border-b-1 outline-none focus:outline-none"
            type="email"
            placeholder="Enter email address"
          />

          <button className="w-full h-[40px] mt-3 p-3 bg-blue-400 text-white border-none cursor-pointer rounded-3xl">
            Reset Password
          </button>

          <span className="text-center text-black font-semibold text-xs mt-1">
            Back to <span className="text-blue-400 underline">sign in ?</span>
          </span>
        </form>
      </div>
    </div>
  );
}

export default ForgettenPassword;
