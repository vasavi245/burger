const orm = require("../config/orm.js");
var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res){
            callback(res);
        });
    },
    insertOne: function(val, callback){
        orm.insertOne("burgers", "burger_name", val, function(res){
         callback(res);
        });
    },
    updateOne: function(colnewVal, condition, callback){
        orm.updateOne("burgers", colnewVal, condition, function(res){
            callback(res);
        });
    },
    deleteOne: function(condition, callback) {
        orm.deleteOne("burgers", condition, function(res) {
          callback(res);
        });
      }
    
};
module.exports = burger;