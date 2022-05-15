import React, { useState } from 'react';

function HoverableChar(props) {

  const [color, setColor] = useState("black");

  const mouseExit = {
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    color: color,
    transition: '0.1s ease'
  };

  const mouseEnter = {
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    color: color,
    transition: '7s ease'
  };

  const changeText = (g) => {
    setColor(props.newColor);
    // setColor('#f76d61')
  }

  const revertText = () => {
    setColor(props.initColor);
  }

  if (color === "black") {
    return (
      <span style={mouseEnter} onMouseEnter={changeText} on onMouseLeave={revertText}>{props.name}</span>
    );
  }
  else {
    return (
      <span style={mouseExit} onMouseEnter={changeText} on onMouseLeave={revertText}>{props.name}</span>
    );
  }
}

HoverableChar.defaultProps = {
  fontSize: '80px',
  fontWeight: 'bold',
  newColor: '#C4FEFF',
  initColor: 'black'
};

export default HoverableChar;