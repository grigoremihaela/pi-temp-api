const knexfile = require('./../../knexfile.js');
const knex = require('knex')(knexfile.production);

class GetTempService {
  async get() {
    // returns all the ids of inserted rows
    const temps41 = await knex('temp').where({
                         pin: 4,
                         numberSensor: 1
                         }).orderBy('created_at', 'desc');
    const temps42 = await knex('temp').where({
                         pin: 4,
                         numberSensor: 2 
                         }).orderBy('created_at', 'desc');
    const temps43 = await knex('temp').where({
                         pin: 4,
                         numberSensor: 3
                         }).orderBy('created_at', 'desc');
    const temps44 = await knex('temp').where({
                         pin: 4,
                         numberSensor: 4
                         }).orderBy('created_at', 'desc');
    const temps17 = await knex('temp').where({
                         pin: 17
                         }).orderBy('created_at', 'desc');
    const temps22 = await knex('temp').where({
                         pin: 22
                         }).orderBy('created_at', 'desc');
    const temps = [temps41[0], temps42[0], temps43[0], temps44[0], temps17[0], temps22[0]];

    // we inserted just one so return first one
    return temps;
  }
}

module.exports = GetTempService;