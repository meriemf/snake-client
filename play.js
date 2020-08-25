const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '127.0.0.1',
    port: 50541
  });
  conn.setEncoding('utf8'); 
  conn.on('data', (message)=>{console.log(`server send : ${message}`)})
  return conn;
};

connect();
