import { exec } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

/**
 * @typedef {Object} TemplateEnum
 * @property {string} reactWebTpl - react web项目模板
 * @property {string} nextWebTpl - next web项目模板
 */
export const TemplateEnum = {
	reactWebTpl: "react-web-tpl",
	nextWebTpl: "next-web-tpl",
};

/**
 * @description 拉取仓库指定的模板文件
 * @param {TemplateEnum} templateName - 仓库拉取的模板名称
 * @param {string} dirName - 生成的项目文件名称
 * @returns void
 */
export function getRepoTemplate(templateName, dirName) {
	const repoUrl = "https://github.com/promonkeyli/frontend-templates.git"; // 仓库url
	const localPath = `${process.cwd()}/${dirName}`; // 创建的本地项目文件路径

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
		copyFiles(`${localPath}-temp/${templateName}`, `${localPath}`);
		//3、 拷贝完毕后删除clone的目录
		try {
			fs.rmSync(`${localPath}-temp`, { recursive: true, force: true });
		} catch (err) {
			console.error("Error deleting folder:", err);
		}
		console.log("项目创建成功！");
	});
}

/**
 * @description 拷贝文件
 * @param {string} source - 源文件路径
 * @param {string} target - 目标文件路径
 * @returns void
 */
export function copyFiles(source, target) {
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
