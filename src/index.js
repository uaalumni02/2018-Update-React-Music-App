// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Search from './Search/Search';
// import Home from './Home/Home';
// import Play from './Play/Play';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(
//     <Router>
//         <div>
//              <Route path="/Home" component={Home} /> 
//             <Route path="/search" component={App} />
//             <Route path="/Play" component={Play} />

//         </div>

//      </Router>,
//      document.getElementById('root')
//     )       

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();