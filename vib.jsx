import React, { useState } from "react";

export default function VibeCoder() {
  const [input, setInput] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        ✨ Vibe Coder
      </h1>

      {/* Input Box */}
      <div className="w-full max-w-lg mb-6">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your vibe code here..."
          className="w-full p-4 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-700 resize-none"
          rows={4}
        />
      </div>

      {/* Iframe */}
      <div className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-lg border border-gray-200">
        <iframe
          src="https://your-n8n-instance.onrender.com"
          title="n8n Workflow"
          className="w-full h-[500px] border-none"
        />
      </div>
    </div>
  );
}
