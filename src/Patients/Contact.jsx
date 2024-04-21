import { Link } from "react-router-dom";
//import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {db, auth } from "../connection";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
let currentuser;
const Contact = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
   const [successMessage, setSuccessMessage] = useState("");
  //const [user] = useAuthState(auth);

const validateForm = () => {
  if (!email || !password) {
    setErrorMessage("Email and password cannot be empty");
    return false;
  }
  if (!email.includes("@")) {
    setErrorMessage("Invalid email format");
    return false;
  }
  if (password.length < 6) {
    setErrorMessage("Password must be at least 6 characters long");
    return false;
  }
  return true;
};
  const handleLogin = async (e) => {
   e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      //await auth.signInWithEmailAndPassword(email, password);
      await signInWithEmailAndPassword(auth, email, password);
      // User is logged in
      console.log("User logged in:", auth.currentUser.email);
      setSuccessMessage(`Welcome to Medico ${auth.currentUser.email}!! Now Let's head to your details page.`); 

     currentuser= auth.currentUser.uid; 
      await addDoc(collection(db,"data"),currentuser,{
         userId: auth.currentUser.uid});
       
      setTimeout(() => {
      window.location.href = "/patientdetails";
      }, 2000);
    } catch (err) {
      console.error("Error logging in:", err.message);
      setErrorMessage("Failed to sign in: " + err.message + "Please try registering");
      window.location.href = "/register";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(e);
  };

  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <h5>Namaste!!</h5>
            <p>Welcome to Medico - Your Comprehensive Healthcare Companion</p>

            <p>
              Empowering you with cutting-edge technology, Medico is your
              trusted partner in wellness and medical management. Seamlessly
              integrating advanced features, our app is designed to enhance your
              healthcare experience, providing a user-friendly platform that
              puts your well-being at the forefront.
            </p>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active"
              to="/contact">
              SignIn
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active"
              to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
      <div className="card-body">
        {successMessage && <p>{successMessage}</p>}
        <div>
          <h5 className="card-title">New here? lets get you Signed-In</h5>
          <form
            action="/contact"
            method="post"
            onSubmit={handleSubmit}>
            <div className="col-my-6">
              <label
                for="inputEmail4"
                className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-my-6 position-relative">
              <label
                for="inputPassword4"
                className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* <Link
          to="/patientdetails"
          className="m-3 btn btn-primary">
          lets go!!
        </Link> */}
            <button
              type="submit"
              className="m-3 btn btn-primary">
              log in
            </button>
            {errorMessage && <p>{errorMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};
export var currentUser = currentuser;


export default Contact;
