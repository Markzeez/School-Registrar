import { useState } from 'react';
import OtpInput from '../Auth/VerifyOTP';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneOtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const handlePhoneSumbit = (event) => {
    event.preventDefault();

    // Phone Validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert('Invalid phone number');
      return;
    }

    const validatePhoneNumber = (phoneNumber) => {
      const phoneNumberPattern = /^\d{10}$/;
      return phoneNumberPattern.test(phoneNumber);
    };

    Call BE API
    show OTP Field
    setShowOtpInput(true);
  };

  const OnOtpSubmit = (otp) => {
    console.log('Login Successful', otp);
  };

  return (
    <div className="fex flex-col items-center justify-center h-screen w-full bg-[#f5f5f5]">
      <div className="text-center mx-auto">
        <h2 className=" text-[20px] font-semibold">Phone Verification</h2>
        <p className="  text-xs">
          We need to register phone number before getting started!
        </p>
      </div>
      <div className="flex flex-col items-center mx-auto mt-[200px] w-[320px] p-[20px] bg-[#ffffff] rounded-lg shadow-lg ">
        {!showOtpInput ? (
          <form onSubmit={handlePhoneSumbit}>
            <PhoneInput
              country={'us'}
              value={phoneNumber}
              onChange={handleChange}
              inputProps={{
                required: true,
              }}
            />
            <button
              className="w-[300px] text-white text-[14px] py-2 rounded-lg bg-[#007f00] cursor-pointer hover:bg-[#789178] mt-[15px]"
              type="submit"
            >
              Send the Code
            </button>
          </form>
        ) : (
          <div>
            <p>Enter OTP sent to {phoneNumber}</p>
            <OtpInput length={6} onOtpSubmit={OnOtpSubmit} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneOtpForm;
