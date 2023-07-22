import React, { useEffect, useState } from "react";
import ProjectService from "../services/projectService";
import "../modules/project.css";

const ProjectComponent = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    project_name: "",
    status: "",
    start_date: "",
    end_date: "",
    portfolio_manager_name: "",
  });

  useEffect(() => {
    fetchAllProjects();
  }, []);

  const fetchAllProjects = async () => {
    try {
      const allProjects = await ProjectService.getAllProjects();
      setProjects(allProjects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await ProjectService.createProject(formData);
      setFormData({
        project_name: "",
        status: "",
        start_date: "",
        end_date: "",
        portfolio_manager_name: "",
      });
      fetchAllProjects();
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const handleDelete = async (projectId) => {
    try {
      await ProjectService.deleteProject(projectId);
      setProjects(projects.filter((project) => project._id !== projectId));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };
  
  return (
    <div className="project">
      <div className="project-main">
        <div >
            <h1>Enter Project Details</h1>
            <hr className="project-hr"></hr>
          <form onSubmit={handleSubmit} className="form-project">
            <h4>Please enter project name</h4>
            <input
              className="input"
              type="text"
              name="project_name"
              value={formData.project_name}
              onChange={handleInputChange}
              placeholder="Project Name"
              required
            />
            <h4>Please select status of your project</h4>
            <select
              className="input"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="Planned">Planned</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <h4>Choose start date</h4>
            <input
              className="input"
              type="date"
              name="start_date"
              value={formData.start_date}
              onChange={handleInputChange}
              required
            />
            <h4>Choose end date</h4>
            <input
              className="input"
              type="date"
              name="end_date"
              value={formData.end_date}
              onChange={handleInputChange}
              required
            />
            <h4>Please choose and write portfolio manager name </h4>
            <input
              className="input"
              type="text"
              name="portfolio_manager_name"
              value={formData.portfolio_manager_name}
              onChange={handleInputChange}
              placeholder="Portfolio Manager Name"
              required
            />
            <br />
            <button type="submit">Create Project</button>
          </form>
        </div>
        <div>
          <h1>Projects List</h1>
          <hr></hr>
          <div className="project-list">
            <div className="project1">
                <h2>Filter by status</h2>
                
            </div>
            <div className="project2">
            {projects.map((project) => (
              <div key={project._id} className="project-div">
                <p className="title">Project Name: {project.project_name}</p>
                <p className="status">Status: {project.status}</p>
                <p className="start">Start Date: {project.start_date}</p>
                <p className="end">End Date: {project.end_date}</p>
                {/* <p>Portfolio Manager ID: {project.portfolio_manager_id}</p> */}
                <button onClick={() => handleDelete(project._id)}>Delete</button>
              </div>
            ))}
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
