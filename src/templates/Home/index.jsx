import "./styles.css";
import Cards from "../../components/Cards";
import { useEffect, useState } from "react";
import fetchApi from "../../utils/fetch-api";
/* import loadPost from "./fetch/fetch-axios"; */

function App() {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(4);
  const [search, setSearchName] = useState("");

  //fetching data via Axios

  /* 
  const handleFetchAxios = async () => {
    const { data } = await loadPost();
    setUsers(data);
  }; 

  useEffect(() => {
    handleFetchAxios();
  }, []); 
  */

  //fetching data via Fetch API

  useEffect(() => {
    const handleFetchApi = async () => {
      const data = await fetchApi();

      //if you want to get data doing SSR, just filter the data before setting it
      //this is going to give you much performance

      /*const filteredData = data.filter(el => el.id <= counter)
      setUsers(filteredData); */

      setUsers(data);
    };

    handleFetchApi();
  }, [counter]);

  return (
    <div className="app">
      <label>
        <h1>Pesquise: </h1>
        <input
          data-testid="search"
          type="text"
          value={search}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </label>
      <div className="container" data-testid="posts">
        {(users.length === 0 && <h1>Sem posts!</h1>) || (!!search &&
          users
            .filter((el) => el.title.toLowerCase().includes(search.toLowerCase()))
            .map((el) => (
              <Cards title={el.title} body={el.body} id={el.id} />
            ))) ||
        (!!users &&
          users
            .filter((el) => el.id <= counter)
            .map((el) => (
              <Cards title={el.title} body={el.body} id={el.id} />
            ))) 
          }
      </div>
      {!!search || (
        <button onClick={() => setCounter((prevState) => prevState + 4)}>
          VER MAIS
        </button>
      )}
    </div>
  );
}

export default App;
