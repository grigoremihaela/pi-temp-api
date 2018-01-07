exports.up = function(knex, Promise) {
    return knex.schema.table('temp', function(t) {
        t.integer('numberSensor');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('temp', function(t) {
        t.dropColumn('numberSensor');
    });
};
