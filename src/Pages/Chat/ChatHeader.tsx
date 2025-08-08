import { UserCircle } from "lucide-react";

interface ChatHeaderProps {
  name: string | undefined;
}

export default function ChatHeader({ name }: ChatHeaderProps) {
  return (
    <div className="flex items-center p-4 bg-white border-b border-gray-300 shadow">
      <UserCircle size={28} className="text-gray-600 mr-4" />
      <span className="font-semibold text-lg text-gray-800">{name}</span>
    </div>
  );
}
