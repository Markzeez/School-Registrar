import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="relative bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-xl rounded-2xl w-full max-w-2xl p-8 space-y-6">
        {/* Close Icon */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors duration-200"
          aria-label="Close terms"
        >
          <IoMdClose size={28} />
        </button>

        {/* Header */}
        <header className="text-center">
          <h3 className="text-sm font-medium uppercase text-gray-500 dark:text-gray-400">
            User Agreement
          </h3>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-2">
            School Management Terms & Conditions
          </h1>
        </header>

        <hr className="border-t border-gray-200 dark:border-gray-700" />

        {/* Body */}
        <main className="text-gray-700 dark:text-gray-300 space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            By accessing or using the School Management System ("System"), all users including teachers, students, parents, and administrators agree to comply with these Terms and Conditions. The System is developed and maintained by SchoolTech Solutions ("Provider") to facilitate communication, attendance tracking, academic management, and reporting within the school environment.
          </p>

          <p>
            Users must ensure the information they provide is accurate and up-to-date. Unauthorized use of the System or sharing of login credentials is strictly prohibited. Any misuse may result in suspension or permanent termination of access.
          </p>

          <p>
            The Provider reserves the right to update or modify these terms at any time without prior notice. Continued use of the System constitutes acceptance of any changes.
          </p>

          <p>
            All data stored in the System is subject to the school’s data protection policies. The Provider shall not be held liable for any data loss caused by user negligence or external breaches beyond reasonable control.
          </p>
        </main>

        {/* Footer */}
        <footer className="flex justify-center mt-6">
          <button className="px-8 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200 text-base font-semibold">
            I Agree to the Terms
          </button>
        </footer>
      </div>
    </div>
  );
};

export default TermsAndConditions;
