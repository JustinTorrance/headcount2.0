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

  findByName(name) {
    if (!name) {
      return undefined
    } 
    return this.stats[name.toUpperCase()]
  }

  findAllMatches() {

    return this.stats
  }
}
