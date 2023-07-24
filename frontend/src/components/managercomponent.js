import React, { useEffect, useState } from "react";
import "../modules/manager.css";
import { useNavigate } from "react-router-dom";
import PortfolioManagersService from "../services/managerservice";

const ManagerComponent = () => {
  const navigate = useNavigate();
  const [portfolioManagers, setPortfolioManagers] = useState([]);
  const [formData, setFormData] = useState({
    img: "",
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
      if (JSON.parse(sessionStorage.getItem("token") == undefined)) {
        alert("Please login first");
        navigate("/login");
      } else {
        const response =
          await PortfolioManagersService.fetchAllPortfolioManagers();
        setPortfolioManagers(response);
      }
    } catch (error) {
      console.error("Error fetching portfolio managers:", error);
    }
  };

  const handleInputChange = (event) => {
    if (event.target.name == "status") {
      if (event.target.checked == true) {
        event.target.value = "Active";
      } else {
        event.target.value = "Not Active";
      }
    }
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Refresh the portfolio managers after a new one is created
      await PortfolioManagersService.createPortfolioManager(formData);
      setFormData({
        img: "",
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
      const response = await PortfolioManagersService.deletePortfolioManager(
        portfolioManagerId
      );
      // Refresh the portfolio managers after a deletion
      fetchAllData();
      console.log("Portfolio Manager deleted:", response.data);
    } catch (error) {
      console.error("Error deleting portfolio manager:", error);
    }
  };

  return (
    <div className="manager">
      <h1>Portfolio Managers</h1>
      <hr className="hr-man"></hr>
      <form onSubmit={handleSubmit}>
        <h4>Upload your image</h4>
        <input
          className="custom-input"
          type="text"
          name="img"
          placeholder="image"
          value={formData.img}
          onChange={handleInputChange}
          required
        />
        <h4>Please enter your name</h4>
        <input
          className="custom-input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <h4>Please check if you are active</h4>
        <input
          className="custom-input"
          type="checkbox"
          name="status"
          value={formData.status}
          onChange={handleInputChange}
          placeholder="Status"
        />
        <h4>Please select your role</h4>
        <select
          className="custom-input"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>
            Select Role
          </option>
          <option value="Administrator">Administrator</option>
          <option value="Viewer">Viewer</option>
        </select>
        <h4>Write about yourself</h4>
        <textarea
          className="custom-input"
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          placeholder="Bio"
          required
        />
        <h4>Select date</h4>
        <input
          className="custom-input"
          type="date"
          name="start_date"
          value={formData.start_date}
          onChange={handleInputChange}
          required
        />
        <br />
        <button type="submit">Create Portfolio Manager</button>
      </form>
      <div className="manager-list">
        {portfolioManagers &&
          portfolioManagers.map((manager) => (
            <div key={manager._id} className="manager-div">
              <img src={manager.img} />
              
              <p>Name: {manager.name}</p>
              <p>Status: {manager.status}</p>
              <p>Role: {manager.role}</p>
              <p>Bio: {manager.bio}</p>
              <p>Start Date: {manager.start_date}</p>
              <button onClick={() => handleDelete(manager._id)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ManagerComponent;
