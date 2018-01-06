exports.up = function(knex, Promise) {
    return knex.schema.table('temp', function(t) {
        t.string('sensorsUids');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('temp', function(t) {
        t.dropColumn('sensorsUids');
    });
};