  import React, { Component } from "react";
  import {Route,Link,HashRouter} from "react-router-dom";
  import Login from "./Login";
  import Register from "./Register"

   
  class Router extends Component {
    render() {
      return (
           <HashRouter>
          <div>

            <ul>
              
              <Link to="/Login">Login</Link><br />
              <br />
              <Link to="/Register">Register</Link><br />
              
            </ul>
            <div>
               
              <Route path="/Login" component={Login}/>
              <Route path="/Register" component={Register}/>
              
            </div>
          </div>
          </HashRouter>
      );
    }
  }
   
  export default Router;