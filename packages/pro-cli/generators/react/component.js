// react component generator
export const reactComponentGenerator = {
	description: "react组件模板代码生成",
	prompts: [
		{
			type: "input",
			name: "name",
			message: "请输入需要生成的react组件名称！",
		},
	],
	actions: (data) => {
		const name = "{{ name }}"; // 控制台输入的name，在模板文件中可以使用。
		const curDir = process.cwd();
		return [
			{
				type: "add",
				path: `${curDir}/${name}/${name}.component.tsx`,
				templateFile: "templates/react/component/tsx.hbs",
			},
			{
				type: "add",
				path: `${curDir}/${name}/${name}.interface.ts`,
				templateFile: "templates/react/component/interface.hbs",
			},
			{
				type: "add",
				path: `${curDir}/${name}/${name}.store.ts`,
				templateFile: "templates/react/component/store.hbs",
			},
			{
				type: "add",
				path: `${curDir}/${name}/${name}.css`,
				templateFile: "templates/react/component/css.hbs",
			},
		];
	},
};
