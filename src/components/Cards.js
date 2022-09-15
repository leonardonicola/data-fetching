import "./Cards.css";

const Cards = ({ usersList, counter, search }) => {
  return (
    <>
      {(search &&
        usersList
          .filter((el) => el.title.toLowerCase().includes(search.toLowerCase()))
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
          ))) ||
        (!!usersList &&
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
            )))}
    </>
  );
};

export default Cards;
