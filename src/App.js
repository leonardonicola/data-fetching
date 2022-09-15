import "./App.css";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import fetchApi from "./utils/fetch-api";
/* import loadPost from "./fetch/fetch-axios"; */

function App() {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(4)

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
      <div className="container">
        <Cards usersList={users} counter={counter} />
      </div>
      <button onClick={() => setCounter(prevState => prevState + 4)}>VER MAIS</button>
    </div>
  );
}

export default App;
