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
          `<p>-webkit-border-top-left-radius:${valueTopLeft}</p> </br>
           <p>-moz-border-radius-topleft:${valueTopLeft}</p> </br>
           <p>border-top-left-radius:${valueTopLeft}</p>` 
        
        document.getElementById('codeTopLeft').innerHTML = ShowCode;
        

      } if (topLeft <= 0) {
        document.getElementById('codeTopLeft').innerHTML = '';
      } 
      
      if (topRight) {
        const valueTopRight = document.getElementById('main').style.borderTopRightRadius=`${topRight}px`;

        const ShowCode = 
          `<p>-webkit-border-top-Right-radius:${valueTopRight} </p> </br>
          <p>-moz-border-radius-topright:${valueTopRight}</p> </br>
          <p>border-top-Right-radius:${valueTopRight}</p>` 
        
        document.getElementById('codeTopRight').innerHTML = ShowCode;

      } if (topRight <= 0) {
        document.getElementById('codeTopRight').innerHTML = '';
      } 
      
      if (bottomLeft) {
        const valueBottomLeft = document.getElementById('main').style.borderBottomLeftRadius=`${bottomLeft}px`;

        const ShowCode = 
          `<p>-webkit-border-bottom-Left-radius:${valueBottomLeft}</p> </br>
          <p>-moz-border-radius-bottomleft:${valueBottomLeft}</p> </br>
          <p>border-bottom-Left-radius:${valueBottomLeft}</p>` 
        
        document.getElementById('codeBottomLeft').innerHTML = ShowCode;

      } if (bottomLeft <= 0) {
        document.getElementById('codeBottomLeft').innerHTML = '';
      } 
      
      if (bottomRight) {
        const valueBottomRight = document.getElementById('main').style.borderBottomRightRadius=`${bottomRight}px`;

        const ShowCode = 
          `<p>-webkit-border-bottom-Right-radius:${valueBottomRight}</p> </br>
          <p>-moz-border-radius-bottomright:${valueBottomRight}</p> </br>
           <p>border-bottom-Right-radius:${valueBottomRight}</p>` 
        
        document.getElementById('codeBottomRight').innerHTML = ShowCode;

      } if (bottomRight <= 0) {
        document.getElementById('codeBottomRight').innerHTML = '';
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