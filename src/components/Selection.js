import React, { useState } from 'react'

const Selection = ({ applyColor }) => {
    const [bgStyle, setBgStyle] = useState({ background: "" });

    return (
        <div
            className='fix-box'
            style={bgStyle}
            onClick={() => applyColor(setBgStyle)}
        >
            <h5 className='subheading'>selection</h5>
        </div>
    )
}

export default Selection

