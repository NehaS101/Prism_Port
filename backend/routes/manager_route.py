from flask import Blueprint
from controllers.manager_controller import(
    create_managers,
    getAll_managers,
    get_managers_byId,
    update_managers_byId,
    delete_manager
)

manager_router = Blueprint('crud', __name__)

manager_router.route('/portfolio-managers',methods=['POST'])(create_managers)

manager_router.route('/portfolio-managers',methods=['GET'])(getAll_managers)

