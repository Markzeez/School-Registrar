import { FC } from 'react';

const ProfileForm: FC = () => {
  return (
    <div className="flex flex-col items-center w-full p-10">
      <div className="flex flex-col items-center mb-8">
        <img
          className="w-24 h-24 rounded-full border-4 border-white shadow-md"
          src="https://i.pravatar.cc/100?img=12"
          alt="User"
        />
        <h2 className="text-xl font-semibold mt-3">Sara Tancredi</h2>
        <p className="text-gray-500 text-sm">New York, USA</p>
      </div>
      <form className="grid grid-cols-2 gap-6 w-full max-w-2xl">
        <input className="border p-3 rounded" placeholder="Name" defaultValue="Sara" />
        <input className="border p-3 rounded" placeholder="Full Name" defaultValue="Tancredi" />
        <input className="border p-3 rounded col-span-2" placeholder="Email Address" defaultValue="Sara Tancredi@gmail" />
        <input className="border p-3 rounded" placeholder="Phone Number" defaultValue="(+98) 9123782167" />
        <input className="border p-3 rounded" placeholder="Location" defaultValue="e.g. New York, USA" />
        <input className="border p-3 rounded" placeholder="Postal Code" defaultValue="23728167" />
      </form>
      <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded shadow-md">
        Save Changes
      </button>
    </div>
  );
};

export default ProfileForm;
