#!/usr/bin/env node
import { exec } from "node:child_process";
import { createRequire } from "node:module";
import { Command } from "commander";

const require = createRequire(import.meta.url); // 导入package.json
const packageJSON = require("./package.json");

const program = new Command();

// 命令行具体信息
program
	.name("pro-cli")
	.description("cli utils to improve efficiency")
	.version(packageJSON.version);

// 命令行选项
program.option("-c, --component <name>", "generate component files");

// 解析用户输入（(process.argv：命令行参数数组）
program.parse(process.argv);

// 命令行输入的选项
const options = program.opts();

// 条件判断
if (options.component) {
	// 执行@promonkeyli/react-schematics 下的 schematics，生成component模板文件
	exec(
		// `schematics @promonkeyli/react-schematics:c ${options["component"]}`,
		`npm run schematics @promonkeyli/react-schematics:c ${options["component"]}`,
		{},
		(error, stdout, stderr) => {
			console.log(error);
		},
	);
}
