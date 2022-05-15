import React, { useEffect } from 'react';

function CustomCursor() {

  const cursor = React.useRef(null);

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const {clientX, clientY} = event;
      const newX = clientX - cursor.current.clientWidth / 2;
      const newY = clientY - cursor.current.clientHeight / 2;
      cursor.current.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
    });
  }, [])

  const MOUSECOLOR = "#9300FF"
  const MOUSESIZE = "20px"

  const mouseStyle= {

    //BELOW IS PACMAN MOUSE SHAPE
    // width: '0px',
    // height: '0px',
    // borderRight: `${MOUSESIZE} solid transparent`,
    // borderTop: `${MOUSESIZE} solid ${MOUSECOLOR}`,
    // borderLeft: `${MOUSESIZE} solid ${MOUSECOLOR}`,
    // borderBottom: `${MOUSESIZE} solid ${MOUSECOLOR}`,
    // borderTopLeftRadius: `${MOUSESIZE}`,
    // borderTopRightRadius: `${MOUSESIZE}`,
    // borderBottomLeftRadius: `${MOUSESIZE}`,
    // borderBottomRightRadius: `${MOUSESIZE}`,

    //triangle mouse shape
    width: 0,
    height: 0,
    borderTop: `${MOUSESIZE} solid ${MOUSECOLOR}`,
    borderRight: `${MOUSESIZE} solid transparent`,
    zIndex: 1000,
    pointerEvents: 'none',
    overflow: 'hidden',
    position: 'fixed',
    mixBlendMode: 'difference'
  };

  return(
    <div  style={mouseStyle} ref={cursor}/>
  );

}


export default CustomCursor;