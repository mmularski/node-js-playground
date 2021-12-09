'use strict';

let counter;

module.exports.handler = async (event) => {
  if(!counter){
    counter = 1;
  } else {
    counter++;
  }

  return {
    counter
  };
};
