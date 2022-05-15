import React, { useState } from 'react';
import profilePic from '../assets/linkedInCropped.png';

function LinkedIn() {

  const [imgOp,setImgOp] = useState(1);
  const [textOp, setTextOp] = useState(0);

  const avatarContainer = {
    padding: '20px',
    paddingTop: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '150px',
    height: '150px'
  };
  
  const picStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '75px',
    border: 'solid',
    borderWidth: '3px',
    borderColor: '#8400e6',

    opacity: imgOp,
    transition: '0.3s ease',
    position: 'relative',
    top: '-75px'
  };

  const refStyle = {
    color: 'white',
    textDecoration: 'none',
    position: 'relative'
  };

  const textStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    opacity: textOp,
    transition: '0.3s ease',
    position: 'relative',
    top: '40px'
  };

  const changeOp = () => {
    setImgOp(0.2);
    setTextOp(1);
  }

  const revertOp = () => {
    setImgOp(1);
    setTextOp(0);
  }

  return (
    <div style={avatarContainer}>
      <a href="https://www.linkedin.com/in/jeffreywu99" style={refStyle}>
        <p style={textStyle}>LinkedIn</p>
        <img src={profilePic} style={picStyle} alt="" onMouseEnter={changeOp} onMouseLeave={revertOp}/>
      </a>

    </div>
  );
}

export default LinkedIn;