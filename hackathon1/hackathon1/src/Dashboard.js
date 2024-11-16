import React, { useState, useEffect } from "react";
import axios from "axios";
import Graph0 from "./Graph0";
import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
import Graph3 from "./Graph3";
import Graph4 from "./Graph4";
import Graph5 from "./Graph5";
import Graph6 from "./Graph6";
import "./styles.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jagsraising.onrender.com/dashboard");
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-content">
        <Graph0 data={data} />
        <Graph1 data={data} />
        <Graph2 data={data} />
        <Graph3 data={data} />
        <Graph4 data={data} />
        <Graph5 data={data} />
        <Graph6 data={data} />
      </div>
    </div>
  );
};

export default Dashboard;