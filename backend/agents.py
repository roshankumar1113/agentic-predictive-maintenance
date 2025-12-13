import joblib
model = joblib.load("model.pkl")

class DataAnalysisAgent:
    def analyze(self, v):
        return [
            v["age_years"],
            v["mileage_km"],
            v["last_service_days"],
            v["dtc_count"],
            v["complaints"],
            v["warranty_claims"]
        ]

class DiagnosisAgent:
    def predict(self, features):
        risk = model.predict_proba([features])[0][1]
        return {"risk": risk, "status": "CRITICAL" if risk > 0.7 else "NORMAL"}

class VoiceAgent:
    def call(self, vid):
        print(f"📞 Voice Agent: Calling {vid}")

class SchedulingAgent:
    def book(self, vid):
        print(f"📅 Service booked for {vid}")

class ManufacturingAgent:
    def rca(self):
        print("🏭 RCA sent to manufacturing")

class UEBAAgent:
    def monitor(self, agent, action):
        pass

class MasterAgent:
    def __init__(self):
        self.data = DataAnalysisAgent()
        self.diag = DiagnosisAgent()
        self.voice = VoiceAgent()
        self.schedule = SchedulingAgent()
        self.mfg = ManufacturingAgent()
        self.ueba = UEBAAgent()

    def process(self, v):
        features = self.data.analyze(v)
        result = self.diag.predict(features)

        if result["risk"] > 0.7:
            self.voice.call(v["vehicle_id"])
            self.schedule.book(v["vehicle_id"])
            self.mfg.rca()

        return result
