import HoverableText from './Components/HoverableText.js';
import TechnicalSkills from './Components/TechnicalSkills';
import CardContainer from './Components/CardContainer';
import './App.css';
import CustomCursor from './Components/CustomCursor';
import HorizontalScroller from './Components/HorizontalScroller';
import LinkedIn from './Components/LinkedIn';

function App() {

  const root = {
    overflow: 'visible'
  };

  const introduction = {
    textAlign: 'center',
    height: '550px',
    backgroundColor: '#9300FF'
  };

  return (
    <div style={root}>
      <CustomCursor/>
      <div style={introduction}>
        <LinkedIn/>
        <HoverableText/>
          <h2 style={{marginLeft: '25%', marginRight: '25%'}}>
            I'm an aspiring software developer looking for internship opportunities
          </h2>
      </div>
      <TechnicalSkills/>
      <CardContainer/>
      <HorizontalScroller/>
    </div>
  );
}



// fonts
// https://www.behance.net/gallery/100907019/Kalmansk-Free-Font
// https://www.behance.net/gallery/32918197/Modernist-Typeface
// https://jeremydownes.co.uk/shop/resin-free-font
export default App;
