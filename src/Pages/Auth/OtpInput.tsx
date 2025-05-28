import React, { useState } from 'react';

interface OtpInputProps {
  length: number;
  onOtpSubmit: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length, onOtpSubmit }) => {
  const [otp, setOtp] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, length);
    setOtp(value);
    if (value.length === length) {
      onOtpSubmit(value);
    }
  };

  return (
    <input
      type="text"
      value={otp}
      onChange={handleChange}
      maxLength={length}
      className="w-full border rounded px-3 py-2 text-center text-lg tracking-widest"
      placeholder={'0'.repeat(length)}
      autoFocus
    />
  );
};

export default OtpInput;