import '../App.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import fireapp from '../firebase';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function Signup() {
  const auth = getAuth(fireapp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupMessage, setSignupMessage] = useState("");
  const navigate = useNavigate();

  const Signup = () => {
    if (password !== confirmPassword) {
      setSignupMessage("Passwords do not match.");
      return;
    }
    
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed Up
        const user = userCredential.user;
        console.log(user);
        setSignupMessage("Successfully created an account.");
        navigate('/login');
      })
      .catch((error) => {
        const errorCode = error.code;
        setSignupMessage(errorCode);
      });
  }

  return (
    <div className="main">
      <div className='App'>
        <div className="quiz">
          <h1>Signup</h1> 
        </div>
        <input type={"text"} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type={"email"} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type={"password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <input type={"password"} placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
        {signupMessage && <div class="error">{signupMessage}</div>}
        <button onClick={Signup}>Create Account</button>
        <div>Already have an account? <Link to="/login">Login</Link></div>
      </div>
    </div>
  );
}

export default Signup;