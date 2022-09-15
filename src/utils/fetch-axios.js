import axios from 'axios'

//using axios to fetch data 
const loadUsersWithAxios = async () => {
    const baseUrl = "https://jsonplaceholder.typicode.com/users";
    let data
    await axios.get(baseUrl).then((res) => data = res.data);
    return {data}
}
export default loadUsersWithAxios