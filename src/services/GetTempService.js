const knexfile = require('./../../knexfile.js');
const knex = require('knex')(knexfile.production);

class GetTempService {
  async get() {
    // returns all the ids of inserted rows
    const temps = await knex('temp').orderBy('created_at', 'desc');

    // we inserted just one so return first one
    return temps[0];
  }
}

module.exports = GetTempService;