import {
	url,
	type Rule,
	type SchematicContext,
	type Tree,
	apply,
	applyTemplates,
	mergeWith,
} from "@angular-devkit/schematics";

import { strings } from "@angular-devkit/core";

interface Schema {
	name: string;
}

export function page(_options: Schema): Rule {
	return (tree: Tree, _context: SchematicContext) => {
		return mergeWith(
			apply(url("./files"), [
				applyTemplates({
					...strings,
					name: _options.name,
				}),
			]),
		)(tree, _context);
	};
}
