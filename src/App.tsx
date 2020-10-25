import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import {LoginPage} from "./pages/LoginPage";
import {LobbyPage} from "./pages/LobbyPage";

const App: React.FC = () => {
  return (
    <div className="container">

      <Router>
        <Switch>
            <Route path={"/"} component={LoginPage} exact/>
            <Route path={"/lobby/:id"} component={LobbyPage}/>
            {/*<Redirect to={'/'}/>*/}
        </Switch>
      </Router>
        <label id="logo">Late!</label>
    </div>
  );
}

export default App;
