import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'

// TODO LEKCJA 09-05 Połączenie frontendu i backendu ze sobą


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
