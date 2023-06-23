// import React from 'react'
import "./button.css";

// eslint-disable-next-line react/prop-types
function Button({ handleChange, children, type }) {
  return (
    <div>
      <button type={type || "button"} className="submit-btn" onClick={handleChange}>
        {children}
      </button>
    </div>
  );
}

export default Button;
