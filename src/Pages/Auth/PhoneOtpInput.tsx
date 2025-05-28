// import { useState } from 'react';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css';
// import OtpInput from '../Auth/VerifyOTP';

// const isValidPhoneNumber = (phone: string): boolean => {
//   const digitsOnly = phone.replace(/\D/g, '');
//   return digitsOnly.length >= 10;
// };

// const PhoneOtpForm = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [showOtpInput, setShowOtpInput] = useState(false);

//   const handlePhoneChange = (value: string) => {
//     setPhoneNumber(value);
//   };

//   const handlePhoneSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (!isValidPhoneNumber(phoneNumber)) {
//       alert('Invalid phone number');
//       return;
//     }

//     // TODO: Call Backend API to send OTP
//     setShowOtpInput(true);
//   };

//   const handleOtpSubmit = (otp: string) => {
//     // TODO: Call backend API to verify OTP
//     console.log('Login Successful with OTP:', otp);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#f5f5f5] px-4">
//       <div className="text-center">
//         <h2 className="text-xl font-semibold">Phone Verification</h2>
//         <p className="text-xs text-gray-600">
//           We need to register your phone number before getting started.
//         </p>
//       </div>

//       <div className="mt-10 w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
//         {!showOtpInput ? (
//           <form onSubmit={handlePhoneSubmit}>
//             <PhoneInput
//               country={'us'}
//               value={phoneNumber}
//               onChange={handlePhoneChange}
//               inputProps={{ required: true }}
//               inputStyle={{ width: '100%' }}
//             />
//             <button
//               type="submit"
//               className="w-full mt-4 bg-green-700 text-white py-2 rounded hover:bg-green-600 transition"
//             >
//               Send the Code
//             </button>
//           </form>
//         ) : (
//           <div>
//             <p className="mb-4 text-sm text-center text-gray-700">
//               Enter the OTP sent to <strong>{phoneNumber}</strong>
//             </p>
//             <OtpInput length={6} onOtpSubmit={handleOtpSubmit} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PhoneOtpForm;

import React, { useState } from 'react';

interface OtpInputProps {
  length: number;
  onOtpSubmit: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length, onOtpSubmit }) => {
  const [otp, setOtp] = useState(Array(length).fill(''));

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // only take the last digit
    setOtp(newOtp);

    if (newOtp.every(val => val !== '')) {
      onOtpSubmit(newOtp.join(''));
    }
  };

  return (
    <div className="flex justify-center gap-2">
      {otp.map((digit, idx) => (
        <input
          key={idx}
          type="text"
          maxLength={1}
          className="w-10 h-10 text-center border border-gray-300 rounded"
          value={digit}
          onChange={(e) => handleChange(e.target.value, idx)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
