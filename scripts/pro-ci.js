// pro-cli pkg package.json version auto add one
import fs from "node:fs";
import path from "node:path";

// 获取当前工作目录
const currentDir = `${process.cwd()}/packages/pro-cli`;

// 读取 package.json 文件
const packageJsonPath = path.join(currentDir, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

// 获取当前版本号
const currentVersion = packageJson.version;

// 更新版本号
const versionParts = currentVersion.split(".");
versionParts[2] = Number.parseInt(versionParts[2]) + 1; // 增加补丁版本号
const newVersion = versionParts.join(".");
packageJson.version = newVersion;

// 将更新后的 package.json 写回文件
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log("version update success to newVersion !");
