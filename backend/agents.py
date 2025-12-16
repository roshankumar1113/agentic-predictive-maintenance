import random
from datetime import datetime

# 🔮 Predictive Agent
def predictive_agent():
    return {
        "engine_vibration": "Anomaly detected",
        "battery_health": "Degrading faster than baseline",
        "brake_wear": "Expected in 10–14 days",
        "confidence": "93%",
        "agent": "Diagnosis Agent",
    }

# 📈 Telemetry Agent
def telemetry_agent():
    return {
        "engine_temp": f"{random.randint(88, 96)} °C",
        "rpm": random.randint(2800, 3400),
        "battery_voltage": "12.4V",
        "engine_load": f"{random.randint(60, 80)}%",
        "timestamp": datetime.now(),
    }

# 🔐 UEBA Agent
def ueba_agent():
    events = [
        "Abnormal agent behavior detected",
        "Unauthorized access blocked",
        "Policy enforcement triggered",
    ]
    return {
        "severity": "HIGH",
        "event": random.choice(events),
        "agent": "UEBA Security Agent",
        "time": datetime.now(),
    }

# 🤖 Voice Agent
def voice_agent(message):
    message = message.lower()

    if "risk" in message:
        reply = "Failure risk is low with high confidence."
    elif "service" in message:
        reply = "Service is recommended within the next 7 days."
    else:
        reply = "Your vehicle is operating normally."

    return {
        "reply": reply,
        "agent": "Voice Assistant",
        "status": "Listening / Responding",
    }

# 🏭 Manufacturing Agent
def manufacturing_agent():
    return {
        "batch": "B23",
        "issue": "Recurrent brake wear",
        "root_cause": "Material tolerance deviation",
        "action": "CAPA ticket auto-created",
        "loop": "Closed-loop learning enabled",
    }
