const express = require('express');
const app = express();
var hbs = require('express-hbs');
const path = require('path')
var fs = require('fs');

// Página HBS
app.engine('hbs', hbs.express4({partialsDir: __dirname + '/public'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/public');
app.use(express.static(path.join(__dirname,'public')))   // static files
app.set('port',process.env.PORT || 9000);
app.listen(app.get('port'), () => {
    console.log('server on port',app.get('port'))
});
app.get('/',(req,res)=>{
  res.render('index',{
  })
})

// Acceso a base de datos
var mysql = require('mysql');
var fs = require('fs');

var con = mysql.createConnection({
  host: "db4free.net",
  user: "baenav",
  password: "qwertyuiop",
  database: "proyecto_diseno"
});
const quer1 = "SELECT P1, P2, P3, P4, UNIX_TIMESTAMP(CONCAT_WS(' ', fecha, hora)) "+
" AS datetime FROM datos ORDER BY fecha DESC, hora DESC LIMIT 10"
con.connect(function(err) {
  if (err) throw err;
  con.query( quer1 , function (err, result, fields) {
    if (err) throw err;
    console.log(result);

// Crar Json
var cols= [{"label":"Date Time","type":"datetime"},
{"label":"Potencia Red","type":"number"},
{"label":"Potencia Panel Solar","type":"number"},
{"label":"Potencia Baterias","type":"number"},
{"label":"Potencia Carga ","type":"number"}]

var rows = []
for (var i = 0; i < result.length; i++){
  var rowi= {"c":[{"v":"Date(" +result[i].datetime+")"},{"v":result[i].P1},{"v":result[i].P2},{"v":result[i].P3},{"v":result[i].P4}]}
  rows.push(rowi)
}

table={cols:cols,rows:rows}
// console.log(table)

fs.writeFile('./public/table.json', JSON.stringify(table), function (err) {
  if (err) throw err;
  console.log('table.json was saved!');
  });
});
});
