


const Logout: React.FC = () => {


  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <p className="text-xs">
        Logged in as: 
        {/* <span className="font-bold">{user?.firstName || 'Guest'}</span> */}
      </p>
      <button
        className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
