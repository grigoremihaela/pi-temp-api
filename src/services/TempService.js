const knexfile = require('./../../knexfile.js');
const knex = require('knex')(knexfile.production);

class TempService {
  async add(degrees) {
    // returns all the ids of inserted rows
    const ids = await knex('temp').insert({ temp: degrees });

    // we inserted just one so return first one
    return ids[0];
  }
}

module.exports = TempService;