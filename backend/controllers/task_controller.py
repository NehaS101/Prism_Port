from flask import request, jsonify
from bson import ObjectId
import sys
import os

# Add the parent_folder to the Python path
current_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(current_dir)
sys.path.append(parent_dir)

from config.db import db

task_collection = db["tasks"]

def create_task():
    data = request.json
    task_name = data.get('task_name')
    status = data.get('status')
    project_name = data.get('project_name')
    project = db.projects.find_one({'project_name': project_name})
    if not project:
        return jsonify({'message': 'project not found'}), 404

    task_data = {
        'task_name': task_name,
        'status': status,
        'project_name':project_name,
        'project_id': project['_id'],
    }

    project_id = db.projects.insert_one(task_data).inserted_id
    return jsonify({'message': 'Task created successfully'}), 201

def get_tasks():
    tasks = list(task_collection.find())
    return jsonify({"tasks": tasks})

def delete_task(task_id):
    task = task_collection.find_one({"_id": task_id})
    if not task:
        return jsonify({"error": "Task not found"}), 404

    task_collection.delete_one({"_id": task_id})
    return jsonify({"message": "Task deleted successfully"}), 200