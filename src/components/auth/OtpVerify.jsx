import React, { useRef, useState } from 'react';

const OTPInput = () => {
    const inputRefs = useRef([]);
    const [otp, setOtp] = useState(new Array(5).fill(''));

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (!/^[0-9]?$/.test(value)) return; // faqat raqam

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 4) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`OTP: ${otp.join('')}`);
    }



    return (
        <form className="flex flex-col items-center justify-center min-h-[300px] bg-gray-100" onSubmit={handleSubmit}>

            <h1 className="text-2xl font-bold mb-4">OTP Verification</h1>
            <div className="flex  gap-2 justify-center my-5" >
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={digit}
                        ref={(el) => (inputRefs.current[index] = el)}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                ))}
            </div>
            <button
                type='submit'
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Submit OTP
            </button>
        </form>
    );
};

export default OTPInput;
