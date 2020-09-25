import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import {LoginPage} from "./pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path={"/"} component={LoginPage}/>
            <Redirect to={'/'}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
