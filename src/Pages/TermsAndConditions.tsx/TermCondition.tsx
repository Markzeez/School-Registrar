import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const TermCondition = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div
      className="relative bg-gradient-to-tr from-[#3f3e3e] via-[#201f1f] to-[#383737] flex flex-col items-center justify-start mx-auto w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-2xl min-h-[500px] p-6 sm:p-8 bg-white border shadow-lg rounded-2xl mt-8 md:mt-12 gap-2 sm:gap-6"
      style={{ borderColor: '#487ad6' }} // Blue border
    >
      {/* Cancel Icon */}
      <button
        onClick={handleCancel}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-300 transition-colors duration-200"
        aria-label="Go back"
      >
        <IoMdClose size={28} /> {/* Slightly larger icon */}
      </button>

      <h3 className="text-sm sm:text-base uppercase font-medium  text-[#efedee]">Agreement</h3>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 leading-tight mb-4">Terms of Service</h1>

      <p className="text-sm sm:text-base text-center  text-[#efedee] leading-relaxed">
        We know it's tempting to skip these Terms of Service, but it's important to understand what you can expect from us as you use **ClassPulse** services, and what we expect from you.
      </p>

      <p className="text-sm sm:text-base text-center  text-[#efedee] leading-relaxed">
        These Terms reflect the way ClassPulse does business, the laws that apply to our company, and certain principles we believe in. As a result, they help define our relationship with you as you interact with our services. For example, they cover:
      </p>

      <ol className="list-disc list-inside text-sm sm:text-base text-left px-4 sm:px-6 space-y-2  text-[#efedee]">
        <li>What you can expect from us — how we provide and improve our services.</li>
        <li>What we expect from you — the rules for using our services.</li>
        <li>Content in ClassPulse — who owns what, and intellectual property rights.</li>
        <li>In case of disputes — your legal rights and what to expect if someone violates these terms.</li>
      </ol>

      <p className="text-sm sm:text-base text-center  text-[#efedee] leading-relaxed">
        Understanding these terms is important — to use our service, you must accept them.
      </p>

      <p className="text-sm sm:text-base text-center  text-[#efedee] leading-relaxed">
        Besides these terms, we also publish a **Privacy Policy**. While it isn’t part of these terms, we encourage you to read it to better understand how you can update, manage, export, and delete your information.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mt-6 w-full justify-center">
        <button
          onClick={handleCancel} // Assuming "Not right now..." also navigates home
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 text-base font-medium transition-colors duration-200"
        >
          Not right now...
        </button>
        <button
          className="w-full sm:w-auto px-6 py-3 rounded-xl  text-[#efedee] text-base font-medium transition-colors duration-200"
          style={{ backgroundColor: '#487ad6' }} // Blue button
        >
          I agree with terms
        </button>
      </div>
    </div>
  );
};

export default TermCondition;