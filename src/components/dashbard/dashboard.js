import React, { useEffect, useState } from 'react';
import Users from '../users/users';
import './dashboard.css';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetch("https://obscure-shelf-23886.herokuapp.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, []);

    return (
      <div>
        <div className="container">
          <h1 className="text-center m-4">Dashboard</h1>
          <h4>Users Details : </h4>
          <div className="row mb-5 mt-5">
            {users.map((user) => (
              <Users key={users._id} user={user}></Users>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Dashboard;