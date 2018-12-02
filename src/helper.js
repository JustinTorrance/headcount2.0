export default class DistrictRepository {
  constructor(stats) {
    this.stats = stats.reduce((acc, currentObj) => {
      if (!acc[currentObj.Location.toUpperCase()]) {
        acc[currentObj.Location.toUpperCase()] = {
          location: currentObj.Location.toUpperCase()
        } 
        acc[currentObj.Location.toUpperCase()].stats = {...acc[currentObj.Location.toUpperCase()].stats, 
            [currentObj.TimeFrame]: isNaN(currentObj.Data) ? 0
            : Math.round(currentObj.Data * 1000) / 1000}
      } else {
          acc[currentObj.Location.toUpperCase()].stats = {...acc[currentObj.Location.toUpperCase()].stats, 
            [currentObj.TimeFrame]: isNaN(currentObj.Data) ? 0
            : Math.round(currentObj.Data * 1000) / 1000} 
      }
      return acc
    }, {})
  }

  findByName = name => {
    if (!name) {
      return undefined
    } 
    return this.stats[name.toUpperCase()]
  }

  findAllMatches = (searchedLocation) => {
    typeof searchedLocation === 'string' ? searchedLocation = searchedLocation.toUpperCase() : searchedLocation = searchedLocation
    if (!searchedLocation) {
      return Object.values(this.stats)
    } else {
      const matches = Object.keys(this.stats).filter(location => {
        return location.includes(searchedLocation)
      })
      if (matches === []) {
        return matches
      } else {
        return matches.map(location => {
          return this.stats[location]
        })        
      }
    }
  }

  findAverage = () => {
    var average = Object.values(Object.values(this.stats)[1].stats).reduce((sum, value) => {
      var lengthOf = Object.values(Object.values(this.stats)[1].stats).length;
      sum += value
      return sum;
    }, 0)/11;
    return Math.round(average * 1000) / 1000;
  }

  compareDistrictAverages = () => {
    // findAverage()
  }


}

   

