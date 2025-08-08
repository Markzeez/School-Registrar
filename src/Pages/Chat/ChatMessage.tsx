import { useEffect, useRef } from "react";

// Interface for a single message object
interface Message {
  text: string;
  sender: "user" | "bot";
}

// Interface for the component's props
interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

export default function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  // A ref to automatically scroll to the bottom of the chat
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Effect to scroll to the latest message whenever the messages array updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-tr from-[#f9f9f9] via-[#b1c1df] to-[#f9f9f9] space-y-4">
      {/* Show a starter message if no messages exist and the app isn't loading */}
      {messages.length === 0 && !isLoading && (
        <div className="flex justify-center items-center h-full text-gray-500">
          <p>Start a conversation!</p>
        </div>
      )}

      {/* Map through the messages and display each one */}
      {messages.map((msg, index) => (
        <div
          key={index}
          // Align messages based on the sender
          className={`flex ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`relative p-3 rounded-2xl max-w-[80%] md:max-w-md shadow-md break-words ${
              msg.sender === "user"
                ? "bg-blue-600 text-white ml-2 rounded-br-none"
                : "bg-gray-200 text-gray-900  mr-2 rounded-bl-none"
            }`}
          >
            {/* The message text */}
            {msg.text}

            {/* The "point edge" or tail for the chat bubble */}
            {msg.sender === "user" ? (
              // For user messages (on the right), position the tail on the bottom right
              <div
                className="absolute bottom-0 right-[-10px] w-0 h-0
                           border-l-[10px] border-l-blue-600
                           border-t-[10px] border-t-transparent
                           border-b-[10px] border-b-transparent"
              ></div>
            ) : (
              // For bot messages (on the left), position the tail on the bottom left
              <div
                className="absolute bottom-0 left-[-10px] w-0 h-0
                           border-r-[10px] border-r-gray-200 
                           border-t-[10px] border-t-transparent
                           border-b-[10px] border-b-transparent"
              ></div>
            )}
          </div>
        </div>
      ))}

      {/* Show a loading indicator when the bot is "typing" */}
      {isLoading && (
        <div className="flex justify-start">
          <div className="bg-gray-200 p-3 rounded-xl max-w-xs shadow-md animate-pulse">
            Typing...
          </div>
        </div>
      )}

      {/* An empty div to act as the scroll anchor */}
      <div ref={messagesEndRef} />
    </div>
  );
}
