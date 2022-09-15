const loadUsersWithApi = async () => {
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";
  const usersRes = fetch(baseUrl);
  const [users] = await Promise.all([usersRes]);
  const userJson = await users.json();
  return userJson
};

export default loadUsersWithApi;
