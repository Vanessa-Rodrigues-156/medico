import { useEffect, useRef, useState  } from "react";

import { addDoc, collection} from "@firebase/firestore";
import { db } from "../connection";
import { currentUser } from "./Contact";


const Patientdetails = () => {
  const F_name = useRef();
  const L_name = useRef();
  const phone = useRef();
  const Address1 = useRef();
  const Address2 = useRef();
  const city = useRef();
  const zip = useRef();
  const Age = useRef();
  const Date_ob = useRef();
  const aadhaar = useRef();
  const Insurance_C = useRef();
  const Insurance_id = useRef();
  const [state , setState] = useState("");
  const [occ , setOcc] = useState("");
  const [maritial , setMaritial] = useState("");
  const [gender , setGender] = useState("");
  const Currentuid =toString(currentUser);

  const dbRef = collection(db, "data", "data", Currentuid );

useEffect(() => { 
console.log(state);
console.log(gender);
console.log(maritial);
console.log(occ);

},[gender, maritial, occ, state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(dbRef, {
        F_name: `${F_name.current.value}`,
        L_name:` ${L_name.current.value}`,
        phone: `${phone.current.value}`,
        Address1: `${Address1.current.value}`,
        Address2: `${Address2.current.value}`,
        city: `${city.current.value}`,
        state: `${state}`,
        zip: `${zip.current.value}`,
        Age: `${Age.current.value}`,
        Date_ob: `${Date_ob.current.value}`,
        occupation: `${occ}`,
        gender: `${gender}`,
        aadhaar: `${aadhaar.current.value}`,
        maritial_s: `${maritial}`,
        Insurance_C: `${Insurance_C.current.value}`,
        Insurance_id: `${Insurance_id.current.value}`,
      });
        // phone: phone.current.value,
        // Address1: Address1.current.value,
        // Address2: Address2.current.value,
        // city: city.current.value,
        // state: state.current,
        // zip: zip.current.value,
        // Age: Age.current.value,
        // Date_ob: Date_ob.current.value,
        // occupation: occ.current,
        // gender: gender.current,
        // aadhaar: aadhaar.current.value,
        // maritial_s: maritial.current,
        // Insurance_C: Insurance_C.current.value,
        // Insurance_id: Insurance_id.current.value,
   
      window.location.href = "/profilepg";
    } catch (e) {
      console.log(e + "error prevailed in the form");
    }
  };
  return (
    <>
      <div className="text-center">
        <h5>Welcome to Medico!</h5>
        <p>
          {" "}
          To ensure we provide you with the best possible healthcare experience,
          we kindly request you to complete your profile by filling out some
          essential personal details.
        </p>
        <p>
          {" "}
          Your information is crucial for tailoring our services to meet your
          unique needs and preferences.
        </p>
        <p>
          Rest assured that we treat your information with the utmost
          confidentiality and follow strict security measures to safeguard your
          privacy.
        </p>
        <p>
          By completing your profile, you empower us to offer you a more
          personalized and effective healthcare experience. Thank you for your
          cooperation in building a healthier and happier you!
        </p>
        <h5>Lets get your profile set up....</h5>
      </div>
      <form className="row g-3">
        <div className="col-md-4">
          <label
            for="validationDefault01"
            className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            formMethod="post"
            ref={F_name}
            required
          />
        </div>
        <div className="col-md-4">
          <label
            for="validationDefault02"
            className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault02"
            formMethod="post"
            ref={L_name}
            required
          />
        </div>
        <div className="col-md-4">
          <label
            for="validationDefault03"
            className="form-label">
            Phone Number
          </label>
          <div className="input-group">
            <span
              className="input-group-text"
              id="inputGroupPrepend2">
              91+
            </span>
            <input
              type="text"
              className="form-control"
              id="validationDefault03"
              aria-describedby="inputGroupPrepend2"
              formMethod="post"
              ref={phone}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <label
            for="validationDefault04"
            className="form-label">
            Address1
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault04"
            formMethod="post"
            ref={Address1}
            required
          />
        </div>
        <div className="col-md-6">
          <label
            for="validationDefault05"
            className="form-label">
            Address2
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault05"
            formMethod="post"
            ref={Address2}
            required
          />
        </div>
        <div className="col-md-6">
          <label
            for="validationDefault06"
            className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault06"
            formMethod="post"
            ref={city}
            required
          />
        </div>
        <div className="col-md-3">
          <label
            for="validationDefault04"
            className="form-label">
            State
          </label>
          <select
            className="form-select"
            id="validationDefault04"
            formMethod="post"
            onChange={(e) => {setState(e.target.value)}}
            required>
            <option
              selected
              disabled
              value={state}>
              Choose...
            </option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value ="Kolkata">Kolkata</option>
            <option value="Chennai">Chennai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Pune">Pune</option>
            <option value="Surat">Surat</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Visakhapatnam">Visakhapatnam</option>
            <option value="Thane">Thane</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Patna">Patna</option>
           

          </select>
        </div>
        <div className="col-md-3">
          <label
            for="validationDefault05"
            className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault05"
            formMethod="post"
            ref={zip}
            required
          />
        </div>
        <div className="col-md-3">
          <label
            for="validationDefault05"
            className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault05"
            formMethod="post"
            ref={Age}
            required
          />
        </div>
        <div className="col-md-3">
          <label
            for="validationDefault05"
            className="form-label">
            Date.Of.birth
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault05"
            formMethod="post"
            ref={Date_ob}
            required
          />
        </div>
        <div className="col-md-3">
          <label
            for="validationDefault04"
            className="form-label">
            Occupation
          </label>
          <select
            className="form-select"
            id="validationDefault04"
            formMethod="post"
            onChange={(e)=>{setOcc(e.target.value)}}
            required>
            <option selected disabled value={occ}>Choose... </option>
            <option value= "army ">army</option>
            <option value="doctor">doctor</option>
            <option value ="engineer">engineer</option>
            <option value="farmer">farmer</option>
            <option value="goverment officer">government officer</option>
            <option value= "private services ">private services</option>
            <option value="student">student</option>
            <option value="teacher">teacher</option>
            <option value="unemployed">unemployed</option>
          </select>
        </div>
        <div className="col-md-3">
          <label
            for="validationDefault04"
            className="form-label">
            Gender
          </label>
          <select
            className="form-select"
            id="validationDefault04"
            formMethod="post"
            onChange={(e)=>{setGender(e.target.value)}}
            required>
            <option
              selected
              disabled
              value={gender}>
              Choose...
            </option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="col-md-3">
          <label
            for="validationDefault05"
            className="form-label">
            Adhaar Number
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault05"
            formMethod="post"
            ref={aadhaar}
            required
          />
        </div>
        <div className="col-md-3">
          <label
            for="validationDefault04"
            className="form-label">
            Marital Status
          </label>
          <select
            className="form-select"
            id="validationDefault04"
            formMethod="post"
            onChange={(e)=>{setMaritial(e.target.value)}}
            required>
            <option
              selected
              disabled
              value={maritial}>
              Choose...
            </option>
            <option>Single</option>
            <option>Married</option>
            <option>Divorced</option>
            <option>Seperated</option>
            <option>Domestic Partner</option>
          </select>
        </div>

        <div className="col-md-3">
          <label
            for="validationDefault05"
            className="form-label">
            Primary Insurance Carrier
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault05"
            formMethod="post"
            ref={Insurance_C}
            required
          />
        </div>
        <div className="col-md-3">
          <label
            for="validationDefault05"
            className="form-label">
            Insurance Id:
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault05"
            formMethod="post"
            ref={Insurance_id}
            required
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label
              className="form-check-label"
              for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
      </form>
      <button
        onClick={handleSubmit}
        type="submit"
        className="m-3 btn btn-primary">
        Register!!
      </button>
    </>
  );
};

export default Patientdetails;
