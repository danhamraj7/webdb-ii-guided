exports.up = function (knex) {
  return knex.schema.createTable("veggies", (tbl) => {
    tbl.increments();
    tbl.string("veggie_name", 255).unique().notNullable().index();
    tbl.bolean("tasty").defaultTo(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("veggies");
};
