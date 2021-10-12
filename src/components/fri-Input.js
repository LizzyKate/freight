import React from 'react'
import PropTypes from 'prop-types';


export default function FrInput(props) {
    return (
        <>
            {
                props.type === 'fancy' ?
                    <div className="cool">
                        <label htmlFor="fname" className="activing">{props.label}</label>
                        <input id="fname" type="text" placeholder={props.placeholder} />
                    </div> :
                    <div className="first-ex">
                        <input type="text" className="content" placeholder={props.placeholder} />
                        {!props.icon || <div className="calendar">
                            {props.icon}
                        </div>}
                    </div>
            }
        </>
    )
}


FrInput.propTypes = {
    icon: PropTypes.element,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.bool
};