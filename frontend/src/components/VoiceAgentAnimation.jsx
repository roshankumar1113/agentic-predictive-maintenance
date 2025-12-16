import { useState } from "react";

export default function VoiceAgentStatus() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hello 👋 I’m your AI Vehicle Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const aiReply = {
        role: "ai",
        text:
          "Based on recent diagnostics, your vehicle is operating normally. A preventive service is recommended within 7 days to maintain optimal performance.",
      };
      setMessages((prev) => [...prev, aiReply]);
      setTyping(false);
    }, 1500);
  };

  return (
    <div
      className="fade-up glow-hover bg-[#16272e] border-l-4 border-purple-400 
      rounded-xl p-6 h-full flex flex-col"
    >
      {/* HEADER */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold text-purple-300">
          🤖 AI Voice Assistant
        </h3>
        <p className="text-xs text-gray-400">
          Conversational support · 24×7
        </p>
      </div>

      {/* CHAT WINDOW */}
      <div className="flex-1 overflow-y-auto space-y-3 text-sm pr-1">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[85%] px-3 py-2 rounded-lg ${
              msg.role === "ai"
                ? "bg-purple-500/20 text-gray-200"
                : "bg-cyan-500/20 text-white ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {typing && (
          <div className="text-xs text-gray-400 animate-pulse">
            AI Assistant is typing…
          </div>
        )}
      </div>

      {/* INPUT */}
      <div className="mt-4 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask about your vehicle health…"
          className="flex-1 px-3 py-2 rounded-lg bg-black/30 text-white text-sm focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-purple-400 hover:bg-purple-300 text-black px-4 rounded-lg font-semibold"
        >
          Send
        </button>
      </div>

      {/* FOOTER */}
      <p className="text-xs text-gray-400 mt-3">
        Voice Agent · Secure · UEBA monitored
      </p>
    </div>
  );
}
