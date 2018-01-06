import React from "react";
import PropTypes from "prop-types";

export const InputField = ({label, type, placeholder, errorMessage, invalidField}) => (
    <div>
        <label>{label}: </label>
        <input type={type} placeholder={placeholder}/>
        {invalidField &&
            <div className='error-message'>
                <span>{errorMessage}</span>
            </div>
        }
    </div>
);

InputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    invalidField: PropTypes.bool,
    errorMessage: PropTypes.string,
};

InputField.defaultProps = {
    invalidField: false,
    errorMessage: "",
};
