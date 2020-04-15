const express = require("express");
const knex = require("knex");
const router = require("express").Router();

const db = require("../data/dbconfig");

// const db = knex({
//   client: "sqlite3",
//   connection: {
//     filename: "./data/produce.db3"
//   },
//   useNullAsDefault: true //only needed for sqlite3
// });

router.get("/", (req, res) => {
  db("veggies")
    .then((veggies) => {
      res.json(veggies);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve veggies" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  db("veggies")
    .where({ id })
    .first()
    .then((veggie) => {
      res.json(veggie);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve vegetable" });
    });
});

router.post("/", (req, res) => {
  const veggieData = req.body;
  db("veggies")
    .insert(veggieData)
    .then((ids) => {
      db("veggies")
        .where({ id: ids[0] })
        .then((newveggieEntry) => {
          res.status(201).json(newveggieEntry);
        });
    })
    .catch((err) => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store veggie data" });
    });
});

module.exports = router;
