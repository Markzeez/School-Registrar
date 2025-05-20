import { useState, useEffect, useRef, ChangeEvent, FC } from 'react';



const OtpInput: FC = () => {
  const [otp, setOtp] = useState<number>();
  const [verified, setVerified] = useState<boolean>(false);
  const [otpVal, setOtpVal] = useState<string[]>([]);
  const textBase = useRef<HTMLDivElement>(null);

  // Generate random OTP for each first render
  useEffect(() => {
    setOtp(Math.floor(100000 + Math.random() * 900000));
  }, []);

  const clearAll = () => {
    if (textBase.current) {
      textBase.current.classList.remove("otp-error");
      textBase.current.childNodes.forEach((child) => {
        (child as HTMLInputElement).value = "";
      });
    }
    setOtpVal([]);
    setVerified(false);
  };

  const getOtp = () => {
    if (parseInt(otpVal.join("")) === otp) {
      if (textBase.current) {
        textBase.current.classList.remove("otp-error");
      }
      setVerified(true);
    } else {
      if (textBase.current) {
        textBase.current.classList.add("otp-error");
      }
    }
  };

  const focusNext = (e: ChangeEvent<HTMLInputElement>) => {
    if (textBase.current) {
      const childCount = textBase.current.childElementCount;
      const currentIndex = Array.from(e.target.parentNode?.children || []).indexOf(e.target);
      if (currentIndex !== childCount - 1) {
        (e.target.nextSibling as HTMLInputElement).focus();
      } else {
        const values: string[] = [];
        textBase.current.childNodes.forEach((child) => {
          values.push((child as HTMLInputElement).value);
        });
        if (values.length !== 0) {
          setOtpVal(values);
        }
      }
    }
  };

  useEffect(() => {
    if (otpVal.length === textBase.current?.childElementCount) {
      getOtp();
    }
  }, [otpVal]);

  return (
    <div className="m-0 p-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      {!verified ? (
        <>
          <h1 className='text-xl mb-3 text-center'>Enter OTP send to Email </h1>
          <div className="w-auto flex justify-center gap-2 " ref={textBase}>
            {new Array(6).fill(null).map((_, index) => (
              <input
                className='w-[50px] h-[50px] p-3 text-xl outline-none rounded-lg focus:border-[#487ad6]  border-[3px] border-solid   '
                key={index}
                type="text"
                maxLength={1}
                onChange={(e) => focusNext(e)}
                style={{ textAlign: 'center' }}
              />
            ))}
          </div>
          <button
            className={`  absolute mt-4 rounded-full text-white p-2 px-5 text-center bg-[#487ad6] cursor-pointer transition-all outline-blue-400 ${otpVal.length > 0 ? 'visible hover:bg-stone-700/35 text-[#fff]' : ''}`}
            onClick={clearAll}
          >
            Clear otp
          </button>
        </>
      ) : (
        <>Verified Successfully</>
      )}
    </div>
  );
};

export default OtpInput;
