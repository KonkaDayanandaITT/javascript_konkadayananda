import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

export default function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
        <h2>User List</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{JSON.stringify(user.address)}</li>
          ))}
        </ul>
    </div>
  );

}
