import "./styles.css";

const Cards = ({ title, body, id }) => {
  return (
    <>
      {!!title && (
        <div key={id} className="card">
          <div className="card__header">
            <h4 data-testid="post-title">{title}</h4>
          </div>
          <div className="card__infos">
            <p>{body}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Cards;
