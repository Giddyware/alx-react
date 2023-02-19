/*
Create a function named concatElements

It accepts two arguments page1 and page2. Both are arrays
It should return a List containing the values of the two pages
Create a function named mergeElements

It accepts two arguments page1 and page2. Both are objects
It should return a List containing the values of the two pages
If two values are the same, page2 values should be used.
Requirements:

Use list and map from the Immutable.js library
*/
import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  const list1 = List(page1);
  const list2 = List(page2);
  return list1.concat(list2);
}

export function mergeElements(page1, page2) {
  const object1 = Map(page1);
  const object2 = Map(page2);
  return object1.merge(object2);
}
