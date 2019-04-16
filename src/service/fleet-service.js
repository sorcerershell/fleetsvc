const { Fleet } = require('../model/fleet');

class FleetService {
  /**
   * @returns Fleet[]
   */
  listFleets() {
    return Fleet.query().where('isDeleted', '=', false);
  }

  /**
   * 
   * @param {Fleet} fleetObject 
   * @returns {Promise} Fleet
   */
  async registerFleet(fleetObject) {
    return Fleet.query().insert(fleetObject);
  }

  /**
   * 
   * @param {number} id 
   * @param {Fleet} fleetObject 
   * @returns {Promise} Fleet
   */
  async updateFleet(id, fleetObject) {
    return Fleet.query().findById(id).patch(fleetObject);
  }

  /**
   * 
   * @param {number} id 
   * @returns {Promise}
   */
  async deleteFleet(id) {
    return Fleet.query().findById(id).patch({
      isDeleted: true
    });
  }
}

module.exports = { FleetService }