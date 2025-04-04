import { useEffect, useState } from "react";
import api from "../../services/api";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get("/top-users") // Ensure correct endpoint
      .then((response) => {
        console.log("API Response:", response.data); // Debugging
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="text-center mt-4">Loading...</h2>;
  if (error) return <h2 className="text-danger text-center mt-4">Error: {error}</h2>;

  return (
    <div className="container mt-4">
      <h1 className="mb-3">Top 5 Users</h1>
      <ul className="list-group">
        {users.length > 0 ? (
          users.map((user, index) => (
            <li key={index} className="list-group-item">{user.name}</li>
          ))
        ) : (
          <li className="list-group-item">No users found</li>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
