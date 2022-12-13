import supabase from "../config/supabaseClient";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null); // Initialize state variable to store data

  useEffect(() => {

    // Fetch data from API when the component mounts

    fetch("https://example.com/api/data")
      .then(response => response.json()) // Parse the response as JSON
      .then(data => setData(data)); // Set the data in state
  }, []);

  if (!data) {
    // If the data is not yet available, show a loading message
    return <p>Loading data...</p>;
  }

  // Otherwise, display the data
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
