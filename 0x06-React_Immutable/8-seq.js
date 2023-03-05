import { Seq } from "./node_modules/immutable/dist/immutable";

export default function printBestStudents(object) {
	const sq = Seq(object);

	const fltr = sq.filter((student) => {
		student.firstName.charAt(0).toUpperCase();
		return student.score > 70;
	});

	const capFirstChar = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const JSObject = fltr.toJS();

	Object.keys(JSObject).map((key) => {
		JSObject[key].firstName = capFirstChar(JSObject[key].firstName);
		JSObject[key].lastName = capFirstChar(JSObject[key].lastName);
	});

	console.log(JSObject);
}
