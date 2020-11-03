 var faker= require('faker');
var mysql= require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database:"node_project",
  password:'mymacmysql',
  insecureAuth : true
});
q='SELECT CURDATE() AS date';
connection.query(q, function(error, results, fields) {
    if (error) throw error;
    console.log(results[0].date);
  });
  connection.end();
