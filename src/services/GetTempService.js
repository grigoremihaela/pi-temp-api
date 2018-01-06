const knexfile = require('./../../knexfile.js');
const knex = require('knex')(knexfile.production);

class GetTempService {
  async get() {
    // returns all the ids of inserted rows
    const temps1 = await knex('temp').where({
    	                   sensorsUids: '1'
                         }).orderBy('created_at', 'desc');
    const temps2 = await knex('temp').where({
    	                   sensorsUids: '2'
                         }).orderBy('created_at', 'desc');

    // we inserted just one so return first one
    return [temps1[0], temps2[0]];
  }
}

module.exports = GetTempService;