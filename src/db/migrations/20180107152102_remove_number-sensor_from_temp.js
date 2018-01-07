exports.up = function(knex, Promise) {
    return knex.schema.table('temp', function(t) {
        t.dropColumn('number-sensor');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('temp', function(t) {
        t.enum('number-sensor');
    });
};