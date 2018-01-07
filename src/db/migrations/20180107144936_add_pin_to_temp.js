exports.up = function(knex, Promise) {
    return knex.schema.table('temp', function(t) {
        t.integer('pin');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('temp', function(t) {
        t.dropColumn('pin');
    });
};