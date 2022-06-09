import React from "react";

function ErrorMessage({ children }) {
  return (
    <div style={{ background: "red", color: "white", padding: "3px" }}>
      {children}
    </div>
  );
}

export default ErrorMessage;
