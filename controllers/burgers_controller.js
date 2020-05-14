const express = require("express");
// Import burger module to access database function
const burger = require("../models/burger.js");

var router = express.Router();

// create all routers and set up logic

router.get("/", function(req, res) {
  burger.selectAll(function(data){
      let burgerObj = {
          burger: data
      };
      console.log(burgerObj);
      res.render("index", burgerObj);
  })
});

router.post("/api/burgers", function(req,res){
    burger.insertOne(req.body.name, function(result){
        res.json({id: result.insertId})
    });
});

router.put("/api/burgers/:id", function(req,res){
    var condition = `id=${req.params.id}`;
    console.log(`Condition: ${condition}`);

    burger.updateOne("devoured=true", condition, function(result){
        if(result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
});

module.exports = router;