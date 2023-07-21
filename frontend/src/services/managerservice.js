export const fetchAllPortfolioManagers = async () => {
    try {
       let res=await fetch("http://127.0.0.1:5000/manager/portfolio-managers");
      let r=await res.json();
      console.log(r);
    } catch (error) {
      console.log(error);
    }
  };

export const createPortfolioManager = async (portfolioManagerData) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/manager/portfolio-managers', {
        method:"POST",
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify(portfolioManagerData)
      });
     let r=await response.json();
    } catch (error) {
      throw error;
    }
}; 

// const getPortfolioManagerById = async (portfolioManagerId) => {
//     try {
//       const response = await .get(`http://123.0.0.1:5000/manager/portfolio-managers/${portfolioManagerId}`);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
// };
  
// const updatePortfolioManager = async (portfolioManagerId, portfolioManagerData) => {
//     try {
//       const response = await api.put(`http://123.0.0.1:5000/manager/portfolio-managers/${portfolioManagerId}`, portfolioManagerData);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };  
export const deletePortfolioManager = async (portfolioManagerId) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/manager/portfolio-managers/${portfolioManagerId}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }; 
 
