import '../App.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import fireapp from '../firebase';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const auth = getAuth(fireapp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signinMessage, setSigninMessage] = useState("");
  const navigate = useNavigate();

  const Signin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        setSigninMessage("Successfully logged in.");
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        setSigninMessage(errorCode);
      });
  }

  return (
    <div className="main">
      <div className='App'>
      <div className="quiz">
      <h1>Login</h1> 
      
      
    </div>
        <input type={"email"} placeholder="please enter your email" onChange={(e) => setEmail(e.target.value)} />
        <input type={"password"} placeholder="please enter password" onChange={(e) => setPassword(e.target.value)} />
        {signinMessage && <div class="error">{signinMessage}</div>}
        <button onClick={Signin}>Sign in</button>
        <div> i don't have account <Link to="/signup">Sign up</Link></div>
      </div>
    </div>
  );
}

export default Login;
