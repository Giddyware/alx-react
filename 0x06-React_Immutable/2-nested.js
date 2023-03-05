import { fromJS } from "./node_modules/immutable/dist/immutable";

export default function accessImmutableObject(object, array) {
    const mapped = fromJS(object);

    return mapped.getIn(array, undefined);
}
