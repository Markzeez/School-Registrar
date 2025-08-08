import { useEffect, useRef, useState } from "react";
import ChatSidebar from "../Chat/ChatSidebar";
import ChatHeader from "../Chat/ChatHeader";
import ChatInput from "../Chat/ChatInput";
import ChatMessages from "../Chat/ChatMessage";

interface Message {
  text: string;
  sender: string; // Instead of 'user' | 'bot', use user ID like 'user-1', 'user-2'
}

interface User {
  id: string;
  name: string;
}

export default function App() {
  const [users] = useState<User[]>([
    { id: "user-1", name: "Jesse Omin" },
    { id: "user-2", name: "Luck Pius" },
    { id: "user-3", name: "Azeez Ibrahim" },
  ]);

  const [activeChat, setActiveChat] = useState("user-1");
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchChatHistory = async (userId: string): Promise<Message[]> => {
    const mockHistory: Record<string, Message[]> = {
      "user-1": [
        { text: "Hello! How can I help you?", sender: "user-2" },
        { text: "What is the capital of France?", sender: "user-1" },
        { text: "The capital of France is Paris.", sender: "user-2" },
      ],
    };
    return mockHistory[userId] || [];
  };

  useEffect(() => {
    if (!messages[activeChat]) {
      setIsLoading(true);
      fetchChatHistory(activeChat)
        .then((history) => {
          setMessages((prev) => ({ ...prev, [activeChat]: history }));
        })
        .finally(() => setIsLoading(false));
    }
  }, [activeChat]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { text: input, sender: activeChat };
    setInput("");
    setIsLoading(true);

    setMessages((prev) => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), userMessage],
    }));

    // Simulate response from "user-2"
    setTimeout(() => {
      const botMessage: Message = {
        text: "Got it! Let me check.",
        sender: "user-2",
      };
      setMessages((prev) => ({
        ...prev,
        [activeChat]: [...(prev[activeChat] || []), botMessage],
      }));
      setIsLoading(false);
    }, 1000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      alert(`Selected file: ${file.name}`);
    }
  };

  const handleFileIconClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex h-screen bg-blue-50 text-blue-900">
      <ChatSidebar users={users} activeChat={activeChat} setActiveChat={setActiveChat} />
      <div className="flex flex-col flex-1">
        <ChatHeader name={users.find((u) => u.id === activeChat)?.name || "Unknown"} />
        <ChatMessages
          messages={messages[activeChat] || []}
          isLoading={isLoading}
          currentUserId={activeChat}
        />
        <ChatInput
          input={input}
          setInput={setInput}
          handleSend={handleSend}
          handleFileChange={handleFileChange}
          handleFileIconClick={handleFileIconClick}
          fileInputRef={fileInputRef}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
