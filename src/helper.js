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


  findAverage = (district) => {
    district = district.toUpperCase();
    // console.log(Object.values(this.stats)[])
    const values = Object.values(this.stats[district].stats);
    const finalAvg = values.reduce((sum, data) => {
      sum += data;
      return sum;
    }, 0) / values.length;
    return Math.round(finalAvg * 1000) / 1000;
  }

  compareDistrictAverages = (district1, district2) => {
    const district1Avg = this.findAverage(district1);
    const district2Avg = this.findAverage(district2);
    const comparedAvg = 
      Math.round(district1Avg / district2Avg * 1000) / 1000;

    return { [district1.toUpperCase()]: 
      district1Avg, [district2.toUpperCase()]: 
      district2Avg, compared: comparedAvg };
  }

}

