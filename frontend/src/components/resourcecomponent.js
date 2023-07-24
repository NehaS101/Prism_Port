import React, { useEffect, useState } from 'react';
import ResourceService from '../services/resourceService';

const ResourceComponent = () => {
  const [resources, setResources] = useState([]);
  const [newResourceName, setNewResourceName] = useState("");
  const [newTaskAssigned, setNewTaskAssigned] = useState("");

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const data = await ResourceService.getAllResources();
      console.log(data);
      setResources(data);
      
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
      <h2>Resources</h2>
      <div className="create-resource">
        <input
          type="text"
          value={newResourceName}
          onChange={(e) => setNewResourceName(e.target.value)}
          placeholder="Resource Name"
        />
        <input
          type="text"
          value={newTaskAssigned}
          onChange={(e) => setNewTaskAssigned(e.target.value)}
          placeholder="Task Assigned"
        />
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
