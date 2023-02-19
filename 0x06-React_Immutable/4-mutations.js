/*
Create an Immutable Map with given object and modify values:
Modify the value for the index 2, to Benjamin
Modify the value for the index 4, to Oliver
*/

import { Map } from 'immutable';

const object = {
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
};

export const map = Map(object);
export const map2 = map.withMutations((map) => {
  map.set(2, 'Benjamin').set(4, 'Oliver');
});
// console.log(map2.toJS())
