import React, { useEffect, useState } from "react";
import {
  createPortfolioManager,
  deletePortfolioManager,
  fetchAllPortfolioManagers,
} from "../services/managerservice";

const ManagerComponent = () => {
  const [portfolioManagers, setPortfolioManagers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    status: "",
    role: "",
    bio: "",
    start_date: "",
  });

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const response = await fetchAllPortfolioManagers();
      setPortfolioManagers(response.data);
    } catch (error) {
      console.error("Error fetching portfolio managers:", error);
    }
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Refresh the portfolio managers after a new one is created
      await createPortfolioManager(formData);
      setFormData({
        name: "",
        status: "",
        role: "",
        bio: "",
        start_date: "",
      });
      fetchAllData();
      console.log("Portfolio Manager created:");
    } catch (error) {
      console.error("Error creating portfolio manager:", error);
    }
  };

  const handleDelete = async (portfolioManagerId) => {
    try {
      const response = await deletePortfolioManager(portfolioManagerId);
      // Refresh the portfolio managers after a deletion
      fetchAllData();
      console.log("Portfolio Manager deleted:", response.data);
    } catch (error) {
      console.error("Error deleting portfolio manager:", error);
    }
  };

  return (
    <div>
      <h2>Portfolio Managers</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
          placeholder="Status"
          required
        />
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          placeholder="Role"
          required
        />
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          placeholder="Bio"
          required
        />
        <input
          type="date"
          name="start_date"
          value={formData.start_date}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Create Portfolio Manager</button>
      </form>
      {portfolioManagers.map((manager) => (
        <div key={manager._id}>
          <p>Name: {manager.name}</p>
          <p>Status: {manager.status}</p>
          <p>Role: {manager.role}</p>
          <p>Bio: {manager.bio}</p>
          <p>Start Date: {manager.start_date}</p>
          <button onClick={() => handleDelete(manager._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManagerComponent;
