import path from "node:path";
import url from "node:url";

// es module下 读取当前文件路径 === commonjs（————dirname）
export function currDir(fileUrl) {
	const __filename = url.fileURLToPath(fileUrl);
	return path.dirname(__filename);
}
