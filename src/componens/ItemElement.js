import React from 'react';
import PropTypes from 'prop-types';

const ItmElement = ({ name }) => (
    <li>{name}</li>
);

ItmElement.propTypes = {    
    name: PropTypes.string.isRequired,
};

export default ItmElement;
