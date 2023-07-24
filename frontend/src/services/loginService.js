const BaseUrl = 'https://prism-port.onrender.com'; // Replace with your backend URL

const LoginService = {
  login: async (loginData) => {
    try {
      const response = await fetch(`${BaseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to log in');
      }

      const data = await response.json();
      let id=data.id;
      let token=data.token;
      let name=data.name;
      sessionStorage.setItem("id",JSON.stringify(id));
      sessionStorage.setItem("token",JSON.stringify(token));
      sessionStorage.setItem("name",JSON.stringify(name));

      return data;

    } catch (error) {
      throw new Error('Error logging in:', error);
    }
  },
};

export default LoginService;
