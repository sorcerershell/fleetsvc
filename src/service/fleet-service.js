const { Fleet } = require('../model/fleet');

class FleetService {
  listFleets() {
    return Fleet.query();
  }

  async registerFleet(fleetObject) {
    return Fleet.query().insert(fleetObject);
  }
}

module.exports = { FleetService }