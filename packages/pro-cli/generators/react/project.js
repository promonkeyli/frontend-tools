import { exec } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

// react project generator
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
		getRepoTemplate(data.name); // 模板克隆
		return [];
	},
};

// 拉去远端仓库react project 模板
function getRepoTemplate(name) {
	const repoUrl = "https://github.com/promonkeyli/frontend-templates.git"; // 仓库url
	const localPath = `${process.cwd()}/${name}`; // 创建的本地项目文件路径

	// 执行 git clone 命令
	exec(`git clone ${repoUrl} ${localPath}-temp`, (error, stdout, stderr) => {
		if (error) {
			console.error(`exec error: ${error}`);
			return;
		}
		//1、 目录下创建临时文件夹存放copy的文件（使用时间戳命名文件及）
		if (!fs.existsSync(localPath)) {
			fs.mkdirSync(localPath);
		}
		//2、 拷贝模板文件夹下的文件到指定目录下
		copyFiles(`${localPath}-temp/react-web-tpl`, `${localPath}`);
		//3、 拷贝完毕后删除clone的目录
		try {
			fs.rmSync(`${localPath}-temp`, { recursive: true, force: true });
		} catch (err) {
			console.error("Error deleting folder:", err);
		}
		console.log("项目创建成功！");
	});
}

// 拷贝文件
function copyFiles(source, target) {
	const files = fs.readdirSync(source);
	for (const file of files) {
		const sourcePath = path.join(source, file);
		const targetPath = path.join(target, file);
		const stats = fs.statSync(sourcePath);
		if (stats.isDirectory()) {
			// 如果是目录,则递归拷贝
			if (!fs.existsSync(targetPath)) {
				fs.mkdirSync(targetPath, { recursive: true });
			}
			copyFiles(sourcePath, targetPath);
		} else {
			// 如果是文件,则直接拷贝
			fs.copyFileSync(sourcePath, targetPath);
		}
	}
}
