import "./App.css";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import fetchApi from "./utils/fetch-api";
/* import loadPost from "./fetch/fetch-axios"; */

function App() {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(4)
  const [search, setSearchName] = useState('')

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
  
  const handleFetchApi = async () => {
    const data = await fetchApi();
    setUsers(data);
  };

  useEffect(() => {
    handleFetchApi();
  }, []);

  return (
    <div className="app">
      <input type="text" onChange={e => setSearchName(e.target.value)}/>
      <div className="container">
        <Cards usersList={users} counter={counter} search={search}/>
      </div>
      {counter < users.length &&
        <button onClick={() => setCounter(prevState => prevState + 4)}>VER MAIS</button>
      }
    </div>
  );
}

export default App;
