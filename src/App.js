import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import * as React from 'react';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/apinfo">
          <APInfo />
        </Route>
        <Route path="/home"> 
          <Home />
        </Route>
        <Route path="/datafilter"> 
          <DataFilter />
        </Route>
        <Route path="/devteam"> 
          <DevTeam />
        </Route>
        <Route path="/ElementList"> 
          <ElementList />
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
