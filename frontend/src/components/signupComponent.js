import React,{useEffect,useState} from 'react';
import SignupService from '../services/signupService';
import "../modules/signup.css"

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
        <h1>Sign Up</h1>
        <hr className='sign-hr'></hr>
        <form onSubmit={handleSignup}>
          <h3>Write your name</h3>
          <input
            type="text"
            value={name}
            className='input'
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <h3>Write your email address</h3>
          <input
            type="email"
            value={email}
            className='input'
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <h3>Write your password</h3>
          <input
            type="password"
            value={password}
            className='input'
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <h3>Write your Mobile No.</h3>
          <input
            type="tel"
            value={phone}
            className='input'
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            required
          />
          <h3>Write your address</h3>
          <input
            type="text"
            value={address}
            className='input'
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
          /><br/>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
}

export default SignupComponent