
const Blogs = () => {
    return (
      <div>
      <div className="accordion" id="accordionExample">
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>About MEDICO </strong>
    </button>
  </h2>
  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    In In an era of digital healthcare, Medico stands as an innovative solution for efficient patient management. With a profound understanding of the evolving needs of healthcare professionals and patients, Medico was conceived to streamline medical processes and enhance the overall healthcare experience. Developed with a focus on security, convenience, and accessibility, Medico serves as a reliable platform for managing patient information, scheduling appointments, facilitating secure communication, and ensuring seamless integration with various healthcare services. Through its user-friendly interface and comprehensive features, Medico is poised to revolutionize the way healthcare providers and patients interact, fostering a more connected and efficient healthcare ecosystem.
    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
    <strong>Our Motivation...</strong>
    </button>
  </h2>
  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body">
    It is not a pleasant experience to fill out long medical forms while visiting a hospital also Physical records can get damaged or lost. It is difficult for elderly folks to carry or maintain their medical history. It is a hectic process for hospitals to physically manage and store patient’s past medical history. This became the driving force behind the creation of 'Medico'.

    </div>
  </div>
</div>
<div className="accordion-item">
  <h2 className="accordion-header">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     <strong>THE TEAM</strong>
    </button>
  </h2>
  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
    <div className="accordion-body">
      <strong>
        Saket Pokale : App Incharge (^o^)</strong> 
    </div>
  </div>
</div>
</div>
  </div>
    )
  };
  
  export default Blogs;