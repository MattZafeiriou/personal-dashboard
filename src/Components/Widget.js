import React from 'react';

const Widget = ({component}) => {
    const navStyle = {
        background: 'rgba(255,255,255,.1)',
        padding: '7px 30px',
        borderRadius: '10px',
        boxShadow: '2px 2px 2px 1px rgba(0,0,0,.1)',
        margin: '5px'
    }

    return (
        <div style={navStyle}>
            {component}
        </div>
    );
}

export default Widget;