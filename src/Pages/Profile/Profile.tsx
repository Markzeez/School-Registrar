interface ProfileProps {
  isCollapsed: boolean,
  name: string,
  email: string,
  imageUrl: string,
}

const Profile: React.FC<ProfileProps> = ({ isCollapsed, name, email, imageUrl}) => {
  return (
      <div className="flex  items-start p-[-10px] dark:bg-gray-900 text-black dark:text-white">
          <img
          src={imageUrl}
          alt="User Profile"
          className="rounded-full w-10 h-10 border"/>
          {!isCollapsed && (<div className="ml-1">
              <h2 className="text-xs font-semibold">{name}</h2>
              <p className="text-xs font-extralight text-gray-900">{email}</p>
          </div>)}
      </div>
  )
};

export default Profile