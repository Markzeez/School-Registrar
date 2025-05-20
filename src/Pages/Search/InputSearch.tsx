

const InputSearch = () => {
  return (
   
    <div className="mx-1 w-full md:w-[842px] h-[55px] flex flex-col-reverse md:flex-row md:items-center justify-around md:gap[73px] mt-2">
     

      <div className="mx-auto w-full md:w-[644px] h-[55px] p-4 bg-white rounded-full shadow-md hover:shadow-lg flex flex-row items-center">
        <div className="w-4/5 flex flex-row justify-center md:gap-3 items-center  ">
          <h3>
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 md:w-5  h-4 md:h-5 "
            >
              <path
                d="M6.16669 10.6667C8.92811 10.6667 11.1667 8.42809 11.1667 5.66666C11.1667 2.90524 8.92811 0.666664 6.16669 0.666664C3.40526 0.666664 1.16669 2.90524 1.16669 5.66666C1.16669 8.42809 3.40526 10.6667 6.16669 10.6667Z"
                stroke="#605D64"
              />
              <path
                d="M6.16669 3.16666C5.50365 3.16666 4.86776 3.43006 4.39892 3.8989C3.93008 4.36774 3.66669 5.00362 3.66669 5.66666M13.6667 13.1667L11.1667 10.6667"
                stroke="#605D64"
                strokeLinecap="round"
              />
            </svg>
          </h3>
          <input
            type="text"
            placeholder="Name"
            className="w-2/5 md:w-36 px-2 text-xs text-slate-800 border-none focus:outline-none"
          />
          <img
            src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717617979/Vector_4_pepcv9.svg"
            alt="top_line1"
            className=" w-2  h-6   "
          />
          <img
            src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717618131/Vector_uvjbhb.svg"
            alt="location"
            className="w-4 md:w-5  h-4 md:h-5 "
          />
          <input
            type="text"
            placeholder="Class"
            className="w-2/5 md:w-36 px-1 text-xs text-slate-800 border-none focus:outline-none"
          />
        </div>
        <div className="flex flex-row md:gap-3  justify-center mx-auto items-center  md:ml-9">
          <img
            className="m-0 h-[40px]"
            src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717617979/Vector_4_pepcv9.svg"
            alt="top_line1"
          />
          <span className="   mx-1 px-1    text-xs md:text-base text-gray-800 md:w-full hover:bg-gray-200 rounded-xl cursor-pointer">
            Reset
          </span>
          <input
            type="button"
            value={"search"}
            className="w-[58px] md:w-[99px] px- md:px-6 md:ml-6 py-2 text-xs md:text-sm text-center text-white bg-[#227eac] hover:bg-[#67dcd0] rounded-full"
          />
        </div>
      </div>
    </div>

  )
}

export default InputSearch
