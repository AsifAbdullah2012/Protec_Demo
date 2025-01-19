import React from "react";
import PropTypes from "prop-types";
import { Box, TextField, Button, Typography } from "@mui/material";

const SearchResultsWidget = ({ status, images, retrievedText }) => {
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
            color: status === "completed" ? "green" : "red",
          }}
        >
          {status || "Not started"}
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

      {/* Retrieved Text with Similarity Scores */}
      <div>
        <Typography variant="body2" gutterBottom>
          Retrieved Text:
        </Typography>
        {retrievedText && retrievedText.length > 0 ? (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {retrievedText.map((item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor: "#fff",
                }}
              >
                <strong>Similarity Score:</strong> {item.score}
                <br />
                <strong>Text:</strong> {item.text}
              </li>
            ))}
          </ul>
        ) : (
          <p>No text retrieved</p>
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
