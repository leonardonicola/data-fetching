import "./App.css";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import fetchApi from "./utils/fetch-api";
/* import loadPost from "./fetch/fetch-axios"; */

function App() {
  const [users, setUsers] = useState([]);

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
        <Cards usersList={users} />
      </div>
    </div>
  );
}

export default App;
