from flask import request, jsonify
from bson import ObjectId
import sys
import os

# Add the parent_folder to the Python path
current_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(current_dir)
sys.path.append(parent_dir)

from config.db import db