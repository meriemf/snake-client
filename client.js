const net = require('net');
const {IP, PORT} = require('./constants');
const connect = function() {
  const conn = net.createConnection({ 
    //host: '127.0.0.1',
    //port: 50541
    host: IP,
    port: PORT,

  });
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    console.log('Successfully connected to game server.');
    conn.write('Name: ABC'); 
    conn.write('Move: up');
     });
  conn.on('data', (message)=>{console.log(`server send : ${message}`)})
  return conn;
};
let object = {
  connect,
};
module.exports = object;