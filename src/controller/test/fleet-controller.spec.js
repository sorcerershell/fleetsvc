const request = require('supertest/')
const Knex = require('knex');
const moment = require('moment');

const knexConfig = require('../../../knexfile');
const app = require('../../app');
const knex = Knex(knexConfig.test);

jest.setTimeout(30000);
describe('Fleet Service', () => {
  beforeAll(async () => {
    await knex.migrate.rollback();
    await knex.migrate.latest();
    await knex.seed.run();
    console.log('before all');
  });
  it('should list all registered fleets', async (done) => {
    const res = await request(app).get('/fleet')
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.length).toBeGreaterThan(10);
    done();
  });

  it('should create new fleet', async (done) => {
    const res = await request(app).post('/fleet')
    .send({
      fleetName: 'Test Fleet 1',
      fleetType: 'Mini Bus',
      capacity: 7,
      licenseNumber: 'B1234CD',
      registeredAt: moment().subtract(7, 'days')
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.fleetName).toEqual('Test Fleet 1');
    done();
  })

  it('should update existing Fleet', async (done) => {
    const res = await request(app).patch('/fleet/1')
    .send({
      fleetName: 'Test Fleet Update',
      fleetType: 'Mini Bus',
      capacity: 7,
      licenseNumber: 'B1234CD',
      registeredAt: moment().subtract(7, 'days')
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.fleetName).toEqual('Test Fleet Update');
    done();
  })
})