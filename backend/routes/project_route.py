from flask import Blueprint
from controllers.project_controller import (create_project,get_all_projects,delete_project)

project_router = Blueprint('project',__name__)

project_router.route('/create-project',methods=['POST'])(create_project)
project_router.route('/get-projects',methods=['GET'])(get_all_projects)
project_router.route('/delete-project',methods=['DELETE'])(delete_project)