import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter  as Router, Route } from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import './App.css';
import logo from './logo.jpeg'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
})

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <ApolloProvider client={client}>
              <Router>
                <div className="App">
                <img
                  src={logo}
                  alt="SpaceX"
                  style={{ width: 300, display: 'block', margin: 'auto'}}
                />
                <Route exact path="/" component={Launches} />
                <Route exact path="/launch/:flight_number" component={Launch} />
                </div>
              </Router>
            </ApolloProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
