const base_url = 'https://prism-port.onrender.com'

const SignupService = {
    signup: async (userData) => {
      try {
        const response = await fetch(`${base_url}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
          throw new Error('Failed to sign up');
        }
  
        const data = await response.json();
        return data;
      } catch (error) {
        throw new Error('Error signing up:', error);
      }
    },
  };
  
  export default SignupService;