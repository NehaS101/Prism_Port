import api from "../api/api";

export const fetchAllPortfolioManagers = async () => {
    try {
      const response = await api.get('/manager/portfolio-managers');
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const createPortfolioManager = async (portfolioManagerData) => {
    try {
      const response = await api.post('/manager/portfolio-managers', portfolioManagerData);
      return response.data;
    } catch (error) {
      throw error;
    }
}; 

const getPortfolioManagerById = async (portfolioManagerId) => {
    try {
      const response = await api.get(`/manager/portfolio-managers/${portfolioManagerId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
};
  
const updatePortfolioManager = async (portfolioManagerId, portfolioManagerData) => {
    try {
      const response = await api.put(`/manager/portfolio-managers/${portfolioManagerId}`, portfolioManagerData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };  
export const deletePortfolioManager = async (portfolioManagerId) => {
    try {
      const response = await api.delete(`/manager/portfolio-managers/${portfolioManagerId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }; 
 
