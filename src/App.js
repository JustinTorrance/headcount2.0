import React, { Component } from 'react';
import './App.css';
import CardContainer from './CardContainer.js';
import DistrictRepository from './helper.js';
import kinderData from './data/kindergartners_in_full_day_program.js';
import Search from './Search.js';


class App extends Component {
  constructor() {
    super();
    this.state = {
      SchoolStats: new DistrictRepository(kinderData),
      searchedLocation: ''
    }
  }

  searchByLocation = (searchValue) => {
    this.setState({searchedLocation: searchValue})
  }

  compareAverages = () => {
    const districtsBeingCompared = 
      this.state.districtsBeingCompared;      
    let district1;
    let district2;

    if (districtsBeingCompared.length === 2) {
      district1 = districtsBeingCompared[0].location;
      district2 = districtsBeingCompared[1].location;
      let districtAverages = 
        this.state.data.compareDistrictAverages(district1, district2);
      this.setState({ districtAverages });
    }
  }

  render() {
    let { findAllMatches } = this.state.SchoolStats;
    return (
      <main>
        <h1 className='title'>HeadCount</h1>
        <Search searchByLocation={this.searchByLocation} />
        <CardContainer findAllMatches={findAllMatches} searchedLocation={this.state.searchedLocation} />
      </main>
    );
  }
}

export default App;







  // searchByLocation = (location) => {
  //   const districts = new DistrictRepository(kinderData)
  //   if (location === '') {
  //     return districts
  //   } else {
  //     const matchingDistricts = Object.keys(districts.stats).filter(district => {
  //       return district.includes(location.toUpperCase())
  //     })  
  //     this.setState({searchedLocation: [...matchingDistricts]})
  //   }
  // } 