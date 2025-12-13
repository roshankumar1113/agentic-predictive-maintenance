import numpy as np
from sklearn.ensemble import RandomForestClassifier
import joblib

X = np.array([
    [2, 30000, 120, 1, 0, 0],
    [4, 60000, 280, 5, 3, 2],
    [1, 12000, 90, 0, 0, 0],
    [5, 90000, 350, 6, 4, 3]
])

y = [0, 1, 0, 1]

model = RandomForestClassifier()
model.fit(X, y)

joblib.dump(model, "model.pkl")
print("✅ ML model trained successfully")
