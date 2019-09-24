//sniffers
const dgram = require('dgram'); // importas libreria dgram
const server = dgram.createSocket('udp4'); // creacion del socket se asocia al server
var coordenada; // las variables se crean con const o con var o con let
server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`); // si hay un error se cierra el servidor
  server.close();
});


server.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`); // Luis no  sabe, pero esto funciona por la estructura de Js
    coordenada = msg; // asignacion de mensajes a "coordenada"
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(60000,'172.31.20.164'); // Prints: server listening 192.168.1.23:50000

// Web Server

const express = require('express');
const app = express(); // app va a ser tu servidor http
var hbs = require('express-hbs'); // importa hbs = plantilla para la webpage
const path = require('path') ;// libreria que te conecta las carpetas entre si

app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views'
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'views') );

app.use(express.static(path.join(__dirname,'public')))   // static files

app.set('port',process.env.PORT || 8080);

app.listen(app.get('port'), () => {
    console.log('server on port',app.get('port'))
});

app.get('/',(req,res)=>{
  res.render('ana',{
  })
})

//Escribir sobre la base de datos
//Datos

app.get('/pagina1',(req,res)=>{
  res.render('ana2',{
    nombre:"coordenadas"
  })
}) // res : respondes con un render de Ana 2
app.get('/refresh',(req,res)=>{
  res.json(`${coordenada}`);
})
//mapa
app.get('/mapa',(req,res)=>{
  res.render('mapa.hbs', {
    nombre:coordenada
  });
})
