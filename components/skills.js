const Skills = (props) => (
  <div
    className="card shadow-sm mb-1 bg-white rounded"
    style={{
      textAlign: "left",
      marginTop: 10,
    }}
  >
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{props.level}</h6>
      <p className="card-text">{props.description}</p>
    </div>
  </div>
);
export default Skills;
