/*
getListObject accepts an array as parameter and converts it into an
immutable List using the Immutable.js library
*/
const { List } = require('immutable');

export function getListObject(array) {
  return List(array);
}

/* accepts two arguments: first one is a List and second one is a string
append the string to the list and return the list */
export function addElementToList(list, element) {
  return list.push(element);
}

// TEST VALUES
// d = [1,2,3,4]
// let immList = getListObject(d)
// console.log(immList)
// console.log(addElementToList(immList, 10))
