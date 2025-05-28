const Divider = () => (
  <div className="w-px h-6 bg-gray-300" />
);

const InputSearch = () => {
  return (
    <div className="w-full px-2 mb-5 flex justify-center">
      <div className="w-full max-w-3xl flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-full shadow-md hover:shadow-lg">
        
        {/* Input Section */}
        <div className="flex flex-1 items-center gap-2">
          
          {/* Name Input */}
          <div className="flex items-center gap-1 flex-1">
            <img src="/icons/search.png" alt="Search" className="w-5 h-5 text-gray-600" />
            <input
              type="text"
              placeholder="Name"
              className="flex-1 min-w-[60px] px-2 text-sm text-slate-800 border-none focus:outline-none"
            />
          </div>

          <Divider />

          {/* School Input */}
          <div className="flex items-center gap-1 flex-1">
            <img src="/icons/school.png" alt="School" className="w-5 h-5 text-gray-600" />
            <input
              type="text"
              placeholder="School"
              className="flex-1 min-w-[60px] px-2 text-sm text-slate-800 border-none focus:outline-none"
            />
          </div>

          <Divider />

          {/* Class Input */}
          <div className="flex items-center gap-1 flex-1">
            <img src="/icons/class.png" alt="Class" className="w-5 h-5 text-gray-600" />
            <input
              type="text"
              placeholder="Class"
              className="flex-1 min-w-[60px] px-2 text-sm text-slate-800 border-none focus:outline-none"
            />
          </div>
        </div>

        {/* Action Section */}
        <div className="flex items-center md:ml-4">
          <input
            type="button"
            value="Search"
            className="px-4 py-2 text-sm text-white bg-[#487ad6] hover:bg-blue-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default InputSearch;
