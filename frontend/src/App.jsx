import PredictiveInsights from "./components/PredictiveInsights";
import ServiceRecommendation from "./components/ServiceRecommendation";
import UebaAlert from "./components/UebaAlert";
import ManufacturingFeedback from "./components/ManufacturingFeedback";
import SystemConfidence from "./components/SystemConfidence";
import LiveTelemetryChart from "./components/LiveTelemetryChart";
import VoiceAgentAnimation from "./components/VoiceAgentAnimation";
import AutoTimeline from "./components/AutoTimeline";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0b1f26] via-[#17323c] to-[#0b1f26] text-white">

      <div className="max-w-7xl mx-auto px-8 py-10 space-y-14">

        {/* ================= HEADER ================= */}
        <header className="relative space-y-4 fade-up">

  {/* Soft animated glow behind title */}
  <div className="absolute -top-6 -left-6 w-64 h-24 
    bg-cyan-500/10 blur-3xl rounded-full animate-pulse" />

  {/* Title */}
  <h1 className="relative text-4xl md:text-5xl font-extrabold tracking-tight">
    <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-blue-300 
      bg-clip-text text-transparent">
      Agentic AI Predictive Maintenance
    </span>
  </h1>

  {/* Subtitle */}
  <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
    <span className="text-gray-300 font-medium">
      Hero MotoCorp & Mahindra
    </span>{" "}
    · Autonomous Aftersales Intelligence powered by real-time
    diagnostics, agent orchestration, and predictive analytics.
  </p>

  {/* Status badges */}
  <div className="flex flex-wrap gap-3 pt-2">
    <span className="px-3 py-1 text-xs rounded-full 
      bg-cyan-500/10 text-cyan-300 border border-cyan-400/30">
      Agentic AI
    </span>
    <span className="px-3 py-1 text-xs rounded-full 
      bg-green-500/10 text-green-300 border border-green-400/30">
      Real-time Inference
    </span>
    <span className="px-3 py-1 text-xs rounded-full 
      bg-purple-500/10 text-purple-300 border border-purple-400/30">
      Enterprise Ready
    </span>
  </div>

</header>


        {/* ================= SUMMARY CARDS ================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Vehicle */}
          <div
            className="bg-[#16272e] rounded-2xl p-6 space-y-2 fade-up glow-hover"
            style={{ animationDelay: "0.1s" }}
          >
            <p className="text-gray-400 text-sm">🚗 Vehicle</p>
            <h3 className="text-2xl font-semibold text-cyan-400">HM001</h3>
            <p className="text-sm text-gray-400">
              Model: Hero Splendor · Pune
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Identity Agent · Verified
            </p>
          </div>

          {/* Health */}
          <div
            className="bg-[#16272e] rounded-2xl p-6 space-y-2 fade-up glow-hover"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-gray-400 text-sm">🩺 Vehicle Health</p>
            <h3 className="text-2xl font-semibold text-green-400">Normal</h3>
            <p className="text-sm text-gray-400">Trend: Stable ↑</p>
            <p className="text-xs text-gray-500 mt-3">
              Diagnosis Agent · Live inference
            </p>
          </div>

          {/* Risk */}
          <div
            className="bg-[#16272e] rounded-2xl p-6 space-y-2 fade-up glow-hover"
            style={{ animationDelay: "0.3s" }}
          >
            <p className="text-gray-400 text-sm">⚠ Failure Risk</p>
            <h3 className="text-2xl font-semibold text-yellow-400">Low</h3>
            <p className="text-sm text-gray-400">
              Model Confidence:{" "}
              <span className="text-purple-400 font-semibold">93%</span>
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Prediction Agent · High confidence
            </p>
          </div>

        </section>

        {/* ================= DECISION LAYER ================= */}
        <section>
          <h2 className="relative inline-block text-xl font-semibold text-cyan-300 mb-8 fade-up">
            <span className="relative z-10">Agentic AI Decision Layer</span>
            <span className="absolute left-0 -bottom-2 h-[2px] w-full 
              bg-gradient-to-r from-cyan-400 via-teal-400 to-transparent 
              animate-glow-line" />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            <PredictiveInsights />
            <ServiceRecommendation />
            <UebaAlert />
            <ManufacturingFeedback />
            <SystemConfidence />
            <LiveTelemetryChart />
            <VoiceAgentAnimation />

          </div>
        </section>

        {/* ================= ACTIVITY TIMELINE ================= */}
        <section>
          <h2 className="text-xl font-semibold text-purple-300 mb-4 fade-up">
            Agent Activity Timeline
          </h2>
          <div className="bg-[#16272e] rounded-xl p-6 text-gray-400 fade-up">
            No agent activity recorded yet
          </div>
        </section>

      </div>
    </div>
  );
}
