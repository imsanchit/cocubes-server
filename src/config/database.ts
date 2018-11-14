import mysql from "mysql";

var dbConnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'cocubes'
  });

  dbConnection.connect(function(err: Error){
    if(!err) {
        console.log("Database is connected ... ");    
    } else {
        console.log(`Error connecting database ... ${err}`);    
    }
});
export default dbConnection;
// module.exports = connection;