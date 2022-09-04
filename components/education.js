const Education = (props) => (
  <div
    data-aos="fade-left"
    className="card shadow-sm mb-1 bg-white rounded"
    style={{
      width: "80%",
      textAlign: "left",
      marginTop: 10,
    }}
  >
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{props.degree}</h6>
      <h5 className="card-subtitle mb-2 text-muted">
        {props.location}, {props.date}
      </h5>
      <p className="card-text">{props.description}</p>
    </div>
  </div>
);
export default Education;
