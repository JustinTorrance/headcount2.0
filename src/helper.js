export default class DistrictRepository {
  constructor(stats) {
    this.stats = stats.reduce((acc, currentObj) => {
      if (!acc[currentObj.Location]) {
        acc[currentObj.Location] = {
          [currentObj.TimeFrame]: currentObj.Data
        } 
      } else {
          acc[currentObj.Location][currentObj.TimeFrame] = currentObj.Data
      }
      return acc
    }, {})
    // console.log(this.stats)
  }

  findByName(school) {
    if (!school) {
      return undefined
    }
  }


}
