import React from "react";
import Grid from '@mui/material/Grid';
import CardProjects from "./CardProjects";


function CardContainer() {

  const layoutContainer = {
    marginBottom: '30px',
    textAlign: 'center',
    justifyContent: 'center'
  };

  const truePriceDesc = 
  "Scrapes data on active and sold real estate listings on REW. Estimates whether queried listing is under or over valued. Made using NodeJs.";

  const sentDesc =
  "Determines the sentiment of sentences using the BERT natural language processing model. Made with Transformers.";

  const timerDesc = 
  "Front end application that visualizes time elapsing and acts as a timer. Keeps track of different items and their durations. Made with React.";

  const webBoardDesc = 
  "Full stack web app with NoSQL database and user authentication. Virtual idea board within SFU OSD. Uses MongoDB, Express, React, and NodeJS. <In Development>";

  const threeJSDesc = 
  "Development server for experimenting and familiarizing with 3D modelling, display interactions, and the ThreeJS Library.";

  const schoolDesc = 
  "Programming assignments and exercises for various classes. Includes Objected Oriented Programming, C++, Data Structures and Algorithms.";

  const truePriceGit = "https://github.com/jeffwu99/trueprice";
  const sentGit = "https://github.com/SFU-Open-Source-Development/Sentimental-Analysis/tree/Jeffs_twitter_branch";
  const timerGit = "https://github.com/jeffwu99/Task-Timer";
  const webBoardGit = "https://github.com/jeffwu99/Web-Board";
  const threeJSGit = "https://github.com/jeffwu99/ThreeJSSandboxServer";
  const schoolGit = "https://github.com/jeffwu99/school";

  return(
    <div>
      <h1 style={{ fontSize: '42px', textAlign: 'center', marginTop: '50px', marginBottom: '35px'}}>Past Projects</h1>
      <Grid container sx={layoutContainer}>
          <CardProjects category='Webscraper' name='TruePrice' description={truePriceDesc} link={truePriceGit}/>
          <CardProjects category='Machine Learning' name='Sentiment Analysis' description={sentDesc} link={sentGit}/>
          <CardProjects category='React App' name='TaskTimer' description={timerDesc} link={timerGit}/>
      </Grid>
      <Grid container sx={layoutContainer}>
          <CardProjects category='MERN Stack' name='SFU OSD Web Board' description={webBoardDesc} link={webBoardGit}/>
          <CardProjects category='3D Graphics' name= 'ThreeJS Sandbox Server' description={threeJSDesc} link={threeJSGit}/>
          <CardProjects category='Programming' name= 'Miscellaneous' description={schoolDesc} link={schoolGit}/>
      </Grid>
    </div>
  );
}

export default CardContainer;