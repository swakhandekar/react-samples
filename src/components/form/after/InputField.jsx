import React from "react";
import PropTypes from "prop-types";

export const InputField = ({label, type, placeholder}) => (
    <div>
        <label>{label}: </label>
        <input type={type} placeholder={placeholder}/>
    </div>
);

InputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};
