import { Link } from "react-router-dom";

const Profilepg = () => {
    return (
   
      <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <h5>Namaste!!</h5>
            <p>Welcome to Medico - Your Comprehensive Healthcare Companion</p>
  
             <p>Empowering you with cutting-edge technology, Medico is your trusted partner in wellness and medical management. Seamlessly integrating advanced features, our app is designed to enhance your healthcare experience, providing a user-friendly platform that puts your well-being at the forefront.</p>
          </li>
        </ul>
      </div>
    
    
  <div className="card">
  <div className="card-body">
  <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Fill Medical History</h5>
        <p className="card-text"></p>
        <Link to="/medhistory" className="btn btn-primary">Fill</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Upload Medical Reports</h5>
        <p className="card-text"></p>
        <Link to="/reports" className="btn btn-primary">Upload</Link>
      </div>
    </div>
  </div>  
  <div className="col-sm-6 mt-3 mb-3 mb-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Display Data</h5>
        <p className="card-text"></p>
        <Link to="#" className="btn btn-primary">View info</Link>
      </div>
    </div>
  </div>
  <div className="col-sm-6 mt-3 mb-3 mb-sm-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Display Reports</h5>
        <p className="card-text"></p>
        <Link to="#" className="btn btn-primary">Display</Link>
      </div>
    </div>
  </div>
</div>
  </div>
</div>

</div>

)
  };
  
  export default Profilepg;