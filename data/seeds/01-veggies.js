exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("veggies")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("veggies").insert([
        { name: "Kale" },
        { name: "carrots" },
        { name: "Green peppers" },
      ]);
    });
};
