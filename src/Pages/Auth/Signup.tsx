// Signup.tsx
import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { FaCircleUser } from 'react-icons/fa6';
import { useNavigate, Link } from 'react-router-dom';
// Assuming SignupValidation.ts provides these types and function
import validate, { SignupValues, SignupErrors } from './SignupValidation';

// Define role options for clarity and type safety
const ROLE_OPTIONS = ['Student', 'Teacher'] as const;
type Role = typeof ROLE_OPTIONS[number];

export default function Signup() {
  // State for form values
  const [values, setValues] = useState<SignupValues>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    image: null,
  });

  // State for validation errors
  const [errors, setErrors] = useState<SignupErrors>({});

  // State for selected role (Student or Teacher)
  const [role, setRole] = useState<Role>('Student');

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // State for loading indicator during form submission
  const [isLoading, setIsLoading] = useState(false);

  // State for displaying server-side errors
  const [serverError, setServerError] = useState<string | null>(null);

  // React Router hook for navigation
  const navigate = useNavigate();

  /**
   * Handles input changes for text and file inputs.
   * Updates the 'values' state based on the input's name and value/file.
   * @param e The change event from the input element.
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    setValues(prev => ({
      ...prev,
      // If the input is a file input, take the first file; otherwise, use the string value
      [name]: name === 'image' ? files?.[0] ?? null : value,
    }));

    // Clear the specific error for the input being changed
    setErrors(prev => ({
      ...prev,
      [name]: '', // Clear error for the current field
    }));
    // Clear server error on any input change
    setServerError(null);
  };

  /**
   * Toggles the visibility of the password input field.
   */
  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  /**
   * Handles the form submission.
   * Performs client-side validation, builds FormData, and sends a POST request.
   * @param e The form submission event.
   */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Perform client-side validation
    const validationErrors = validate(values);
    setErrors(validationErrors);

    // Check if there are any validation errors
    const hasErrors = Object.values(validationErrors).some(
      errMsg => errMsg !== ''
    );

    // If there are client-side validation errors, stop submission
    if (hasErrors) {
      console.log('Client-side validation errors:', validationErrors);
      return;
    }

    setIsLoading(true); // Set loading state to true
    setServerError(null); // Clear any previous server errors

    // Build FormData object for multipart/form-data submission
    const formData = new FormData();
    formData.append('firstname', values.firstname);
    formData.append('lastname', values.lastname);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('role', role); // Append the selected role
    if (values.image) {
      formData.append('image', values.image); // Append image if selected
    }

    try {
      // Send POST request to the signup endpoint
      await axios.post(
        `${import.meta.env.VITE_APP_SERVER_DOMAIN}/signup`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Important for file uploads
          },
        }
      );
      navigate('/home'); // Navigate to home page on successful signup
    } catch (err: any) {
      console.error('Signup error:', err);
      // Display server error message to the user
      if (err.response && err.response.data && err.response.data.message) {
        setServerError(err.response.data.message);
      } else {
        setServerError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-inter px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
        {/* Role Selector */}
        <div className="flex justify-center mb-6">
          <div className="flex w-full max-w-[250px] bg-blue-500 text-white rounded-full p-1 shadow-md">
            {ROLE_OPTIONS.map(opt => (
              <button
                key={opt}
                type="button" // Important for buttons inside a form
                onClick={() => setRole(opt)}
                className={`flex-1 text-center py-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out text-sm sm:text-base
                  ${role === opt
                    ? 'bg-white text-blue-600 font-semibold shadow-inner'
                    : 'text-white hover:bg-blue-600'
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <h1 className="text-xl font-bold text-center text-gray-800 mb-6">
          Apply with ClassPulse
        </h1>

        <form onSubmit={handleSubmit} className="space-y-2">
          {/* File Upload / Profile Image */}
          <div className="flex flex-col items-center mb-4">
            <label
              htmlFor="image-upload"
              className="relative w-24 h-24 flex items-center justify-center rounded-full bg-gray-200 text-gray-500 cursor-pointer overflow-hidden
                         hover:bg-gray-300 transition-colors duration-200"
              aria-label="Upload profile image"
            >
              {values.image ? (
                <img
                  src={URL.createObjectURL(values.image)}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaCircleUser className="text-5xl" />
              )}
              <input
                id="image-upload"
                type="file"
                className="hidden"
                name="image"
                accept="image/*"
                onChange={handleInputChange}
              />
              <span className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1 text-xs">
                +
              </span>
            </label>
            {errors.image && (
              <p className="text-red-500 text-xs mt-0.5" role="alert">
                {errors.image}
              </p>
            )}
          </div>

          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="firstname" className="text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Enter first name"
                // Refactored classes for bottom border
                className={`w-full p-2 outline-none border-b
                  ${errors.firstname ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500`}
                value={values.firstname}
                onChange={handleInputChange}
                aria-invalid={errors.firstname ? "true" : "false"}
                aria-describedby={errors.firstname ? "firstname-error" : undefined}
              />
              {errors.firstname && (
                <p id="firstname-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.firstname}
                </p>
              )}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="lastname" className="text-sm font-medium text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Enter last name"
                // Refactored classes for bottom border
                className={`w-full p-2 outline-none border-b
                  ${errors.lastname ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500`}
                value={values.lastname}
                onChange={handleInputChange}
                aria-invalid={errors.lastname ? "true" : "false"}
                aria-describedby={errors.lastname ? "lastname-error" : undefined}
              />
              {errors.lastname && (
                <p id="lastname-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.lastname}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              // Refactored classes for bottom border
              className={`w-full p-2 outline-none border-b
                ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-blue-500`}
              value={values.email}
              onChange={handleInputChange}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-500 text-xs mt-0.5" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1">
              Create Password
            </label>
            {/* Password input container refactored for bottom border */}
            <div className={`flex items-center border-b
              ${errors.password ? 'border-red-500' : 'border-gray-300'} focus-within:border-blue-500`}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter password"
                className="w-full p-2 bg-transparent outline-none" // Removed border classes, focus-within on parent handles it
                value={values.password}
                onChange={handleInputChange}
                aria-invalid={errors.password ? "true" : "false"}
                aria-describedby={errors.password ? "password-error" : undefined}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <BiShow className="text-xl" /> : <BiHide className="text-xl" />}
              </button>
            </div>
            {errors.password && (
              <p id="password-error" className="text-red-500 text-xs mt-1" role="alert">
                {errors.password}
              </p>
            )}
          </div>

          {/* Server Error Display */}
          {serverError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md relative" role="alert">
              <span className="block sm:inline">{serverError}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-blue-600 text-white font-semibold rounded-md shadow-md
                       hover:bg-blue-700 transition-all duration-300 ease-in-out
                       disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            disabled={isLoading}
          >
            {isLoading && (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>

          {/* Terms and Privacy Policy */}
          <div className="flex items-start gap-2 text-xs text-gray-600 mt-4">
            <input
              type="checkbox"
              id="tos"
              className="mt-1 accent-blue-600 rounded-sm"
              required // Make terms agreement mandatory
            />
            <label htmlFor="tos" className="leading-relaxed">
              By creating an account, I agree to ClassPulse’s{' '}
              <Link to="/terms" className="text-blue-600 hover:underline font-medium">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="/privacy" className="text-blue-600 hover:underline font-medium">
                Privacy Policy
              </Link>
              .
            </label>
          </div>
        </form>

        {/* Already have an account? */}
        <p className="mt-6 text-center text-sm text-gray-700">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
