import React, { useState } from 'react'

export default function FriToggle() {
    const [toggle, setToggle] = useState(true)
    return (
        <div className="toggle">
            {toggle ? <button className="toggle-one" onClick={() => setToggle(false)}>
                <i className="ri-toggle-line"></i>
            </button> : <button className="toggle-two" onClick={() => setToggle(true)}>
                <i className="ri-toggle-fill"></i>
            </button>}
        </div>
    )
}
