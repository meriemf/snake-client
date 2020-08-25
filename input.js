let connection;
const setupInput = function(conn) {
  const stdin = process.stdin;
  connection = conn;
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
   if (key === 'w') {
   connection.write('Move: up');
  }
  if (key === 'a') {
    connection.write('Move: left');
   }
   if (key === 'd') {
    connection.write('Move: right');
   }
   if (key === 's') {
    connection.write('Move: down');
   }
 });
 };
 let object = {
  setupInput,
  // /handleUserInput,
};
module.exports = object;