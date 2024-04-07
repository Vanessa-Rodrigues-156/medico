import { useRef } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../connection";
import {createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import { auth } from "../connection";
// Sign up a user
const Register = () => {
  const name = useRef(); 
  const phone = useRef();
  const email = useRef();
  const city = useRef();
  const username = useRef();
  const password = useRef();

  const signUpUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User created successfully",email,password);
    // Handle success or redirect to dashboard
    const user = userCredential.user;
    await sendEmailVerification(user);
    console.log("Email verification sent");
    window.location.href = '/patientdetails';
  } catch (error) {
    // Handle errors (e.g., invalid email, weak password)
    console.log(error);
  }
};

  const dbRef = collection(db, "users");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await addDoc(dbRef, {
        name: name.current.value,
        phone: phone.current.value,
        email: email.current.value,
        city: city.current.value,
        username: username.current.value,
        password: password.current.value,
      });
      console.log("Document written with ID: ",name,phone,email,city,username,password);
      signUpUser(email.current.value, password.current.value);
      

    } catch (e) {
      console.log(e);
    }
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
        <h5 className="card-title">New here? lets get you Registered!</h5>
        <div>
          {/* --------------------------------------------------------------------------------------------------------------------------------------------*/}
          <form
            action="/register"
            method="post"
            className="row g-3 needs-validation"
            onSubmit={handleSubmit}
            novalidate>
            <div className="col-md-4 position-relative">
              <label
                for="validationTooltip01"
                className="form-label">
                Enter your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip01"
                formMethod="post"
                ref={name}
                required
              />
              <div className="valid-tooltip">Looks good!</div>
            </div>
            <div className="col-md-4 position-relative">
              <label
                for="validationTooltip02"
                className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip02"
                ref={phone}
                required
              />
              <div className="valid-tooltip">Looks good!</div>
            </div>
            <div className="col-md-4 position-relative">
              <label
                for="validationTooltipUsername"
                className="form-label">
                Email
              </label>
              <div className="input-group has-validation">
                <span
                  className="input-group-text"
                  id="validationTooltipUsernamePrepend"></span>
                <input
                  type="text"
                  className="form-control"
                  id="validationTooltipUsername"
                  aria-describedby="validationTooltipUsernamePrepend"
                  ref={email}
                  required
                />
                <div className="invalid-tooltip">
                  Please choose a valid Email.
                </div>
              </div>
            </div>
            <div className="col-md-6 position-relative">
              <label
                for="validationTooltip03"
                className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip03"
                ref={city}
                required
              />
              <div className="invalid-tooltip">
                Please provide a valid city.
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <label
                for="validationTooltip05"
                className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip05"
                ref={username}
                required
              />
              <div className="invalid-tooltip">
                Please provide a valid Username.
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <label
                for="validationTooltip05"
                className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="validationTooltip05"
                ref={password}
                required
              />
              <div className="invalid-tooltip" >
                Please provide a valid Password.
              </div>
            </div>
          </form>
        </div>
       {/*  <Link
          to="/patientdetails"
          className="m-3 btn btn-primary">
          Ur all set!
        </Link> */}
        <button
          onClick={handleSubmit}

          type="submit"
          className="m-3 btn btn-primary">
          Register!!
        </button>
      </div>
    </div>
  );
};

export default Register;
