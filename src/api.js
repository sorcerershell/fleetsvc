'use strict';

const { transaction } = require('objection');
const {listFleets, registerFleet} = require('./controller/fleet-controller');

module.exports = router => {
  // Create a new Person. Because we use `insertGraph` you can pass relations
  // with the person and they also get inserted and related to the person. If
  // all you want to do is insert a single person, `insertGraph` and `allowInsert`
  // can be replaced by `insert(req.body)`.
  router.get('/fleet', listFleets);
  router.post('/fleet', registerFleet);
  router.patch('/fleet/:fleetId', registerFleet);
  
};

// The error returned by this function is handled in the error handler middleware in app.js.
function createStatusCodeError(statusCode) {
  return Object.assign(new Error(), {
    statusCode
  });
}
