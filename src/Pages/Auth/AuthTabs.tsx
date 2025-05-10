import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function AuthTabs() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const [role, setRole] = useState<"student" | "teacher">("student");

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <div className="flex justify-center mb-6">
        <button
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === "login" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("login")}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === "signup" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("signup")}
        >
          Signup
        </button>
      </div>

      {activeTab === "login" ? (
        <LoginForm role={role} setRole={setRole} />
      ) : (
        <SignupForm role={role} setRole={setRole} />
      )}
    </div>
  );
}
