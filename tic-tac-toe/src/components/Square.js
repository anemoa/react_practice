import React from 'react'

const btnStyle = {
    background: "lightblue",
    border: "2px solid darkblue",
    fontSize: "30px",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none",
};

const Square = ({value, onClick}) => {
	return (
		<button style={btnStyle} onClick={onClick}>
			{value}
		</button>
	)
}

export default Square