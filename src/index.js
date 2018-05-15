import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';


let callback = (arr) =>{
	console.log('from callback: ', arr);
}

let delayedCallback = (e)=> {
	console.log('from delayedCallback: ', e);
}

let delay = 1000;

ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={callback}/>
    <br/>
    <DelayedButton onDelayedClick={delayedCallback}
     delay={delay}/>
  </div>,
  document.getElementById('global')
);
