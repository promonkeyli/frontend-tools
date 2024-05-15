export default function (plop) {
	// controller generator
	plop.setGenerator("component", {
		description: "react component generate",
		prompts: [
			{
				type: "input",
				name: "name",
				message: "react component name",
			},
		],
		actions: [
			{
				type: "add",
				path: "src/{{name}}.js",
				templateFile: "templates/react-component-tpl/index.hbs",
			},
		],
	});
}
