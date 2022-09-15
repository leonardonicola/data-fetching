import React from "react";

const Cards = ({ usersList }) => {
  return (
    <>
      {usersList &&
        usersList
          .filter((_, i) => i < 4)
          .map((user) => (
            <div key={user.id} className="card">
              <div className="card__header">
                <h4>{user.name}</h4>
              </div>
              <div className="card__infos">
              <p>
                  <span>ID: </span>
                  {user.id}
                </p>
                <p>
                  <span>Username: </span>
                  {user.username}
                </p>
                <p>
                  <span>Email: </span> 
                  {user.email}
                </p>
              </div>
            </div>
          ))}
    </>
  );
};

export default Cards;
