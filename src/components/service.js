import React from 'react'

export default function Service(props) {
    return (
        <div className="air ">
            <h3>{props.name}</h3>
            <div className="flight">
                <i className="ri-plane-fill"></i>
            </div>
        </div>
    )
}
