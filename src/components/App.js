import React, { Component } from 'react';
import Place from './Place';
import { mvVenues } from '../data/fs-data.js';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  state = {
    venues: []
  };

  componentDidMount() {
    this.setState({ venues: mvVenues });
  }
  render() {
    const { venues } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          {venues.length > 0 ? (
            <ul className="places-list">
              {venues.map((place, id) => (
                <Place key={id} place={place} />
              ))}
            </ul>
          ) : (
            <p>No places returned</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
