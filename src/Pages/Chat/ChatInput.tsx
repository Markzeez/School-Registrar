import { Paperclip, Send } from "lucide-react";

interface ChatInputProps {
  input: string;
  setInput: (val: string) => void;
  handleSend: (e: React.FormEvent) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileIconClick: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  isLoading: boolean;
}

export default function ChatInput({
  input,
  setInput,
  handleSend,
  handleFileChange,
  handleFileIconClick,
  fileInputRef,
  isLoading,
}: ChatInputProps) {
  return (
    <form
      onSubmit={handleSend}
      className="flex items-center p-4 bg-white border-t border-gray-200"
    >
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        type="button"
        onClick={handleFileIconClick}
        className="mr-2 bg-gray-200 p-3 rounded-full text-gray-600 shadow-lg hover:bg-gray-300"
        disabled={isLoading}
      >
        <Paperclip size={20} />
      </button>
      <input
        type="text"
        className="flex-1 p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={isLoading}
      />
      <button
        type="submit"
        className="ml-2 bg-cyan-500 p-3 rounded-full text-white shadow-lg hover:bg-blue-500"
        disabled={isLoading}
      >
        <Send size={20} />
      </button>
    </form>
  );
}
