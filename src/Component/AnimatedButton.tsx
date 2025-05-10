import { useState } from 'react';

const AnimatedButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      // Redirect to Sign Up Screen or perform the swap overlay action here
      console.log('Redirecting to Sign Up Screen...');
      // window.location.href = '/sign-up'; // Example redirect
    }, 500); // Match the animation duration
  };

  return (
    <button
      className={`w-[455px] h-[40px] flex items-center justify-center gap-2 rounded-[100px_50px_25px_1px] bg-[#487ad6] opacity-100 ${
        clicked ? 'animate-buttonClick' : ''
      }`}
      onClick={handleClick}
    >
      Click Me
    </button>
  );
};

export default AnimatedButton;
