import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";



export default function SideNav() {
  return (
        <div className="left-0 fixed flex flex-col mx-auto mt-[54px] space-y-8 w-[250px] col-span-4 lg:col-span-2 xl:col-span-1 bg-[#F0F4F4] lg:min-h-screen p-5 lg:p-8">
      <div className="flex flex-row justify-around">
       <div>
       <img className="w-[50px]" src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1728536291/arcticons_google-messages_clgbv5.jpg" alt="/" />
       
       </div>
        <h1 className="text-2xl font-bold text-[#247B7B] ">
          Scr<span className="text-[#000000]">utz</span>
        </h1>
      </div>
      <div className="flex flex-col space-y-4 text-xs text-center ">
      <Link to={"/attendance"}>  <button className="w-[200px] flex gap-4 p-2 hover:bg-white hover:text-[#247b7b] ">
      <FiPlus />
          Attendance{' '}
        </button></Link>
        
        <Link to={"/"}> <button className="w-[200px] flex gap-4 p-2 hover:bg-white hover:text-[#247b7b]">
          {' '}
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/uplod/v1728401324/Vector_3_l9ctnk.svg"
            alt=""
          />
          Overview{' '}
        </button> </Link>
        
        <Link to={"Campaign"}><button className="w-[200px] flex gap-4 p-2 hover:bg-white hover:text-[#247b7b] ">
          {' '}
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1728402994/material-symbols_campaign-outline_wqzgp9.svg"
            alt=""
          />
          Campaign{' '}
        </button> </Link>
      
      <Link to={'/market'}>  <button className=" w-[200px] flex gap-4  p-2 hover:bg-white hover:text-[#247b7b]">
          {' '}
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1728402994/fluent-mdl2_insights_1_bveld7.svg"
            alt=""
          />
          Market Intelligence{' '}
        </button> </Link>
        <Link to={'/account'}><button className="w-[200px] flex gap-4  p-2 hover:bg-white hover:text-[#247b7b]">
          {' '}
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1728402994/ep_setting_1_bdozrl.svg"
            alt=""
          />
          Account Setting{' '}
        </button></Link>
        
      </div>
      <div className="w-[170px] h-[170px] bg-[#ffffff]  text-center space-y-3 text-xs pt-3 rounded">
        <img
          className="mx-auto"
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1728399734/material-symbols_help-outline_fbcneu.svg"
          alt="/"
        />
        <h3 className="text-[16px] font-bold text-[#247b7b]">
          Need <span className="text-[#000000] ">help</span>
        </h3>
        <p className="">
          We're ready available to <br />
          provide help
        </p>
        <button className="border border-[#247b7b] p-2 rounded">
          Get help
        </button>
      </div>
    </div>
  );
};




