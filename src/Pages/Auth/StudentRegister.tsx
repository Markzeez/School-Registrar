interface RegistrarProps {
  setShowComponent: (item: any) => void;
}

const StudentRegister = ({ setShowComponent }: RegistrarProps) => {
  return (
    <div className="w-full h-full flex flex-col items-center z-10 fixed left-0 right-0 top-0 bottom-0 backdrop-blur-sm bg-[#101c161d]">
      <div className="m-auto flex flex-col items-center w-[480px] h-auto shadow-md bg-white rounded-[15px] mt-12 gap-4 p-6">
        
        <div className="text-center w-full">
          <h1 className="text-[22px] font-bold text-[#322F37]">Register New Student</h1>
          <p className="text-[14px] text-[#605D66] mt-1">Fill in the details below to register a new student.</p>
        </div>

        <div className="flex flex-col gap-4 w-full text-[#49454F]">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-[14px]">School Name</label>
            <input
              type="text"
              placeholder="Queens College"
              className="w-full h-[40px] border border-[#9eabbf] rounded-[8px] px-3 mt-1 outline-none"
            />
          </div>

          {/* Class and ID Number */}
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label className="text-[14px]">Class</label>
              <input
                type="text"
                placeholder="Grade 5"
                className="h-[40px] border border-[#9eabbf] rounded-[8px] px-3 mt-1 outline-none"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-[14px]">Student ID</label>
              <input
                type="text"
                placeholder="ST12345"
                className="h-[40px] border border-[#9eabbf] rounded-[8px] px-3 mt-1 outline-none"
              />
            </div>
          </div>

          {/* Guardian Name */}
          <div className="flex flex-col">
            <label className="text-[14px]">Guardian Name</label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full h-[40px] border border-[#9eabbf] rounded-[8px] px-3 mt-1 outline-none"
            />
          </div>

          {/* Guardian Contact */}
          <div className="flex flex-col">
            <label className="text-[14px]">Guardian Contact</label>
            <input
              type="text"
              placeholder="08012345678"
              className="w-full h-[40px] border border-[#9eabbf] rounded-[8px] px-3 mt-1 outline-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row items-center justify-center gap-4 w-full mt-4">
          <button
            className="w-1/2 h-[40px] rounded-[50px] text-black bg-white border border-[#79747E] hover:bg-blue-300 transition-colors duration-300"
            onClick={() => setShowComponent("none")}
          >
            Cancel
          </button>
          <button className="w-1/2 h-[40px] rounded-[50px] bg-blue-400 hover:bg-blue-500 transition-colors duration-300 text-white">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentRegister;
