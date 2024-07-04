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

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: ''
    }
    this.apiKey = '101aa8f223c7bd2a3b7caf34cc1de3e2'
  }

  handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm')
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results] })
    }) 
  }
  
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  
  }
  
  render() {
  return (
    <div className='App'>
      <Nav />
      <SearchArea 
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}/>
    </div>
    );
  }   
}

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
