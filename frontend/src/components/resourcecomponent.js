import React, { useEffect, useState } from 'react';
import ResourceService from '../services/resourceService';
import { useNavigate } from "react-router-dom";
import "../modules/resource.css"

const ResourceComponent = () => {
  const navigate = useNavigate();
  const [resources, setResources] = useState([]);
  const [newResourceName, setNewResourceName] = useState("");
  const [newTaskAssigned, setNewTaskAssigned] = useState("");

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      if (JSON.parse(sessionStorage.getItem("token") == undefined)) {
        alert("Please login first");
        navigate("/login");
      }else{
      const data = await ResourceService.getAllResources();
      console.log(data);
      setResources(data);
      }
    } catch (error) {
      console.error("Error fetching resources:", error);
    }
  };

  const handleCreateResource = async () => {
    try {
      const newResource = {
        resource_name: newResourceName,
        task_assigned: newTaskAssigned,
      };

      await ResourceService.createResource(newResource);

      // Clear form fields after successful creation
      setNewResourceName(newResource.resource_name);
      setNewTaskAssigned(newResource.task_assigned);

      // Refresh the list of resources
      fetchResources();
    } catch (error) {
      console.error("Error creating resource:", error);
    }
  };

  const handleDeleteResource = async (resourceId) => {
    try {
      await ResourceService.deleteResource(resourceId);

      // Refresh the list of resources after successful deletion
      fetchResources();
    } catch (error) {
      console.error("Error deleting resource:", error);
    }
  };

  return (
    <div className="resource">
      <h1>Resources</h1>
      <hr className='hr-res'></hr>
      <div className="create-resource">
        <h3>Provide Resource</h3>
        <input
          type="text"
          className='res-input'
          value={newResourceName}
          onChange={(e) => setNewResourceName(e.target.value)}
          placeholder="Resource Name"
        />
        <h3>Write task name to assigned</h3>
        <input
          type="text"
          className='res-input'
          value={newTaskAssigned}
          onChange={(e) => setNewTaskAssigned(e.target.value)}
          placeholder="Task Assigned"
        /><br></br>
        <button onClick={handleCreateResource}>Create Resource</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Resource Name</th>
            <th>Tasks Assigned</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {Array.isArray(resources) &&
          resources.map((resource) => (
            <tr key={resource._id.$oid}>
              <td>{resource.resource_name}</td>
              <td>
                {resource.task_assigned}
              </td>
              <td>
                <button onClick={() => handleDeleteResource(resource._id.$oid)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody>
      </table>
    </div>
  );
};

export default ResourceComponent;
