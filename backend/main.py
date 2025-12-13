from fastapi import FastAPI
from agents import MasterAgent

app = FastAPI()
master = MasterAgent()

@app.post("/predict")
def predict(vehicle: dict):
    return master.process(vehicle)
