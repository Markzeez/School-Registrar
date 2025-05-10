import React from "react";

interface Props {
  role: "student" | "teacher";
  setRole: (role: "student" | "teacher") => void;
}

export default function SignupForm({ role, setRole }: Props) {
  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setRole(e.target.value as "student" | "teacher");

  return (
    <form className="space-y-4">
      <div>
        <label className="block font-semibold mb-1">Email</label>
        <input
          type="email"
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Password</label>
        <input
          type="password"
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1">Confirm Password</label>
        <input
          type="password"
          className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Confirm your password"
        />
      </div>

      <div className="flex space-x-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="student"
            checked={role === "student"}
            onChange={handleRoleChange}
          />
          <span>Student</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            value="teacher"
            checked={role === "teacher"}
            onChange={handleRoleChange}
          />
          <span>Teacher</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Signup
      </button>
    </form>
  );
}
