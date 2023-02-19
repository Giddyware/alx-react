/* modify the function getImmutableObject using Map from Immutable.js */

import { Map } from 'immutable';

export default function getImmutableObject(object) {
  return Map(object);
}
