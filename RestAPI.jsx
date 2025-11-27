import { useEffect, useState } from "react";
import axios from "axios";

const RestAPI = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <>
      {users.map(({ id, name, image }) => (
        <div key={id} className="bg-red-300 m-4 p-4 border rounded-xl">
          {name}
          <img className="w-50 h-50" src={`./${image}`} />
        </div>
      ))}
    </>
  );
};

export default RestAPI;
