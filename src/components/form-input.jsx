// import React from 'react'
import "./form-input.scss";
// eslint-disable-next-line react/prop-types
function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
