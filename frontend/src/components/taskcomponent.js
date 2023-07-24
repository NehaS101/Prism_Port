import React,{useEffect,useState} from 'react';
import TaskService from '../services/taskservice';
import "../modules/task.css";

const TaskComponent=()=>{
      const [tasks, setTasks] = useState([]);
      const [formData, setFormData] = useState({
        task_name: '',
        status: '',
        project_name: '',
      });
    
      useEffect(() => {
        fetchTasks();
      }, []);
    
      const fetchTasks = async () => {
        try {
          if (JSON.parse(sessionStorage.getItem("token") == undefined)) {
            alert("Please login first");
            navigate("/login");
          }else{
          const response = await TaskService.getAllTasks();
          setTasks(response);
          }
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      };
    
      const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
           await TaskService.createTask(formData)
          setFormData({
            task_name: '',
            status: '',
            project_name: '',
          });
          fetchTasks();
        } catch (error) {
          console.error('Error creating task:', error);
        }
      };
    
      const handleDelete = async (taskId) => {
        console.log(taskId);
        try {
         const response = await TaskService.deleteTask(taskId);
         fetchTasks();
         console.log("Project deleted",response.data)
        } catch (error) {
          console.error('Error deleting task:', error);
        }
      };
    
      return (
        <div className='task-main'>
          <h1>Tasks</h1>
          <hr className='task-hr'></hr>                                                
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="task_name">Task Name:  </label>
              <input
                type="text"
                id="task_name"
                name="task_name"
                className='input-task'
                value={formData.task_name}                                                                                                                                                                                                                                                
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="status">Status:  </label>
              <select                                                                            
                id="status"
                name="status"
                className='input-task'
                value={formData.status}
                onChange={handleInputChange}
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div>
              <label htmlFor="project_name">Project Name:  </label>
              <input
                type="text"
                id="project_name"
                name="project_name"
                className='input-task'
                value={formData.project_name}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit">Create Task</button>
          </form>
          <div className="table">
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Status</th>
                <th>Project Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task._id}>
                  <td>{task.task_name}</td>
                  <td>{task.status}</td>
                  <td>{task.project_name}</td>
                  <td>
                    <button onClick={() => handleDelete(task._id.$oid)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
         
        </div>
      );
    
}

export default TaskComponent