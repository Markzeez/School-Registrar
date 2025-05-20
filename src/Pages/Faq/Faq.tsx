

function Faq() {
  return (
    <div className="relative flex flex-col text-[#989898] bg-white border-b border-[black] px-6 py-10 space-y-10">
      {/* Background Vector */}
      {/* <div className="absolute top-0 left-0 w-fit h-fit opacity-60 z-0">
        <img
          className="lg:flex h-[30%] absolute top-52"
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1732113345/import_csipdq.svg"
          alt="desktop background"
        />
        <img
          className="lg:hidden"
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1732113345/import_csipdq.svg"
          alt="mobile background"
        />
      </div> */}

      {/* FAQ Section */}
      <div className="relative z-4">
        <h1 className="text-3xl text-[#487ad6] md:text-6xl lg:text-4xl sm:w-[40%] mb-6">
          Frequently Asked Questions
        </h1>
        <div className="flex flex-col space-y-5 mt-8">
          {[
            "How do I create an account with ClassPulse?",
            "How does ClassPulse ensure the security of my data?",
            "What types of Attendance is ClassPulse Offering?",
            "What benefits does ClassPulse offer for Student,Teacher and Parent?"
          ].map((question, idx) => (
            <select
              key={idx}
              className="bg-white text-black outline-none border-b border-[black] py-2 text-sm mx-4"
            >
              <option>{question}</option>
            </select>
          ))}
        </div>
      </div>

      
      
     

     
    </div>
  );
}

export default Faq;
