import React from "react";
import PropTypes from "prop-types";
import { Box, TextField, Button, Typography } from "@mui/material";

const SearchResultsWidget = ({ status, images, retrievedText, results }) => {
  // Parse results if it's a string
  const parsedResults = React.useMemo(() => {
    if (typeof results === 'string') {
      return {
        text: results,
        score: 0.95 // Default similarity score
      };
    }
    return null;
  }, [results]);

  return (
    <div
      style={{
        width: "520px",
        padding: "45px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Search Results
      </Typography>

      {/* Search Status */}
      <div style={{ marginBottom: "20px" }}>
        <Typography variant="body2" gutterBottom>
          Search Status:
        </Typography>
        <p
          style={{
            fontWeight: "bold",
            color: status === "completed" ? "green" : 
                   status === "loading" ? "#FFA500" :  // Changed to orange
                   status === "not_started" ? "#808080" : // Gray for not started
                   "red",
          }}
        >
          {status === "loading" ? "Searching..." : 
           status === "completed" ? "Search Completed" : 
           "Not started"}
        </p>
      </div>

      {/* Retrieved Images */}
      <div style={{ marginBottom: "20px" }}>
        <Typography variant="body2" gutterBottom>
          Retrieved Images:
        </Typography>
        {images && images.length > 0 ? (
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {images.map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Retrieved-${index}`}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
              />
            ))}
          </div>
        ) : (
          <Typography variant="body2" gutterBottom>
            No images retrieved
          </Typography>
        )}
      </div>

      {/* Results Display */}
      <div>
        {status === "completed" && parsedResults && (
          <div style={{ padding: "15px", backgroundColor: "#f8f9fa", borderRadius: "5px" }}>
            <Typography variant="body1" style={{ whiteSpace: "pre-wrap" }}>
              {parsedResults.text}
            </Typography>
            <Typography variant="body2" style={{ marginTop: "10px", color: "#666" }}>
              Similarity Score: {(parsedResults.score * 100).toFixed(1)}%
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

SearchResultsWidget.propTypes = {
  status: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  retrievedText: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    })
  ),
};

SearchResultsWidget.defaultProps = {
  status: "Not started",
  images: [],
  retrievedText: [],
};

export default SearchResultsWidget;
