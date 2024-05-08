"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_1 = require("typescript");
var fs_1 = __importDefault(require("fs"));
var index_1 = require("../../utils/index");
function default_1(varName) {
    var testFile = (0, index_1.getFile)((0, index_1.getFileAbsPath)('./test.ts'));
    var testFileArray = testFile.split('\n');
    var DetailPageListIndex = testFileArray.findIndex(function (item) {
        return item.includes('DETAIL_PAGE_LIST');
    });
    var varDeclarations = testFileArray.slice(0, DetailPageListIndex);
    var lastExportIndex = 0;
    varDeclarations.forEach(function (item, index) {
        item.includes('export') && (lastExportIndex = index);
    });
    varDeclarations.splice(lastExportIndex + 1, 0, "export const ".concat(varName.toUpperCase(), " = \"").concat(varName.toLowerCase(), "\";"));
    var sourceFile = (0, typescript_1.createSourceFile)("sourceTs.ts", (0, index_1.getFile)((0, index_1.getFileAbsPath)('./test.ts')), typescript_1.ScriptTarget.ES2021);
    var detailPageListItems = sourceFile.statements.reduce(function (pre, current) {
        return pre.concat(current.declarationList.declarations);
    }, []);
    var templateArr = ['export const DETAIL_PAGE_LIST: string[] = [', '];'];
    detailPageListItems.find(function (item) { return item.name.escapedText === 'DETAIL_PAGE_LIST'; }).initializer.elements.map(function (item) { return item.escapedText; }).concat(varName).reverse().forEach(function (item, index) {
        templateArr.splice(1, 0, item.toUpperCase() + (index ? ',' : ''));
    });
    fs_1.default.writeFileSync((0, index_1.getFileAbsPath)('./test.ts'), varDeclarations.concat(templateArr).join('\n'), 'utf-8');
}
exports.default = default_1;
//# sourceMappingURL=action.js.map