import React,{useEffect,useState} from 'react';
import {createPortfolioManager, updatePortfolioManager,getPortfolioManagerById, deletePortfolioManager,fetchAllPortfolioManagers} from '../services/managerservice';

const ManagerComponent=()=>{
    const [portfolioManagers, setPortfolioManagers] = useState([]);
    const [formData, setFormData] = useState({
      name: '',
      status: '',
      role: '',
      bio: '',
      start_date: '',
    });

    useEffect(() => {
        fetchAllPortfolioManagers();
      }, []);

      const fetchAllPortfolioManagers = async () => {
        try {
          const response = await getAllPortfolioManagers();
          setPortfolioManagers(response.data);
        } catch (error) {
          console.error('Error fetching portfolio managers:', error);
        }
      };
      
      const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await createPortfolioManager(formData);
          // Refresh the portfolio managers after a new one is created
          fetchAllPortfolioManagers();
          console.log('Portfolio Manager created:', response.data);
        } catch (error) {
          console.error('Error creating portfolio manager:', error);
        }
      }; 
}

export default ManagerComponent