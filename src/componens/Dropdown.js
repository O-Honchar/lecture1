import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ItemElement from './ItemElement';

const Dropdown = ({ items }) => {
    //======= my 1st hook =======
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container">
            <button type="button" className="button" onClick={() => setIsOpen(!isOpen)}>
                &#9776;
            </button>

            {isOpen && (
                <div className="dropdown">
                    <ul>
                        {/* <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                    <li>Option 4</li> */
                            items.map(item => (
                                <ItemElement
                                    key={item.id}
                                    name={item.name}
                                />
                            ))}
                    </ul>
                </div>
            )}
        </div>
    )
};

Dropdown.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    isOpen: PropTypes.bool,
}

export default Dropdown;
