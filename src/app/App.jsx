import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
import { Router, Link } from '@reach/router'
import Home from '../pages/home'
import About, { ComponentAboutA, ComponentAboutB } from '../pages/about'
import { ComponentA, ComponentB } from '../pages/home'
import SignIn from '../pages/signin'
function App() {
  return (
    <div className="App">
      <Container fluid>
        <Grid container spacing="3">
          <Grid item xs={12}>
            I am global
          </Grid>
          <Grid item xs={12}>
            <Link spacing={3} to="/home">Home</Link>
            <Link spacing={3} to="about">About</Link>
            <Link to='/'>Signin</Link>
          </Grid>
          <Router>
            <Home path="home/*" >
              <ComponentA path="a" />
              <ComponentB path="b" />
            </Home>
            <About path="about/*" />
          </Router>
        </Grid>
      </Container>
      <Router>
        <SignIn path="/" />
      </Router>
    </div>
  );
}

export default App;
