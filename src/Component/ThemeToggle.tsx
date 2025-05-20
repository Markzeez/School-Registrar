// import React, { useEffect, useState } from 'react';
// import { MdDarkMode, MdLightMode } from 'react-icons/md';

// const ThemeToggle: React.FC = () => {
//   const [theme, setTheme] = useState<string>(
//     localStorage.getItem('theme') || 'light'
//   );

//   useEffect(() => {
//     if (theme === 'light') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };
//   return (
//     <button
//       onClick={toggleTheme}
//       className="w-[60px] ml-2 p-2 items-center bg-gray-200 dark:gray-800 text-black dark:text-white rounded-full text-[12px]"
//     >
//       {theme === 'dark' ? (
//         <MdDarkMode  className="bg-black text-white rounded-full p-2 h-[18px] w-[20px] text-sm" />
//       ) : (
//         <MdLightMode className="bg-white text-black p-2 rounded-full h-[18px] w-[20px] translate-x-6 text-sm" />
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;


