"use client";
import React from "react";

type Props = {};

function Page({}: Props) {
  const [otp, setOtp] = React.useState<string[]>([]);
  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, maxLength } = e.currentTarget;
    const message = value.slice(0, maxLength);
    e.currentTarget.value = message;
  };
  const handleOtpChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newOtp = otp;
    newOtp[index] = e.target.value;
    setOtp(newOtp);
    console.log(newOtp);
  };
  const handleOtpSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // OTP validations
    console.log(otp);
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
      <form onSubmit={handleOtpSubmit} className="flex flex-row gap-4">
        <input
          className="w-8 rounded-lg border-2 border-gray-500/100"
          type="number"
          value={otp[0]}
          onChange={(e) => handleOtpChange(e, 0)}
        />
        <input
          className="w-8 rounded-lg border-2 border-gray-500/100"
          type="number"
          value={otp[1]}
          onChange={(e) => handleOtpChange(e, 1)}
        />
        <input
          className="w-8 rounded-lg border-2 border-gray-500/100"
          type="number"
          value={otp[2]}
          onChange={(e) => handleOtpChange(e, 2)}
        />
        <input
          className="w-8 rounded-lg border-2 border-gray-500/100"
          type="number"
          value={otp[3]}
          onChange={(e) => handleOtpChange(e, 3)}
        />
      </form>
      <button onSubmit={(e) => handleOtpSubmit(e)}>Submit</button>
    </main>
  );
}

export default Page;
