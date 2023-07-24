const BaseUrl = 'http://127.0.0.1:5000'; // Replace with your backend URL

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
      return data;
    } catch (error) {
      throw new Error('Error logging in:', error);
    }
  },
};

export default LoginService;
