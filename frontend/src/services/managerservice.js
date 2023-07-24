const BaseUrl = 'https://prism-port.onrender.com/manager/portfolio-managers'
const PortfolioManagersService = {
  fetchAllPortfolioManagers : async () => {
    try {
       let res=await fetch(`${BaseUrl}`);
      let manager=await res.json();
      console.log(manager);
      return manager;
    } catch (error) {
      console.log(error);
    }
  },

 createPortfolioManager : async (portfolioManagerData) => {
    try {
      const response = await fetch(`${BaseUrl}`, {
        method:"POST",
        headers:{
          "content-type": "application/json"
        },
        body: JSON.stringify(portfolioManagerData)
      });
     let r=await response.json();
     alert(r.message);
    } catch (error) {
      throw error;
    }
},

// const getPortfolioManagerById = async (portfolioManagerId) => {
//     try {
//       const response = await .get(`${BaseUrl}/${portfolioManagerId}`);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
// };
  
// const updatePortfolioManager = async (portfolioManagerId, portfolioManagerData) => {
//     try {
//       const response = await api.put(`${BaseUrl}/${portfolioManagerId}`, portfolioManagerData);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };  
 deletePortfolioManager : async (portfolioManagerId) => {
    try {
      const response = await fetch(`${BaseUrl}/${portfolioManagerId}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
export default PortfolioManagersService
 
 
