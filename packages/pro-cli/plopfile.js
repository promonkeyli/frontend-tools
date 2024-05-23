import {
	reactComponentGenerator,
	reactPageGenerator,
	reactProjectGenerator,
} from "./generators/index.js";

export default function (plop) {
	// react generators
	plop.setGenerator("project", reactProjectGenerator); // 项目
	plop.setGenerator("component", reactComponentGenerator); // 组件
	plop.setGenerator("page", reactPageGenerator); // 页面
}
