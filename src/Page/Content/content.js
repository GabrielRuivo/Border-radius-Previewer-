import React, {useState, useEffect} from 'react';
import './content.css';

function Content(){

  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);


  useEffect( () => {
      if(topLeft) {

        const valueTopLeft = document.getElementById('main').style.borderTopLeftRadius=`${topLeft}px`;  

        const ShowCode = 
          `-webkit-border-top-left-radius:${valueTopLeft} </br>
           -moz-border-radius-topleft:${valueTopLeft} </br>
           border-top-left-radius:${valueTopLeft}` 
        
        document.getElementById('codeTopLeft').innerHTML = ShowCode;
        

      } if (topRight) {
        const valueTopRight = document.getElementById('main').style.borderTopRightRadius=`${topRight}px`;

        const ShowCode = 
          `-webkit-border-top-Right-radius:${valueTopRight} </br>
           -moz-border-radius-topright:${valueTopRight} </br>
           border-top-Right-radius:${valueTopRight}` 
        
        document.getElementById('codeTopRight').innerHTML = ShowCode;

      } if (bottomLeft) {
        const valueBottomLeft = document.getElementById('main').style.borderBottomLeftRadius=`${bottomLeft}px`;

        const ShowCode = 
          `-webkit-border-bottom-Left-radius:${valueBottomLeft} </br>
           -moz-border-radius-bottomleft:${valueBottomLeft} </br>
           border-bottom-Left-radius:${valueBottomLeft}` 
        
        document.getElementById('codeBottomLeft').innerHTML = ShowCode;

      } if (bottomRight) {
        const valueBottomRight = document.getElementById('main').style.borderBottomRightRadius=`${bottomRight}px`;

        const ShowCode = 
          `-webkit-border-bottom-Right-radius:${valueBottomRight} </br>
           -moz-border-radius-bottomright:${valueBottomRight} </br>
           border-bottom-Right-radius:${valueBottomRight}` 
        
        document.getElementById('codeBottomRight').innerHTML = ShowCode;

      }
  }, [topLeft, topRight, bottomLeft, bottomRight] )


  return(
    <div id="container">

      <p className="title" > Custom your Border-Radius !</p>

      <div id="box">
        <main id="main">
          <div id="codeTopLeft"></div>
          <div id="codeTopRight"></div>
          <div id="codeBottomLeft"></div>
          <div id="codeBottomRight"></div>
        </main>

        <input 
          className=" input input-top-left" 
          type="number"
          value={topLeft}
          onChange={e => setTopLeft(e.target.value)}
          min= "0"
          max="900"
        />

        <input 
          className=" input input-top-right" 
          type="number" 
          value={topRight}
          onChange={e => setTopRight(e.target.value)}
        />
        
        <input 
          className=" input input-bottom-left" 
          type="number" 
          value={bottomLeft}
          onChange={e => setBottomLeft(e.target.value)}
        />

        <input 
          className=" input input-bottom-right" 
          type="number" 
          value={bottomRight}
          onChange={e => setBottomRight(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Content;