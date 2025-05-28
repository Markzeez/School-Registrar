import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const TermCondition = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-start relative mx-auto w-[40%] max-w-[720px] h-auto min-h-[500px] p-6 bg-white border border-blue-500 shadow-md hover:shadow-lg rounded-[15px] mt-8 gap-4">
      {/* Cancel Icon */}
      <button
        onClick={handleCancel}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        aria-label="Go back"
      >
        <IoMdClose size={24} />
      </button>

      <h3 className="text-sm uppercase font-medium">Agreement</h3>
      <h1 className="text-3xl md:text-4xl font-bold text-center">Terms of Service</h1>

      <p className="text-xs text-center">
        We know it's tempting to skip these Terms of Service, but it's important to understand what you can expect from us as you use ClassPulse services, and what we expect from you.
      </p>

      <p className="text-xs text-center">
        These Terms reflect the way ClassPulse does business, the laws that apply to our company, and certain principles we believe in. As a result, they help define our relationship with you as you interact with our services. For example, they cover:
      </p>

      <ol className="list-disc list-inside text-xs text-left px-4 space-y-1">
        <li>What you can expect from us — how we provide and improve our services.</li>
        <li>What we expect from you — the rules for using our services.</li>
        <li>Content in ClassPulse — who owns what, and intellectual property rights.</li>
        <li>In case of disputes — your legal rights and what to expect if someone violates these terms.</li>
      </ol>

      <p className="text-xs text-center">
        Understanding these terms is important — to use our service, you must accept them.
      </p>

      <p className="text-xs text-center">
        Besides these terms, we also publish a Privacy Policy. While it isn’t part of these terms, we encourage you to read it to better understand how you can update, manage, export, and delete your information.
      </p>

      <div className="flex flex-row gap-3 mt-4">
        <button className="w-[150px] rounded-xl p- bg-gray-200 hover:bg-gray-300 text-sm">
          Not right now...
        </button>
        <button className="w-[150px] rounded-xl p-2 bg-blue-500 hover:bg-blue-600 text-white text-sm">
          I agree with terms
        </button>
      </div>
    </div>
  );
};

export default TermCondition;
