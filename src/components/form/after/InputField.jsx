import React from "react";
import PropTypes from "prop-types";

export const InputField = ({type}) => (<input type={type}/>);

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};
