// react page generator
export const reactPageGenerator = {
	description: "react页面模板代码生成",
	prompts: [
		{
			type: "input",
			name: "name",
			message: "请输入需要生成的页面名称！",
		},
	],
	actions: (data) => {
		const name = "{{ name }}"; // 控制台输入的name，在模板文件中可以使用。
		const curDir = process.cwd();
		return [
			{
				type: "add",
				path: `${curDir}/${name}.page.tsx`,
				templateFile: "templates/react/page/tsx.hbs",
			},
		];
	},
};
