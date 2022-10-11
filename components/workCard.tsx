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
    className={"card bg-base-100 shadow-xl" + props.className}
  >
    <div className="card-body gap-0 space-y-2">
      <div>
        <h2 className="card-title">{props.title}</h2>
        <p className="text-sm">{props.subtitle}</p>

        {(props.location || props.date) && (
          <p>
            {props.location}, {props.date}
          </p>
        )}
      </div>

      {props.description && <p>{props.description}</p>}
    </div>
  </div>
);

export default Card;
