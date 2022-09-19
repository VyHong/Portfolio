const WorkCard = (props) => (
  //<Card/>
  <div data-aos="fade-right" className="mr-10 card bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">{props.name}</h2>
      <p className="mb-2">{props.position}</p>
      <p className="mb-2">
        {props.location}, {props.date}
      </p>
      <p>{props.activities}</p>
    </div>
  </div>
);
export default WorkCard;
