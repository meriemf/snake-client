const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '127.0.0.1',
    port: 50541
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
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
 return stdin;
}
const handleUserInput = function() {
  process.stdin.on('data', (key) => {
   if (key === '\u0003') {
     process.exit();
   }
 });
 };
let object = {
  connect,
  setupInput,
  handleUserInput,
};
module.exports = object;