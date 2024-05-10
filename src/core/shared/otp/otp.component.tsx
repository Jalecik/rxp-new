import React, { useState, useRef } from 'react';
import css from './otp.module.scss';

interface OTPInputProps {
  length: number; // Length of the OTP
  onComplete: (otp: string) => void; // Callback when OTP is completed
}

const OTPInput: React.FC<OTPInputProps> = ({ length, onComplete }) => {
  const [otp, setOTP] = useState<string[]>(new Array(length).fill(''));
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inputRefs = Array.from({ length }, () => useRef<HTMLInputElement>(null));

  const handleChange = (index: number, value: string) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    // Focus on the next input field if there's a value
    if (value && index < length - 1 && inputRefs[index + 1].current) {
        //@ts-ignore
      inputRefs[index + 1].current.focus();
    }

    if (!newOTP.includes('')) {
      onComplete(newOTP.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0 && inputRefs[index - 1].current) {
        //@ts-ignore
        inputRefs[index - 1].current.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  };

  return (
    <div className={css.otp}>
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          onKeyPress={handleKeyPress}
          className={css['otp-input']}
          value={value}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          maxLength={1}
          ref={inputRefs[index]}
        />
      ))}
    </div>
  );
};

export default OTPInput;
