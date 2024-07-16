from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd
from bson import ObjectId, json_util

app = Flask(__name__)
CORS(app)

# Load the model from disk
with open('nearest_neighbors_model.pkl', 'rb') as file:
    model = pickle.load(file)

with open('data.pkl', 'rb') as file:
    df = pickle.load(file)

def convert_objectid(obj): 
    if isinstance(obj, ObjectId): return str(obj)

@app.route('/recommend', methods=['POST'])
def predict():
    # Get the request data
    data = request.get_json(force=True)
    print('received data', data)
    # return jsonify({"message":"Product data received", "data": data})

    # Ensure the data is a list (even if it's just one dictionary)
    if isinstance(data, dict):
        data = [data]

    print(data)
    print(data[0]['price'])

    price = float(data[0]['price'])
    popularity = int(data[0]['popularity'])
    durability = int(data[0]['durability'])


    # Make a prediction
    distances, indices = model.kneighbors([[price, popularity, durability]])
    #print(indices)

    second = df.iloc[indices[0][1]]
    print("Before todict:")
    print(second)
    suggestions = (df.iloc[indices[0]].to_dict())
    print("AFTER: ")
    print((second.to_dict()))
   # suggestions = suggestions[['name', 'price']]
    return jsonify(second.to_dict())

if __name__ == '__main__':
    app.run(port=5000)