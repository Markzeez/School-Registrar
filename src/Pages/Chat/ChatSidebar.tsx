import { UserCircle } from "lucide-react";

interface ChatSidebarProps {
  users: { id: string; name: string }[];
  activeChat: string;
  setActiveChat: (id: string) => void;
}

export default function ChatSidebar({ users, activeChat, setActiveChat }: ChatSidebarProps) {
  return (
    <div className="w-1/4 max-w-[250px] bg-gray-200 border-r border-gray-300 p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 text-center">Messages</h2>
      {users.map((user) => (
        <div
          key={user.id}
          onClick={() => setActiveChat(user.id)}
          className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
            activeChat === user.id
              ? "bg-blue-300 text-white shadow-md"
              : "hover:bg-slate-200 text-gray-800"
          }`}
        >
          <UserCircle size={24} className="mr-3" />
          <span className="font-medium truncate">{user.name}</span>
        </div>
      ))}
    </div>
  );
}
