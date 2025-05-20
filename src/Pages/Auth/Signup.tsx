// Signup.tsx
import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { FaCircleUser } from 'react-icons/fa6';
import { useNavigate, Link } from 'react-router-dom';
import validate, { SignupValues, SignupErrors } from './SignupValidation';

const ROLE_OPTIONS = ['Student', 'Teacher'] as const;
type Role = typeof ROLE_OPTIONS[number];

export default function Signup() {
  const [role, setRole] = useState<Role>('Student');
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState<SignupValues>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    image: null,
  });
  const [errors, setErrors] = useState<SignupErrors>({});

  const navigate = useNavigate();

  function handleInput(
    e: ChangeEvent<HTMLInputElement>
  ) {
    const { name, value, files } = e.target;

    setValues(prev => ({
      ...prev,
      // if file input, take first file; otherwise use string
      [name]: name === 'image' ? files?.[0] ?? null : value,
    }));
  }

  function handleShowPassword() {
    setShowPassword(prev => !prev);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    // only proceed if no validation errors
    const hasErrors = Object.values(validationErrors).some(
      errMsg => errMsg !== ''
    );
    if (hasErrors) return;

    // build multipart form data
    const formData = new FormData();
    formData.append('firstname', values.firstname);
    formData.append('lastname', values.lastname);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('role', role);
    if (values.image) {
      formData.append('image', values.image);
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_APP_SERVER_DOMAIN}/signup`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      navigate('/home');
    } catch (err) {
      console.error(err);
      // TODO: show server error to user
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-xl p-6 shadow-lg">
        {/* Role Selector */}
        <div className="flex justify-center mb-6">
          <div className="flex w-[200px] bg-blue-400 text-white rounded-3xl p-1">
            {ROLE_OPTIONS.map(opt => (
              <div
                key={opt}
                onClick={() => setRole(opt)}
                className={`w-1/2 text-center py-1 rounded-3xl cursor-pointer transition-all ${
                  role === opt
                    ? 'bg-white text-blue-600 font-semibold'
                    : ''
                }`}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>

        <h1 className="text-xl font-semibold text-center mb-4">
          Get Started with ClassPulse
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* File Upload */}
          <div className="flex flex-col items-center">
            <input
              id="file"
              type="file"
              className="hidden"
              name="image"
              accept="image/*"
              onChange={handleInput}
            />
            {errors.image && (
              <span className="text-red-500 text-xs">
                {errors.image}
              </span>
            )}
            <label
              htmlFor="file"
              className="text-blue-500 text-sm cursor-pointer hover:underline"
            >
              <FaCircleUser className="text-4xl mb-2" />
            </label>
          </div>

          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="text-sm">First Name</label>
              <input
                type="text"
                name="firstname"
                placeholder="Enter first name"
                className="border-b border-black p-2 outline-none"
                value={values.firstname}
                onChange={handleInput}
              />
              {errors.firstname && (
                <span className="text-red-500 text-xs">
                  {errors.firstname}
                </span>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm">Last Name</label>
              <input
                type="text"
                name="lastname"
                placeholder="Enter last name"
                className="border-b border-black p-2 outline-none"
                value={values.lastname}
                onChange={handleInput}
              />
              {errors.lastname && (
                <span className="text-red-500 text-xs">
                  {errors.lastname}
                </span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className="border-b border-black p-2 outline-none"
              value={values.email}
              onChange={handleInput}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-sm">Create Password</label>
            <div className="flex items-center border-b border-black">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter password"
                className="w-full p-2 outline-none"
                value={values.password}
                onChange={handleInput}
              />
              <button
                type="button"
                onClick={handleShowPassword}
                className="p-2"
              >
                {showPassword ? <BiShow /> : <BiHide />}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password}
              </span>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-400 text-white rounded-3xl hover:bg-blue-500 transition-all"
          >
            Create Account
          </button>

          {/* Terms */}
          <div className="flex items-start gap-2 text-xs text-gray-600">
            <input type="checkbox" id="tos" className="mt-1" />
            <label htmlFor="tos">
              By creating an account, I agree to ClassPulse’s{' '}
              <Link to="/terms" className="text-blue-400">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-blue-400">
                Privacy Policy
              </Link>
              .
            </label>
          </div>
        </form>

        {/* Already have account */}
        <p className="mt-4 text-center text-xs text-gray-700">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
