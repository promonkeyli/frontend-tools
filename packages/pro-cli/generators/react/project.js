// react project generator
import { TemplateEnum, getRepoTemplate } from "../../utils/index.js";

export const reactProjectGenerator = {
	description: "react项目模板代码生成",
	prompts: [
		{
			type: "input",
			name: "name",
			message: "请输入需要生成的项目名称！",
		},
	],
	actions: (data) => {
		getRepoTemplate(TemplateEnum.reactWebTpl, data.name); // 模板克隆
		return [];
	},
};
