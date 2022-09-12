const Skills = (props) => (
  <div className="card bg-base-100 shadow-xl">
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-subtitle">{props.level}</p>
    </div>
  </div>
);
export default Skills;
