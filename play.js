const {connect,setupInput} = require('./client');
/**
 * Establishes connection with the game server
 */
console.log('connecting...');
connect();

setupInput();
