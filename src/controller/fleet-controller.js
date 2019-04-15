const { Fleet } = require('../model/fleet');
const { FleetService } = require('../service/fleet-service');

const fleetService = new FleetService();

async function listFleets(req, res) {
  const fleets = await fleetService.listFleets();
  res.send({ data: fleets });
}

async function registerFleet(req, res) {
  const result = await fleetService.registerFleet(req.body);
  res.send(result);
}


module.exports = { listFleets, registerFleet };