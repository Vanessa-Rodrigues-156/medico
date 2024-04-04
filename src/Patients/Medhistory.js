import { Link } from "react-router-dom";

const Medhistory = () => {
    return(
      <>
      <div className="text-center">
       <h5>Welcome to Medico!</h5>
       <p> To ensure we provide you with the best possible healthcare experience, we kindly request you to complete your profile by filling out some essential personal details.</p>
       <p> Your information is crucial for tailoring our services to meet your unique needs and preferences.</p>
       <p>Rest assured that we treat your information with the utmost confidentiality and follow strict security measures to safeguard your privacy.</p>
       <p>By completing your profile, you empower us to offer you a more personalized and effective healthcare experience. Thank you for your cooperation in building a healthier and happier you!</p>
       <h5>Lets get your profile set up....</h5>
       </div>
       <form className="row g-3">
  
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Blood Group</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>A+</option>
      <option>B+</option>
      <option>O+</option>
      <option>AB+</option>
      <option>A-</option>
      <option>B-</option>
      <option>O-</option>
      <option>AB-</option>
    </select>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Diabities</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>None</option>
      <option>Type 1</option>
      <option>Type </option>
      <option>Gestational </option>
    </select>
  </div>
  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Current Medications</label>
    <select className="form-select"  id="validationDefault04"required>
      <option selected disabled value="">Choose...</option>
      <option>None</option>
      <option>Prescriptions</option>
      <option>Over the counter</option>
      <option>Herbals</option>
      <option>Vitamins/Minerals</option>
      <option>Chemotherapy/Radiotherapy</option>
      <option>Other...</option>
    </select>
    <input type="text" className="form-control" id="validationDefault05" placeholder="List of Medications" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault05" className="form-label">Allergies</label>
    <select className="form-select" id="validationDefault04"required>
      <option selected disabled value="">Choose...</option>
      <option>None</option>
      <option>Food Allergy</option>
      <option>Medication Allergy</option>
      <option>Latex Allergy</option>
      <option>Insects Allergy</option>
      <option>Airborne Allergy</option>
      <option>Skin Allergy</option>
      <option>Other...</option>
    </select>
    <input type="text" className="form-control" id="validationDefault05" placeholder="Specify" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Surgeries</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>None</option>
      <option>Cardiovascular Surgery</option>
      <option>Orthopedics Surgery</option>
      <option>Dental Surgery</option>
      <option>Plastic Surgery</option>
      <option>Colon Surgery</option>
      <option>Neurosurgery</option>
      <option>Oncology Surgery</option>
      <option>Ophthalmology Surgery</option>
      <option>Bariatric surgery</option>
      <option>Appendectomy</option>
      <option>Cesarean section</option>
      <option>Hysterectomy </option>
      <option>Mastectomy </option>
      <option>Cholecystectomy </option>
      <option>Vascular Surgery</option>
    </select>
    <input type="text" className="form-control" id="validationDefault05" placeholder="Please sSpecify" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Blood Pressure</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>None</option>
      <option>High Blood Pressure</option>
      <option>low Blood Pressure </option>
    </select>
    <input type="text" className="form-control" id="validationDefault05" placeholder="Please sSpecify" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Cancer</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>Nope</option>
      <option>Stage 1</option>
      <option>Stage 2</option>
      <option>Stage 3</option>
      <option>Stage 4</option>
    </select>
    <input type="text" className="form-control" id="validationDefault05" placeholder="Please Specify Location" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Substance Use</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>None</option>
      <option>Alcohol</option>
      <option>Tobacco/Nicotine</option>
      <option>Cannabis (Marijuana)</option>
      <option>Opioids</option>
      <option>Stimulants</option>
      <option>Hallucinogens</option>
      <option>Inhalants</option>
      <option>Club Drugs</option>
    </select>
    <input type="text" className="form-control" id="validationDefault05" placeholder="Specify Extent Of Usage" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Heart Disease</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>None</option>
      <option>Coronary Artery Disease (CAD)</option>
      <option>Heart Failure</option>
      <option>Myocardial Infarction (Heart Attack)</option>
      <option>Arrhythmias</option>
      <option>Valvular Heart Disease</option>
      <option>Congenital Heart Defects</option>
      <option>Infective Endocarditis</option>
      <option>Pericardial Diseases</option>
      <option>Hypertensive Heart Disease</option>
      <option>Ischemic Heart Disease</option>
    </select>
    <input type="text" className="form-control" id="validationDefault05" placeholder="Please Specify" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">HIV/AIDS</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>Yes</option>
      <option>Nope</option>
    </select>
    <input type="text" className="form-control" id="validationDefault05" placeholder="Please Specify Date When Detected" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Covid Vaccination</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>Yes</option>
      <option>Nope</option>
    </select>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Tuberculosis (TB)</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>Nope</option>
      <option>Latent TB Infection (LTBI)</option>
      <option>Active TB Disease</option>
      <option>Pulmonary TB</option>
      <option>Extrapulmonary TB</option>
      <option>Drug-Resistant TB</option>
      <option>Multidrug-Resistant TB (MDR-TB)</option>
      <option>Extensively Drug-Resistant TB (XDR-TB)</option>
    </select>
    <input type="text" className="form-control" id="validationDefault05" placeholder="Please Specify Date When Detected" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Psychological Disease</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>Depressive Disorders</option>
      <option>Anxiety Disorders</option>
      <option>Obsessive-Compulsive and Related Disorders</option>
      <option>Trauma and Stressor-Related Disorders</option>
      <option>Schizophrenia Spectrum and Other Psychotic Disorders</option>
      <option>Neurodevelopmental Disorders</option>
      <option>Eating Disorders</option>
      <option>Personality Disorders</option>
      <option>Dissociative Disorders</option>
      <option>Sleep-Wake Disorders</option>
      <option>Substance-Related and Addictive Disorders</option>
      <option>Feeding and Eating Disorders</option>
    </select>
    <input type="text" className="form-control" id="validationDefault05" placeholder="Please Specify.." required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Physical Disorder</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>Mobility Impairments</option>
      <option>Orthopedic Disabilities</option>
      <option>Spinal Cord Injuries</option>
      <option>Cerebral Palsy</option>
      <option>Neuromuscular Disorders</option>
      <option>Degenerative Diseases</option>
      <option>Amputations</option>
      <option>Visual Impairments</option>
      <option>Hearing Impairments</option>
      <option>Speech Disorders</option>
      <option>Intellectual Disabilities</option>
      <option>Traumatic Brain Injuries (TBIs)</option>
    </select>
    <input type="text" className="form-control" id="validationDefault05" placeholder="Please Specify" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Ever Been In Any Accidents?</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>Yes</option>
      <option>Nope</option>
    </select>
    <input type="text" className="form-control" id="validationDefault05" placeholder="Please Specify" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Gastrointestinal Diseases</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>Constipation</option>
      <option>Gastroesophageal Reflux Disease (GERD)</option>
      <option>Peptic Ulcer Disease</option>
      <option>Inflammatory Bowel Disease (IBD)</option>
      <option>Irritable Bowel Syndrome (IBS)</option>
      <option>Celiac Disease</option>
      <option>Gallstones</option>
      <option>Liver Cirrhosis</option>
      <option>Pancreatitis</option>
      <option>Diverticulitis</option>
      <option>Gastroenteritis</option>
    </select>
    <input type="text" className="form-control" id="validationDefault05" placeholder="Please sSpecify" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Neurological diseases</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>Alzheimer's Disease</option>
      <option>Parkinson's Disease</option>
      <option>Multiple Sclerosis (MS)</option>
      <option>Amyotrophic Lateral Sclerosis (ALS)</option>
      <option>Epilepsy</option>
      <option>Migraines</option>
      <option>Huntington's Disease</option>
      <option>Stroke</option>
      <option>Neuropathy</option>
      <option>Traumatic Brain Injury (TBI)</option>
      <option>Cerebral Palsy</option>
      <option>Myasthenia Gravis</option>
      <option>Guillain-Barré Syndrome</option>
      <option>Restless Legs Syndrome (RLS)</option>
      <option>Tourette Syndrome</option>
    </select>
    <input type="text" className="form-control" id="validationDefault05" placeholder="Please sSpecify" required/>
  </div>
  <div className="col-md-3">
    <label for="validationDefault04" className="form-label">Are You An Insomniac</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>Yes</option>
      <option>Nope</option>
    </select>
    <input type="text" className="form-control" id="validationDefault05" placeholder="Please Specify" required/>
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
    <Link to="/profilepg" className="btn btn-primary" >Done!</Link>
  </div>
</form>
</>
        )
    };
    
    export default Medhistory;