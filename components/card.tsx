interface cardProps {
  title: string;
  subtitle: string;
  location?: string;
  date?: string;
  description?: string;
  className?: string;
}

const Card = (props: cardProps) => (
  <div
    data-aos="fade-right"
    className={"card bg-base-100 shadow-xl " + props.className}
  >
    <div className="card-body">
      <h2 className="card-title">{props.title}</h2>
      <p>{props.subtitle}</p>

      {(props.location || props.date) && (
        <p className="mb-2">
          {props.location}, {props.date}
        </p>
      )}

      {props.description && <p>{props.description}</p>}
    </div>
  </div>
);

export default Card;
