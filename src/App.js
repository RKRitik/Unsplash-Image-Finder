
import './App.css';
import { Provider }               from 'react-redux';
import { BrowserRouter as Router, Route, Switch }  from "react-router-dom";

import store from './store'
import Header from './containers/Header.js';
import Content from './containers/Content.js'

import 'bootstrap/dist/css/bootstrap.css';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        
          <Header/>
          <Content/>
        
      </Router>
     
    </Provider>
  )
};

