import React from "react";
//reusable uniwersal component
import PropTypes from "prop-types";
//reusable component, uzywany prze zludzi trzeba testowac propsy

function TextInput(props) {
  let wrapperClass = "form-group";
  if (props.error && props.error.length > 0) {
    wrapperClass += "has error";
    // mozna uzyc npm classnames i latwiej i more slicker
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type="text"
          onChange={props.onChange}
          name={props.name}
          className="form-control"
          value={props.value}
        />
      </div>
      {/* walidacja */}
      {props.errors && <div className="alert alert-danger">{props.errors}</div>}
    </div>
  );
}

//propTypes - testowanie
TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};
//propsy deafaultowe
TextInput.defaultProps = {
  error: "",
};

export default TextInput;
