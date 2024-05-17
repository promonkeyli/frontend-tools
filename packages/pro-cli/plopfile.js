import {
	reactComponentGenerator,
	reactPageGenerator,
} from "./generators/index.js";

export default function (plop) {
	// react generators
	plop.setGenerator("component", reactComponentGenerator);
	plop.setGenerator("page", reactPageGenerator);
}
