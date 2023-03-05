import { List } from "./node_modules/immutable/dist/immutable";
import { Map } from "./node_modules/immutable/dist/immutable";

export default function concatElements(page1, page2) {
	const ls1 = List(page1);
	const ls2 = List(page2);

	return ls1.concat(ls2);
}

export default function mergeElements(page1, page2) {
	const mp1 = Map(page1);
	const mp2 = Map(page2);

	return mp1.merge(mp2);
}
