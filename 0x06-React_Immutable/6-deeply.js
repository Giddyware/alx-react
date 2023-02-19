/*
Create a function named mergeDeeplyElements

It should accept two arguments, page1 and page2. Both are objects
It should return a List containing the values of the two pages
If two values are the same, they should combine each other
*/
import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const ImmPage1 = Map(page1);
  const ImmPage2 = Map(page2);
  return ImmPage1.mergeDeep(ImmPage2);
}
