import React from 'react';
import './style.css'

export default (props) => {
    const { label, onClick } = props

    return (
        <button className="button" onClick={onClick} {...props}>
            {label}
        </button>
    )
}