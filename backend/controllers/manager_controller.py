from flask import request, jsonify
import sys
import os

# Add the parent_folder to the Python path
current_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(current_dir)
sys.path.append(parent_dir)

from config.db import db

def create_managers():
    data = request.json
    name = data['name']
    email = data['email']
    contact = data['contact']

    manager_collection = db['portfolio_Manager']
    manager_data = {
        'name':name,
        'email':email,
        'contact':contact
    }
    manager_id = manager_collection.insert_one(manager_data).inserted_id

    return jsonify({"message":"New Portfolio Manager created successfully"})

def getAll_managers():
    manager_collection = db['portfolio_Manager']
    managers = list(manager_collection.find())
    return jsonify(managers),200

def get_managers_byId(manager_id):
    manager_collection = db['portfolio_Manager']
    manager = manager_collection.find_one({"_id":manager_id})

    if manager:
        return jsonify(manager),200
    else:
        return jsonify({"message":"Portfolio Manager not found"}),404
    

    