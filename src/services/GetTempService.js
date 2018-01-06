const knexfile = require('./../../knexfile.js');
const knex = require('knex')(knexfile.production);

class GetTempService {
  async get() {
    // returns all the ids of inserted rows
    const temps1 = await knex('temp').where({
    	                   sensorsUids: '28-0316a1a16fff'
                         }).orderBy('created_at', 'desc');
    const temps2 = await knex('temp').where({
    	                   sensorsUids: '28-03177067f9ff'
                         }).orderBy('created_at', 'desc');

    // we inserted just one so return first one
    return [temps1[0], temps2[0]];
  }
}

module.exports = GetTempService;