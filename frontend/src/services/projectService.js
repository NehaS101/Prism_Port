const BASE_URL = 'http://127.0.0.1:5000'
const ProjectService = {
    getAllProjects: async () => {
      const response = await fetch(`${BASE_URL}/project/get-projects`);
      const projects = await response.json();
      console.log(projects)
      return projects;
    },
  
    createProject: async (projectData) => {
      const response = await fetch(`${BASE_URL}/project/create-project`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });
      const data = await response.json();
     alert(data.message)
      return data;
    },
    deleteProject: async (projectId) => {
      try {
       const response= await fetch(`${BASE_URL}/project/delete-project${projectId}`, {
          method: 'DELETE',
        });
        const data = await response.json();
        alert(data.message)
      } catch (error) {
        throw new Error('Error deleting project:', error);
      }
    },
  };
  
  export default ProjectService;