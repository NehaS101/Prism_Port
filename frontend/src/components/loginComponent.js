import React,{useEffect,useState} from 'react';

const LoginComponent=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const loginData = {
          email: email,
          password: password,
        };
  
        const response = await AuthService.login(loginData);
        alert(response.message);
  
        // Clear form fields after successful login
        setEmail('');
        setPassword('');
      } catch (error) {
        console.error('Error logging in:', error);
      }
    };
  
    return (
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
}

export default LoginComponent