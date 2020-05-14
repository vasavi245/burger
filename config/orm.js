var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, callback ) {
        var queryString = `SELECT * FROM burgers ${table}`;
        console.log(queryString);
        connection.query(queryString, function(err,res){
            if(err) throw err;
            callback(res);
        })
    },
    insertOne: function(table, col, val, callback){
        var queryString = `INSERT INTO ${table}, ${col} VALUES ${val}`;
        console.log(queryString);
        connection.query(queryString, function(err,res){
            if(err) throw err;
            callback(res);
        })
    },
    updateOne: function(table, colnewVal, condition, callback ){
        var queryString = `UPDATE ${table} SET ${colnewVal} WHERE ${condition} `;
        console.log(queryString);
        connection.query(queryString, function(err,res){
            if(err) throw err;
            callback(res);
        })
    }


};

module.exports = orm;