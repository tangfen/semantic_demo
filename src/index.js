let uniqueRandomArray = require('unique-random-array');
let starName = [
  'name' , 'miyatang'
];
module.exports = {
  all: starName,
  random:uniqueRandomArray(starName)
}