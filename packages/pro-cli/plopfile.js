import {
	nextProjectGenerator,
	reactComponentGenerator,
	reactPageGenerator,
	reactProjectGenerator,
} from "./generators/index.js";

export default function (plop) {
	// react generators
	plop.setGenerator("react-project", reactProjectGenerator); // react 项目
	plop.setGenerator("component", reactComponentGenerator); // 组件
	plop.setGenerator("page", reactPageGenerator); // 页面

	// next generators
	plop.setGenerator("next-project", nextProjectGenerator); // next 项目
}
