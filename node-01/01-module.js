
console.log('hello node --!!!')

// state.js
const {getState} = require('./state')
setInterval(getState, 2000)