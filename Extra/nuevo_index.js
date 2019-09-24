
//sniffer
const dgram = require('dgram'); // importas libreria dgram
const server = dgram.createSocket('udp4'); // creacion del socket se asocia al server 
var datos; // las variables se crean con const o con var o con let 
server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`); // si hay un error se cierra el servidor 
  server.close();
});


server.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`); // Luis no  sabe, pero esto funciona por la estructura de Js
    datos = msg; // asignacion de mensajes a "coordenada"
});

server.on('listening', () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(9000,'172.31.93.255'); // Prints: server listening 192.168.1.23:50000
