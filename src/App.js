import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import Notes from './pages/Notes'
import Create from './pages/Create'
import APInfo from "./pages/APInfo";
import DevTeam from "./pages/DevTeam";
import Searcher from "./pages/Searcher";
import Home from "./pages/Home";


function App() {
return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/create">
                <Create />
            </Route>
        </Switch>
    </Router>
    );
}

export default App;