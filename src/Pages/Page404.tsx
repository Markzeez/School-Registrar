import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col space-x-3">
     <h1 className="text-8xl font-bold text-center mt-[100px] text-blue-400/40 border-b-2 w-[80%] pb-[30px] mx-auto">Oops!</h1>
      <h1 className="text-3xl font-bold text-center mt-4 text-slate-700 ">
        404 - PAGE NOT FOUND
      </h1>
      <p className="text-xs font-bold text-center mt-4 text-slate-700">The page you are looking for might have been removed <br /> had it's name changed or is temporarily unavailable.</p>
      <Link to="/" className="mx-auto my-2 p-3 px-5 text-base text-blue-400 bg-blue-100 hover:text-white hover:bg-blue-400 border-2 border-blue-400 rounded-full">
        GO TO HOMEPAGE
      </Link>
    </div>
  );
};

export default Page404;
