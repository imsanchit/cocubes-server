var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'cocubes'
  });

connection.connect(function(err: Error){
    if(!err) {
        console.log("Database is connected ... ");    
    } else {
        console.log(`Error connecting database ... ${err}`);    
    }
});

module.exports = connection;