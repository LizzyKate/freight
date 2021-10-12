import React from 'react'
import PropTypes from 'prop-types';

export default function FrInput(props) {
    return (
        <div className="second-port">
            <div className="from">
                <div>
                    {props.icon}
                </div>
                <div>
                    {props.label}
                </div>
            </div>
            <div className="select">
                <select defaultValue="">
                    <option value="" disabled>City or Port</option>
                    {props.options.map(((e, i) =>
                        <option value={e} key={i}> {e} </option>
                    ))}
                </select>
            </div>
        </div >
    )
}


FrInput.propTypes = {
    icon: PropTypes.element,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
};