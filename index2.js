//const port = 9000;


//app.get('/', (request, response) => {
  //  console.log(`URL: ${request.url}`);
    //response.send('Hello, Server!');
//});
// Inicia el server
//const server = app.listen(port, (error) => {
    //if (error) return console.log(`Error: ${error}`);

    //console.log(`Server listening on port ${server.address().port}`);
//});
const express = require('express');
const app = express();
var hbs = require('express-hbs');
const path = require('path')

app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/public'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/public');

app.use(express.static(path.join(__dirname,'public')))   // static files

app.set('port',process.env.PORT || 9000);

app.listen(app.get('port'), () => {
    console.log('server on port',app.get('port'))
});

app.get('/',(req,res)=>{
  res.render('index2',{
  })
})

// Acceso a base de datos

var mysql = require('mysql');
var fs = require('fs');


app.get('/Generar',function(req,res){
  var con = mysql.createConnection({
    host: "db4free.net",
    user: "baenav",
    password: "qwertyuiop",
    database: "proyecto_diseno"

    /*host: "diseno1.cl8ozxx0esmz.us-east-1.rds.amazonaws.com",
    user: "anamacn",
    password: "qwertyuiop",
    database: "diseno_1"
    */
  });
  console.log('Generando')

  //const querReal = "SELECT P1, P2, P3, P4, CONCAT_WS(' ', fecha, hora) AS datetime FROM datos ORDER BY fecha DESC, hora DESC LIMIT 100"

  //const querReal =  "SELECT P1, P2, P3, P4, CONCAT_WS(' ', fecha, hora) AS datetime FROM datos "+
  //"WHERE CONCAT_WS(' ', fecha, hora) BETWEEN '2019-09-24 00:00:00' AND '2019-09-25 23:00:00' ORDER BY fecha DESC, hora DESC "

  const querReal =  "SELECT P1, P2, P3, P4, CONCAT_WS(' ', fecha, hora) AS datetime FROM datos "+
  "WHERE CONCAT_WS(' ', fecha, hora) > date_sub(NOW(), INTERVAL 7 HOUR)"
/*
  const querDay = "SELECT P1, P2, P3, P4, CONCAT_WS(' ', fecha, hora) AS datetime FROM datos "+
  "WHERE CONCAT_WS(' ', fecha, hora) > date_sub(NOW(), INTERVAL 1 DAY)"
  const querWeek = "SELECT P1, P2, P3, P4, CONCAT_WS(' ', fecha, hora) AS datetime FROM datos "+
  "WHERE CONCAT_WS(' ', fecha, hora) > date_sub(NOW(), INTERVAL 1 WEEK)"
  const querMonth = "SELECT P1, P2, P3, P4, CONCAT_WS(' ', fecha, hora) AS datetime FROM datos "+
  "WHERE CONCAT_WS(' ', fecha, hora) > date_sub(NOW(), INTERVAL 1 MONTH)"

  */


  con.connect(function(err) {
    if (err) throw err;
    });

  con.query( querReal , function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
    //console.log(JSON.stringify(result))
    res.send(JSON.stringify(result));
    /*
    fs.writeFile('./public/table.json', JSON.stringify(result), function (err) {
      if (err) throw err;
      console.log('table.json was saved!');
      });
      */
    });
  con.end();
})

app.get('/GenerarDay',function(req,res){
  var con = mysql.createConnection({
    host: "db4free.net",
    user: "baenav",
    password: "qwertyuiop",
    database: "proyecto_diseno"

    /*host: "diseno1.cl8ozxx0esmz.us-east-1.rds.amazonaws.com",
    user: "anamacn",
    password: "qwertyuiop",
    database: "diseno_1"
    */
  });
  console.log('Generando Dia')
  const querDay = "SELECT P1, P2, P3, P4, CONCAT_WS(' ', fecha, hora) AS datetime FROM datos "+
  "WHERE CONCAT_WS(' ', fecha, hora) > date_sub(NOW(), INTERVAL 1 DAY)"
  con.connect(function(err) {
    if (err) throw err;
    });
  con.query( querDay , function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
    //console.log(JSON.stringify(result))
    res.send(JSON.stringify(result));
    /*
    fs.writeFile('./public/table.json', JSON.stringify(result), function (err) {
      if (err) throw err;
      console.log('table.json was saved!');
      });
      */
    });
  con.end();
})

app.get('/GenerarWeek',function(req,res){
  var con = mysql.createConnection({
    host: "db4free.net",
    user: "baenav",
    password: "qwertyuiop",
    database: "proyecto_diseno"

    /*host: "diseno1.cl8ozxx0esmz.us-east-1.rds.amazonaws.com",
    user: "anamacn",
    password: "qwertyuiop",
    database: "diseno_1"
    */
  });
  console.log('Generando Semana')
  const querDay = "SELECT P1, P2, P3, P4, CONCAT_WS(' ', fecha, hora) AS datetime FROM datos "+
  "WHERE CONCAT_WS(' ', fecha, hora) > date_sub(NOW(), INTERVAL 1 WEEK)"
  con.connect(function(err) {
    if (err) throw err;
    });
  con.query( querDay , function (err, result, fields) {
    if (err) throw err;
    //console.log(result);
    //console.log(JSON.stringify(result))
    res.send(JSON.stringify(result));
    /*
    fs.writeFile('./public/table.json', JSON.stringify(result), function (err) {
      if (err) throw err;
      console.log('table.json was saved!');
      });
      */
    });
  con.end();
})
