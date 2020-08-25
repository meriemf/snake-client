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
  setupInput,
  // /handleUserInput,
};
module.exports = object;