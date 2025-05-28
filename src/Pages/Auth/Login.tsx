// Login.tsx
import { ChangeEvent, FormEvent, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { useNavigate, Link } from 'react-router-dom';
import validateLogin, { LoginValues, LoginErrors } from './LoginValidation';
import { toast } from 'react-toastify';

export default function Login() {
  const [values, setValues] = useState<LoginValues>({ email: '', password: '' });
  const [errors, setErrors] = useState<LoginErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  }

  function toggleShow() {
    setShowPassword(prev => !prev);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validateLogin(values);
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      // TODO: Replace with actual login logic (e.g., API call)
      toast.success('Login successful! Redirecting...');
      setTimeout(() => {
        navigate('/home');
      }, 1500);
    } else {
      toast.error('Please fix the highlighted errors.');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md bg-white border border-gray-300 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-2">Sign in</h1>
        <p className="text-sm text-center mb-6">
          New here?{' '}
          <Link to="/signup" className="text-blue-400 font-medium">
            Sign up
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm block mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full border-b border-black p-2 outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm block mb-1">Password</label>
            <div className="flex items-center border-b border-black">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full p-2 outline-none"
              />
              <button type="button" onClick={toggleShow} className="p-2">
                {showPassword ? <BiShow /> : <BiHide />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Forgot */}
          <div className="text-right">
            <Link to="/forgot" className="text-blue-400 text-xs underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-400 text-white rounded-3xl hover:bg-blue-500 transition-all"
          >
            Sign in
          </button>
        </form>

        <p className="mt-4 text-center text-xs font-semibold text-gray-700">
          Trouble signing in?{' '}
          <Link to="/reset" className="text-blue-400 underline">
            Reset Password
          </Link>
        </p>
      </div>
    </div>
  );
}
