import React, { useState } from "react";
import axios from "axios"; // Import axios for API calls

function SearchWidget() {
  const [query, setQuery] = useState(""); // State for the input query
  const [results, setResults] = useState([]); // State for the results
  const [error, setError] = useState(null); // State for error handling

  // Function to handle the search API call
  const handleSearch = async () => {
    console.log("Query to be sent:", query);
    try {
      setError(null); // Reset error state
      const response = await axios.post("http://localhost:8080/search", {
        query, // Pass the query in the request body
      });
      console.log("Response from backend:", response.data);
      setResults(response.data.results || []); // Assuming the backend sends { results: [...] }
    } catch (err) {
      setError("Failed to fetch search results. Please try again.");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Search Widget</h1>

      {/* Input field for search query */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state
        placeholder="Enter search query"
        style={{
          padding: "10px",
          marginRight: "10px",
          width: "300px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />

      {/* Search button */}
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      {/* Display error message */}
      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

      {/* Display results */}
      {results.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <p>
            <strong>Results:</strong>
          </p>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchWidget;
