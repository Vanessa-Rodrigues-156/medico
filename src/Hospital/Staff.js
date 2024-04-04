import { Link } from "react-router-dom";

const Staff = () => {
    return (
      <>
      <div className="text-center">
       <h5>Welcome to Medico!</h5>
       <p> To ensure we provide you with the best possible healthcare experience, we kindly request you to complete your profile by filling out some essential personal details.</p>
       <p> Your information is crucial for tailoring our services to meet your unique needs and preferences.</p>
       <p>Rest assured that we treat your information with the utmost confidentiality and follow strict security measures to safeguard your privacy.</p>
       <p>By completing your profile, you empower us to offer you a more personalized and effective healthcare experience. Thank you for your cooperation in building a healthier and happier you!</p>
       <h5>Enter Staff Details....</h5>
       </div>
       <form className="row g-3">
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationDefault01" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationDefault02" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefaultUsername" className="form-label">Phone Number</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">91+</span>
      <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  <div className="col-md-6">
    <label for="validationDefault03" className="form-label">Address1</label>
    <input type="text" className="form-control" id="validationDefault03" required/>
  </div>
  <div className="col-md-6">
    <label for="validationDefault03" className="form-label">Address2</label>
    <input type="text" className="form-control" id="validationDefault03" required/>
  </div>
  <div className="col-md-6">
    <label for="validationDefault03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationDefault03" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">State</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationDefault05" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Adhaar Number</label>
    <input type="text" className="form-control" id="validationDefault05" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Designation</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Gender</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>Male</option>
      <option>Female</option>
    </select>
  </div>
    <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Date.Of.birth</label>
    <input type="text" className="form-control" id="validationDefault05" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Salary</label>
    <input type="text" className="form-control" id="validationDefault05" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault01" className="form-label">Resume</label>
    <input type="file" className="form-control" aria-label="Resume" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault01" className="form-label">Adhaar-Card</label>
    <input type="file" className="form-control" aria-label="Adhaar-Card" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault01" className="form-label">Pan-Card</label>
    <input type="file" className="form-control" aria-label="Pan-Card" required/>
  </div>

  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label className="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div className="col-12">
    <Link to="/mainpg" className="btn btn-primary" >All Done!</Link>
  </div>
</form>
</>
    );
  };
  
  export default Staff;