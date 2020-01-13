import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import { Router, Link } from '@reach/router'
import Home from '../pages/home'
import About, {ComponentAboutA, ComponentAboutB} from '../pages/about'
import { ComponentA, ComponentB } from '../pages/home'
function App() {
  return (
    <div className="App">
      <Container fluid>
        <Grid container spacing="3">
          <Grid item xs={12}>
            I am global
          </Grid>
          <Grid item xs={12}>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
          </Grid>
          <Router>
            <Home path="/" >
              <ComponentA path="a" />
              <ComponentB path="b" />
            </Home>
            <About path="about/*" />
          </Router>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
