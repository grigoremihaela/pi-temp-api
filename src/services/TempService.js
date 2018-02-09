const knexfile = require('./../../knexfile.js');
const knex = require('knex')(knexfile.production);
//const knex = require('knex')(knexfile.development);

class TempService {
  async add(degrees, uids, pin, no) {
    // returns all the ids of inserted rows
    const ids = await knex('temp').insert({ temp: degrees, sensorsUids: uids, pin: pin, numberSensor: no });

    // we inserted just one so return first one
    return ids[0];
  }
}

module.exports = TempService;
