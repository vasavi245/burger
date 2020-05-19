const express = require("express");
// Import burger module to access database function
const burger = require("../models/burger.js");

const router = express.Router();

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
    burger.insertOne(req.body.name, function(result) {
        res.json({ id: result.insertId });
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

router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    console.log(`Condition: ${condition}`);

    burger.deleteOne(condition, function(result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
      
    })
})

module.exports = router;