const {connect} = require('./client');
const {setupInput} = require('./input');

/**
 * Establishes connection with the game server
 */
console.log('connecting...');
let obj = connect();

setupInput(obj);
