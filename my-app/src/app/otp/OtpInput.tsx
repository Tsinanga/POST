'use client';

import React, { useRef } from 'react';

interface OtpInputProps {
  length?: number;
  onChangeOtp: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length = 6, onChangeOtp }) => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    inputsRef.current[index]!.value = value;

    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    const otp = inputsRef.current.map(input => input?.value || '').join('');
    onChangeOtp(otp);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !inputsRef.current[index]?.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2 justify-center mt-6">
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          type="text"
          inputMode="numeric"
          maxLength={1}
          className="w-10 h-12 text-center text-lg border rounded border-gray-300 focus:outline-blue-500"
          ref={(el) => { inputsRef.current[i] = el; }}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
