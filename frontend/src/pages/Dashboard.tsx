import { useEffect, useState } from "react";
import api from "../api";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await api.get("/me");
        setUser(res.data);
      } catch {
        setUser(null);
      }
    }
    fetchUser();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <p>Welcome, {user.email}</p>
      ) : (
        <p>Please login to see your dashboard.</p>
      )}
    </div>
  );
}
