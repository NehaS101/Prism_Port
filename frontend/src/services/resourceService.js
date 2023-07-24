const Base_URL = "https://prism-port.onrender.com/resource"; // Replace with your backend URL

const ResourceService = {
  getAllResources: async () => {
    try {
      const response = await fetch(`${Base_URL}/get_resource`);
      if (!response.ok) {
        throw new Error("Failed to fetch resources.");
      }
      const data = await response.json();
      console.log(data)
      return JSON.parse(data);
    } catch (error) {
      throw new Error("Error fetching resources:", error);
    }
  },

  createResource: async (newResource) => {
    try {
      const response = await fetch(`${Base_URL}/create_resource`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newResource),
      });
      if (!response.ok) {
        throw new Error("Failed to create resource.");
      }
      const data = await response.json();
      alert(data.message)
      return data;
    } catch (error) {
      throw new Error("Error creating resource:", error);
    }
  },

  deleteResource: async (resourceId) => {
    try {
      const response = await fetch(`${Base_URL}/delete_resource/${resourceId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete resource.");
      }
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      throw new Error("Error deleting resource:", error);
    }
  },
};

export default ResourceService;
