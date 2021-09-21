import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* //TODO - UPDATE RENDER() METHOD TO CREATEROOT() METHOD
    THE FOLLOWING WILL BE THE DEPRECATED WAY 
    ---- YOU CAN'T TRY REACT 18 FEATURES IF YOU KEEP THE ReactDom.render() way----

    ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

*/

//** THE NEW WAY: 
const container = document.getElementById('root');
// Create a root.
const root = ReactDOM.createRoot(container);
// Render the top component to the root.
root.render(<App />);



reportWebVitals();
