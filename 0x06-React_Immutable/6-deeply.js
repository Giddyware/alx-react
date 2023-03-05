import { Map } from "./node_modules/immutable/dist/immutable";

export default function mergeDeeplyElements(page1, page2) {
	const mp1 = Map(page1);
	const mp2 = Map(page2);

	return mp1.mergeDeep(mp2);
}
