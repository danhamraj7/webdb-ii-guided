exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("fruits")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("fruits").insert([
        { name: "mango", avgWeightOz: 4, delicious: true, color: "yellow" },
        { name: "apple", avgWeightOz: 4, delicious: true, color: "red" },
        { name: "banana", avgWeightOz: 2.5, delicious: true, color: "yellow" },
      ]);
    });
};
