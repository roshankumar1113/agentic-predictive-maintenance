import { useState } from "react";

export default function AppointmentModal({ open, onClose }) {
  const [mode, setMode] = useState("login");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="w-full max-w-md bg-[#0f2027] rounded-2xl p-6 shadow-xl">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-cyan-300">
            🚗 Service Appointment
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex mb-6">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 py-2 rounded-l-lg ${
              mode === "login"
                ? "bg-cyan-500 text-black"
                : "bg-[#16272e] text-gray-400"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`flex-1 py-2 rounded-r-lg ${
              mode === "signup"
                ? "bg-cyan-500 text-black"
                : "bg-[#16272e] text-gray-400"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {mode === "signup" && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-[#16272e] text-white outline-none"
            />
          )}

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full p-3 rounded-lg bg-[#16272e] text-white outline-none"
          />

          <input
            type="text"
            placeholder="Vehicle ID (e.g. HM001)"
            className="w-full p-3 rounded-lg bg-[#16272e] text-white outline-none"
          />

          <input
            type="date"
            className="w-full p-3 rounded-lg bg-[#16272e] text-white outline-none"
          />

          <button
            type="submit"
            className="w-full mt-4 bg-cyan-500 text-black py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
          >
            Confirm Appointment
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4 text-center">
          Secure Agent · Customer Interaction Layer
        </p>
      </div>
    </div>
  );
}
