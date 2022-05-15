import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';



function CardProjects(props) {

  const [topColor, setTopColor] = useState(props.topBorder);

  const cardStyle = {
    marginLeft: '40px',
    borderColor: props.topBorder,
    borderStyle: 'solid',
    borderLeft: 0,
    borderRight: 0,
    borderBottom: 0,
    padding: 0,
    borderTop: 10,
    borderTopColor: topColor,
    width: '17%',
    transition: '0.5s ease'
  };

  const changeColor = () => {
    setTopColor('#C4FEFF');
  }

  const revertColor = () => {
    setTopColor(props.topBorder);
  }


  return (
    <Card sx={cardStyle} onMouseEnter={changeColor} onMouseLeave={revertColor} elevation={5}>
      <CardContent sx={{padding: 0, border: 0, margin: 0}}>
        <p style={{fontSize: '12px', padding: 0, border: 0, margin: 0, marginTop: '5px'}}>{props.category}</p>
        <h2 style={{fontSize: '22px', padding: 0, border: 0, margin: 0, marginTop: '5px'}}>{props.name}</h2>
        <p style={{fontSize: '15px', paddingBottom: '25px', marginLeft: '20px', marginRight: '20px'}}>{props.description}</p>
      </CardContent>
      <CardActions sx={{justifyContent: 'center'}}>
        <Button size="large" href={props.link} sx={{cursor: 'none'}}>Github</Button>
      </CardActions>
    </Card>
  );
}

CardProjects.defaultProps = {
  category: 'insert category here',
  name: 'insert name here',
  link: 'https://github.com/jeffwu99',
  description: 'brief description here',
  topBorder: '#9300FF'
};

export default CardProjects;