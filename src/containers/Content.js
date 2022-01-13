import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";

import Home from '../components/home'
import Profile from '../components/profile';

const Content = () => {
    return (
    <Switch>
        <Route exact path='/home' component={Home}/>
                
        
        <Route exact path='/profile' component={Profile}/>
                

    </Switch>)
  };
  export default Content;