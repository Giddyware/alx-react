/* function should return the value of the object at the defined path */
import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  // make the object immutable
  const ImmutableObject = fromJS(object);
  // checks and returns any keys in the list can be found in ImmutableOject
  return ImmutableObject.getIn(array, undefined);
}
