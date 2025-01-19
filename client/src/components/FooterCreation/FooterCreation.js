import React from "react";

const FooterComponent = () => {
  return (
    <footer
      style={{
        padding: "20px", // Space inside the container
        margin: "20px auto", // Space outside the container, auto centers it
        backgroundColor: "#f9f9f9", // Optional: Background color for better visibility
        borderRadius: "8px", // Optional: Rounded corners
        maxWidth: "800px", // Optional: Restrict the width
        textAlign: "center", // Optional: Center align text
      }}
    >
      <h2>Custom AI Widget Maker</h2>
      <p>© 2025 JELLYSPACE. All rights reserved.</p>
    </footer>
  );
};

export default FooterComponent;
