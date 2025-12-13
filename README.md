# Agentic Predictive Maintenance

A Full-Stack AI-Driven Predictive Maintenance System  
for automotive vehicles (Hero MotoCorp & Mahindra use case).

This prototype uses:
- 🚀 FastAPI backend with autonomous AI agents
- 📊 Scikit-learn ML model for failure prediction
- 🚗 React frontend dashboard (beautiful and interactive)
- 🤖 Agentic workflow: Data Analysis → Diagnosis → Voice → Scheduling → RCA/Manufacturing
- 🔒 UEBA security monitoring

## Features
✔ Predicts vehicle health risk  
✔ Automatically schedules service  
✔ Simulates voice agent interaction  
✔ Shows agent activity logs  
✔ Professional, attractive dashboard UI

## Run Locally

### Backend
```bash
cd backend
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
