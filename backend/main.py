from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from agents import (
    predictive_agent,
    telemetry_agent,
    ueba_agent,
    voice_agent,
    manufacturing_agent,
)

app = FastAPI(title="Agentic AI Predictive Maintenance")

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"status": "Agentic AI Backend Running"}

# 🔮 Predictive Insights
@app.get("/predictive")
def predictive():
    return predictive_agent()

# 📈 Live Telemetry
@app.get("/telemetry")
def telemetry():
    return telemetry_agent()

# 🔐 UEBA Security
@app.get("/ueba")
def ueba():
    return ueba_agent()

# 🤖 Voice Agent (Chatbot)
@app.post("/voice")
def voice(message: str):
    return voice_agent(message)

# 🏭 Manufacturing Feedback
@app.get("/manufacturing")
def manufacturing():
    return manufacturing_agent()
