import React, { useState } from 'react'
import PropTypes from 'prop-types';


export default function FrInput(props) {
    const [inputType, setType] = useState('text')

    const handleType = () => {
        setType('date')
    }
    return (
        
        <>
            {
                props.type === 'fancy' ?
                    <div className="cool">
                        <label htmlFor="fname" className="activing">{props.label}</label>
                        <input id="fname" type="text" placeholder={props.placeholder} />
                    </div> :
                    <div className="first-ex">
                        <input type={inputType} className="content" placeholder={props.placeholder} onFocus={handleType} />
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