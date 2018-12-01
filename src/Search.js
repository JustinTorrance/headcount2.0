import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      location: ''
    }
  }

  handleChange = (e) => {
    this.setState({location: e.target.value}, 
    () => this.props.searchByLocation(this.state.location)
    )
  }

  render() {
    return(
      <form>
        <p>Search:</p>
        <input 
          type='text' 
          value={this.state.location} 
          name='search' 
          onChange={this.handleChange} 
          placeholder='search by district'/>
      </form>
    )
  }
}

export default Search;