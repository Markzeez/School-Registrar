import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
// import OtpInput from '../Auth/VerifyOTP';

const PhoneValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleChange = (value: string) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (number: string) => {
    const pattern = /^\d{10}$/;
    return pattern.test(number);
  };

  // const handleOtpSubmit = (otp: string) => {
  //   console.log('Login Successful', otp);
  // };

  const handleSendCode = () => {
    if (valid) {
      setShowOtpInput(true);
    }
  };

  const renderPhoneInputSection = () => (
    <div className="flex flex-col items-center mx-auto mt-12 w-[350px] p-5 bg-white rounded-lg shadow-lg">
      <label className="mb-2 w-full">
        Phone Number:
        <PhoneInput
          country={'us'}
          value={phoneNumber}
          onChange={handleChange}
          inputProps={{ required: true }}
          containerClass="w-full mt-2"
        />
      </label>

      {!valid && (
        <p className="text-red-600 text-xs mt-2">
          Please enter a valid phone number!
        </p>
      )}

      <button
        className="w-full mt-4 text-white text-sm py-2 rounded-lg bg-green-700 hover:bg-[#789178]"
        type="submit"
        onClick={handleSendCode}
      >
        Send the Code
      </button>
    </div>
  );

  const renderOtpSection = () => (
    <div className="flex flex-col items-center mx-auto mt-8 w-[350px] space-y-3 p-5 bg-white rounded-lg shadow-lg">
      <p>Enter OTP sent to {phoneNumber}</p>
      {/* <OtpInput length={6} onOtpSubmit={handleOtpSubmit} /> */}

      <button
        className="w-full text-white text-sm py-2 rounded-lg bg-green-700 hover:bg-[#789178]"
        type="submit"
      >
        Verify Phone Number
      </button>

      <div className="flex justify-between w-full text-xs mt-2">
        <button
          className="text-blue-500"
          onClick={() => setShowOtpInput(false)}
        >
          Edit phone number?
        </button>
        <button className="text-green-700">
          Send again
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100">
      <div className="text-center">
        <h2 className="text-lg font-semibold">Phone Verification</h2>
        <p className="text-xs text-gray-600">
          We need to register your phone number before getting started!
        </p>
      </div>

      {!showOtpInput ? renderPhoneInputSection() : renderOtpSection()}
    </div>
  );
};

export default PhoneValidation;
