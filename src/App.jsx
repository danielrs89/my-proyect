import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";

// instalar axios
// npm install axios

function App() {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    // FETCH
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data = await response.json();
    // setUsers(data);

    // AXIOS
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
  }

  // nada mas se monta el componente llama a la funcion asincrona
  useEffect(() => {
    getUsers();
  }, [])

  //se transformad de json a elementos html
  const HTMLgetUsers = users.map((user) => {
    return (
      <div key={user.id}>
        <p>{user.name}</p>
      </div>
    )
  })

  return (
    <>
    <h1>AXIOS | llamadas a apis</h1>
      {HTMLgetUsers}
    </>
  )
}

export default App