import { Link } from "react-router-dom";
const Reports = () => {
    return(
        <>
      <div className="text-center">
       <h5>Welcome to Medico!</h5>
       <p> To ensure we provide you with the best possible healthcare experience, we kindly request you to complete your profile by filling out some essential personal details.</p>
       <p> Your information is crucial for tailoring our services to meet your unique needs and preferences.</p>
       <p>Rest assured that we treat your information with the utmost confidentiality and follow strict security measures to safeguard your privacy.</p>
       <p>By completing your profile, you empower us to offer you a more personalized and effective healthcare experience. Thank you for your cooperation in building a healthier and happier you!</p>
       <h5>Lets Upload Your Reports....</h5>
       </div>
       <form className="row g-3">
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">X-ray Scan</label>
    <input type="file" className="form-control" aria-label="X-ray Scan" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Computed Tomography (CT) Scan</label>
    <input type="file" className="form-control" aria-label="Computed Tomography (CT) Scan" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Magnetic Resonance Imaging (MRI)</label>
    <input type="file" className="form-control" aria-label="Magnetic Resonance Imaging (MRI)" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Ultrasound</label>
    <input type="file" className="form-control" aria-label="Ultrasound" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Positron Emission Tomography (PET) Scan</label>
    <input type="file" className="form-control" aria-label="Positron Emission Tomography (PET) Scan" required/>
  </div>  
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Bone Scan</label>
    <input type="file" className="form-control" aria-label="Bone Scan" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Mammography</label>
    <input type="file" className="form-control" aria-label="Mammography" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Fluoroscopy</label>
    <input type="file" className="form-control" aria-label="Fluoroscopy" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Nuclear Medicine Scan</label>
    <input type="file" className="form-control" aria-label="Nuclear Medicine Scan" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Angiography</label>
    <input type="file" className="form-control" aria-label="Angiography" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Electrocardiogram (ECG or EKG)</label>
    <input type="file" className="form-control" aria-label="Electrocardiogram (ECG or EKG)" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Echocardiogram</label>
    <input type="file" className="form-control" aria-label="Echocardiogram" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Stress Test (Exercise Electrocardiogram)</label>
    <input type="file" className="form-control" aria-label="Stress Test (Exercise Electrocardiogram)" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Nuclear Stress Test</label>
    <input type="file" className="form-control" aria-label="Nuclear Stress Test" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Cardiac CT Angiography (CTA)</label>
    <input type="file" className="form-control" aria-label="Cardiac CT Angiography (CTA)" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Coronary Angiography (Cardiac Catheterization)</label>
    <input type="file" className="form-control" aria-label="Coronary Angiography (Cardiac Catheterization)" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Myocardial Perfusion Imaging (MPI)</label>
    <input type="file" className="form-control" aria-label="Myocardial Perfusion Imaging (MPI)" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Transesophageal Echocardiogram (TEE)</label>
    <input type="file" className="form-control" aria-label="Transesophageal Echocardiogram (TEE)" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Holter Monitor</label>
    <input type="file" className="form-control" aria-label="Holter Monitor" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Complete Blood Count (CBC)</label>
    <input type="file" className="form-control" aria-label="Complete Blood Count (CBC)" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Blood Chemistry Panel</label>
    <input type="file" className="form-control" aria-label="Blood Chemistry Panel" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Blood Glucose Test</label>
    <input type="file" className="form-control" aria-label="Blood Glucose Test" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Lipid Panel</label>
    <input type="file" className="form-control" aria-label="Lipid Panel" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Thyroid Function Tests</label>
    <input type="file" className="form-control" aria-label="Thyroid Function Tests" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Liver Function Tests (LFTs)</label>
    <input type="file" className="form-control" aria-label="Liver Function Tests (LFTs)" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Renal Function Tests</label>
    <input type="file" className="form-control" aria-label="Renal Function Tests" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Coagulation Profile</label>
    <input type="file" className="form-control" aria-label="Coagulation Profile" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">C-Reactive Protein (CRP)</label>
    <input type="file" className="form-control" aria-label="C-Reactive Protein (CRP)" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Hemoglobin A1c (HbA1c):</label>
    <input type="file" className="form-control" aria-label="Hemoglobin A1c (HbA1c):" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Vitamin D Test</label>
    <input type="file" className="form-control" aria-label="Vitamin D Test" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Iron Studies</label>
    <input type="file" className="form-control" aria-label="Iron Studies" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">HIV Test</label>
    <input type="file" className="form-control" aria-label="HIV Test" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Hepatitis Panel</label>
    <input type="file" className="form-control" aria-label="Hepatitis Panel" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Fasting Blood Sugar Test (FBS)</label>
    <input type="file" className="form-control" aria-label="Fasting Blood Sugar Test (FBS)" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Random Blood Sugar Test:</label>
    <input type="file" className="form-control" aria-label="Random Blood Sugar Test:" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Oral Glucose Tolerance Test (OGTT):</label>
    <input type="file" className="form-control" aria-label="Oral Glucose Tolerance Test (OGTT):" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Hemoglobin A1c (HbA1c) Test:</label>
    <input type="file" className="form-control" aria-label="Hemoglobin A1c (HbA1c) Test:" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Glycated Albumin (GA) Test:</label>
    <input type="file" className="form-control" aria-label="Glycated Albumin (GA) Test:" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Continuous Glucose Monitoring (CGM):</label>
    <input type="file" className="form-control" aria-label="Continuous Glucose Monitoring (CGM):" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Fructosamine Test:</label>
    <input type="file" className="form-control" aria-label="Fructosamine Test:" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Insulin Level Test:</label>
    <input type="file" className="form-control" aria-label="Insulin Level Test:" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">C-Peptide Test:</label>
    <input type="file" className="form-control" aria-label="C-Peptide Test:" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Postprandial Blood Sugar Test:</label>
    <input type="file" className="form-control" aria-label="Postprandial Blood Sugar Test:" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Ketone Testing:</label>
    <input type="file" className="form-control" aria-label="Ketone Testing:" required/>
  </div>
  <div className="col-md-4">
    <label for="validationDefault01" className="form-label">Autoantibody Tests:</label>
    <input type="file" className="form-control" aria-label="Autoantibody Tests:" required/>
  </div>

  <div className="col-12">
    <Link to="/profilepg" className="btn btn-primary" >All Done!</Link>
  </div>
</form>
</>
    )
};
export default Reports;