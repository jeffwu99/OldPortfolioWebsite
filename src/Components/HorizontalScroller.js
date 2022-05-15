import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import images from '../assets/images.js';

function HorizontalScroller() {

  const [widthMax, setWidthMax] = useState(0);
  const container = useRef();

  useEffect(() => {
    setWidthMax(container.current.scrollWidth - container.current.offsetWidth)
  }, [])

  const outerCarousel = {
    marginLeft: '15%',
    marginRight: '15%',
    marginBottom: '40px',
    overflow: 'hidden'
  };

  const innerCarousel = {
    display: 'flex'
  };

  const itemContainer = {
    minHeight: '40vh',
    minWidth: '50vw',
    width: '50%',
    padding: '1vh'
  };

  const item = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    pointerEvents: 'none'
  };

  return(
    <div>
      <h1 style={{ fontSize: '42px', textAlign: 'center', marginTop: '50px', marginBottom: '15px'}}>Sample Screenshots</h1>
      <motion.div ref={container} style={outerCarousel}>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -widthMax }} style={innerCarousel}>
          {images.map(image => {
            return (
              <motion.div style={itemContainer}>
                <img src={image} style={item} alt="" key={image}/>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>

  );
}

export default HorizontalScroller;