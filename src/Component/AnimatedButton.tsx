import { useState } from "react";

const AnimatedButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300); // Reset animation
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-transform duration-300 
        ${clicked ? "scale-90" : "scale-100"}
      `}
    >
      Click Me
    </button>
  );
};

export default AnimatedButton;