import './Cards.css'

const Cards = ({ usersList, counter }) => {
  return (
    <>
      {usersList &&
        usersList
          .filter((_, i) => i < counter)
          .map((user) => (
            <div key={user.id} className="card">
              <div className="card__header">
                <h4>{user.title}</h4>
              </div>
              <div className="card__infos">
                <p>{user.body}</p>
              </div>
            </div>
          ))}
    </>
  );
};

export default Cards;
