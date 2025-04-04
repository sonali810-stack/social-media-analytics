import React, { useState, useEffect } from "react";
import axios from "../services/api";
import UserCard from "../assets/components/UserCard";

function TopUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/users")
      .then((response) => {
        const sortedUsers = Object.entries(response.data.users).slice(0, 5);
        setUsers(sortedUsers);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h2>Top 5 Users</h2>
      {users.map(([id, name]) => (
        <UserCard key={id} name={name} />
      ))}
    </div>
  );
}

export default TopUsers;
