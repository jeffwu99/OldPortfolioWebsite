import React from "react";
import Grid from '@mui/material/Grid';
import HoverableChar from "./HoverableChar";

function TechnicalSkills() {

  const layoutContain = {

    marginTop: '-6%',
    width: '700px',
    height: '510px',
    padding: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderTop: '0px',
    borderLeft: '1px',
    borderRight: '1px',
    borderBottom: '1px',
    borderRadius: '20px',
    borderColor: 'rgba(128, 128, 128, 0.3)',
    borderStyle: 'solid',
    backgroundColor: 'white',
    textAlign: 'center',
    overflow: 'hidden',
    boxShadow: '0 4px 6px -5px #808080'
  };

  const innerContain = {
    height: '515px',
    borderLeft: '0.5px',
    borderRight: 0,
    borderTop: 0,
    borderBottom: 0,
    borderColor: 'rgba(128, 128, 128, 0.3)',
    borderStyle: 'solid'
  };

  const itemStyle = {
    fontSize: '19px'
  };
  
  return (
    <div style={layoutContain}>
      <Grid container spacing={0.5}>
        <Grid item xs={6}>
            <h1 style={{fontSize: '30px'}}>Course Work</h1>
            <p style={itemStyle}>Intro to Software Engineering</p>
            <p style={itemStyle}>Intro to Computer Systems</p>
            <p style={itemStyle}>Databases I</p>
            <p style={itemStyle}>Data Structures and Algorithms</p>
            <p style={itemStyle}>Discrete Math II</p>
            <p style={itemStyle}>Computer Programming II</p>
            <p style={itemStyle}>Computation and Programs</p>
            <p style={itemStyle}>Discrete Math I</p>
            <HoverableChar  
              name={"Overall GPA 4.33 / A+"} 
              fontSize={'19px'} 
              initColor={'black'}
              newColor={'#9300FF'}
            />
        </Grid>
        <Grid item xs={6} style={innerContain}>
          <h1>Skills</h1>
          <p style={itemStyle}>Object Oriented Programming  </p>
          <p style={itemStyle}>C++</p>
          <p style={itemStyle}>Python</p>
          <p style={itemStyle}>Javascript</p>
          <p style={itemStyle}>HTML/CSS</p>
          <p style={itemStyle}>MERN Stack</p>
          <p style={itemStyle}>SQL  </p>
          <p style={itemStyle}>React  </p>
        </Grid>
      </Grid>
    </div>
  );
}

export default TechnicalSkills;