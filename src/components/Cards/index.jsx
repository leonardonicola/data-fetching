import "./styles.css";

const Cards = ({ usersList, counter, search }) => {

  const template = (post) => (
    <div key={post.id} className="card">
      <div className="card__header">
        <h4>{post.title}</h4>
      </div>
      <div className="card__infos">
        <p>{post.body}</p>
      </div>
    </div>
  );

  const filteredSearch = () => {
    const filterList = usersList
      .filter((el) => el.title.toLowerCase().includes(search.toLowerCase()))
      .map((post) => template(post));
    if (filterList.length === 0) {
      return <h1>Não encontrei nada no sistema</h1>;
    } else {
      return filterList;
    }
  };

  const mapListWithCounter = () =>
    usersList.filter((_, i) => i < counter).map((post) => template(post));

  return (
    <>
      {/* if have search input, show results */}
      {(!!search && filteredSearch()) ||
        //if only have the list, display values with a show more option button
        (!!usersList && mapListWithCounter())}
    </>
  );
};

export default Cards;
