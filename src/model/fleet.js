'use strict';

const { Model } = require('objection');

class Fleet extends Model {
  static getTableName() {
    return 'fleets'
  }

  static getJsonSchema() {
    return {
      type: 'object',
      required: ['fleetName', 'fleetType', 'capacity', 'licenseNumber', 'registeredAt'],
      properties: {
        id: {type: 'integer'},
        fleetName: { type: 'string', minLength: 1, maxLength: 255},
        fleetType: { type: 'string', minLength: 1, maxLength: 255},
        capacity: { type: 'integer' },
        licenseNumber: { type: 'string', minLength: 1, maxLength: 255},
        registeredAt: { type: 'datetime' },
        isDeleted: { type: 'boolean' }
      }
    }
  }
}

exports.Fleet = Fleet;