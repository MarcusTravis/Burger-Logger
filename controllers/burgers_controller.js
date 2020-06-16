const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");


router.get("/", function (req, res) {
    res.redirect("/burgers");
  });
  
  router.get("/burgers", function (req, res) {
    burger.selectAll(function (data) {
      const burgersData = {
        burgers: data
      };
      console.log(burgersData)
      res.render("index", burgersData);
    });
  });
  
  router.post("/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
      console.log(result);
      res.redirect("/burgers");
    });
  });
  
  router.put("/api/burgers/:id", function (req, res) {
    burger.updateOne(req.params.id, function (result) {
      console.log("result", result);
      res.send(true).status(200);
    });
  });


module.exports = router;