let uniqueRandomArray = require('unique-random-array');
let starName = [
  'name' , 'miyatang'
];
let getRandomItem = uniqueRandomArray(starName);

module.exports = {
  all: starName,
  random:random
};

function random(number) {
  if(number === undefined){
    return getRandomItem();
  }else{
    var randomItems = [];
    for(var i = 0; i<number; i++){
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}