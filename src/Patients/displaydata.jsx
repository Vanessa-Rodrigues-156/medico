const DisplayData = () => {
  var Image;
  return (
    <div>
      <h1>Medical history</h1>

      <div className="col-md-4">
        <label
          for="validationDefault01"
          className="form-label">
          medical report
        </label>
        <input
          type="file"
          filename={Image}
          className="form-control"
          aria-label="X-ray Scan"
          required
        />
      </div>
      <img
        src="../ftsqfnvf.png"
        alt="ssor"
      />
      <img
        src="https://i.ibb.co/VHpNy69/B-10276-9.png"
        alt="B-10276-9"
        border="0"></img>
      <img
        src={"https://i.ibb.co/7y6qZ3Y/" + Image + ".png"}
        alt="ftsqfnvf"
        border="0"></img>
    </div>
  );
};
export default DisplayData;
