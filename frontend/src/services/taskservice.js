const baseurl = 'https://prism-port.onrender.com/task'

const TaskService = {
    getAllTasks: async () => {
      try {
        const response = await fetch(`${baseurl}/get_tasks`);
        const data = await response.json();
        console.log(data);
        return JSON.parse(data);
      } catch (error) {
        throw new Error('Error fetching tasks:', error);
      }
    },
  
    createTask: async (task_data) => {
      try {
        const response = await fetch(`${baseurl}/create_task`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(task_data),
        });
        const data = await response.json();
        alert(data.message)
        return data;
      } catch (error) {
        throw new Error('Error creating task:', error);
      }
    },
  
    deleteTask: async (taskId) => {
      try {
        const response = await fetch(`${baseurl}/delete_task/${taskId}`, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
          const responseData = await response.json(); 
          alert(responseData.message); 
          return responseData.data; 
        } else {
          throw new Error('Failed to delete task: ' + response.status); 
        }
      } catch (error) {
        throw new Error('Error deleting task:', error);
      }
    },
  };
  
  export default TaskService;
  