import React,{useEffect,useState} from 'react';
import SignupService from '../services/signupService';

const SignupComponent=()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
  
    const handleSignup = async (e) => {
      e.preventDefault();
  
      try {
        const userData = {
          name: name,
          email: email,
          password: password,
          phone: phone,
          address: address,
        };
  
        const response = await SignupService.signup(userData);
        alert(response.message);
  
        // Clear form fields after successful signup
        setName('');
        setEmail('');
        setPassword('');
        setPhone('');
        setAddress('');
      } catch (error) {
        console.error('Error signing up:', error);
      }
    };
  
    return (
      <div className="signup">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
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
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            required
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
}

export default SignupComponent