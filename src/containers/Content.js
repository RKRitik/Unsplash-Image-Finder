import React from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Redirect
  
} from "react-router-dom";

import Home from '../components/home/home'
import Profile from '../components/profile/profile';

const Main = () => {
    return (
    <Switch >
            <Route exact path="/">
          <Redirect to="/home" />
      </Route>
        <Route exact path='/home' component={Home}/>
                
        
        <Route exact path='/profile' component={Profile}/>
                

    </Switch>)
  };
  export default Main;