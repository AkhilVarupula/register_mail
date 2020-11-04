 var faker= require('faker');
var mysql= require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database:"node_project",
  password:'mymacmysql',
  insecureAuth : true
});
var data=[];
for(var i=0; i<500; i++){
data.push([
  faker.internet.email(),
  faker.date.past()
])
}
q='INSERT INTO users (email, created_at) VALUES ?';
connection.query(q, [data],function(error, results) {
    if (error) throw error;
    console.log(results);
  });
  connection.end();