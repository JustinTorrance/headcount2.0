import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer.js';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      SchoolStats: new DistrictRepository(kinderData)
    }
  }

  render() {
    let { findAllMatches } = this.state.SchoolStats;
    return (
      <main>
        <h1 className='title'>HeadCount</h1>
        <CardContainer findAllMatches={findAllMatches} />
      </main>
    );
  }
}

export default App;
