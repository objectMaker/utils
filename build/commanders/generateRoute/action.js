"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_1 = require("typescript");
var index_1 = require("../../utils/index");
function default_1(varName) {
    var sourceFile = (0, typescript_1.createSourceFile)("sourceTs.ts", (0, index_1.getFile)((0, index_1.getFileAbsPath)('./test.ts')), typescript_1.ScriptTarget.ES2021);
    console.log(sourceFile, 'sourcefile');
}
exports.default = default_1;
//# sourceMappingURL=action.js.map