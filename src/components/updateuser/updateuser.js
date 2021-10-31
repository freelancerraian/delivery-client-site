import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './updateuser.css';

const UpdateUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `https://obscure-shelf-23886.herokuapp.com/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  // update user
  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedUser = { name: updatedName, email: user.email };
    setUser(updatedUser);
  };
  const handleEmailChange = (e) => {
    const updatedEmail = e.target.value;
    const updatedUser = { email: updatedEmail, name: user.name };
    setUser(updatedUser);
    // const updatedUser = {...user};
    // updatedUser.email = updatedEmail;
  };
  const handleUpdateUser = (e) => {
    const url = `https://obscure-shelf-23886.herokuapp.com/users/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Success");
          setUser({});
        }
      });

    e.preventDefault();
  };

  return (
    <div className="m-5">
      <div className="container d-flex justify-content-center">
        <div className="updateuser p-5 ">
          <h2>Update {user.name}</h2>
          <p>{id}</p>
          <form onSubmit={handleUpdateUser}>
            <input
              type="text"
              onChange={handleNameChange}
              value={user.name || ""}
            />
            <br />
            <br />
            <br />
            <input
              type="email"
              onChange={handleEmailChange}
              value={user.email || ""}
            />
            <br />
            <br />
            <br />
            <input type="submit" value="Update" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;