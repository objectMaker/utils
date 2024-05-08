"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileAbsPath = exports.getFile = void 0;
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
function getFile(filePath) {
    return fs_1.default.readFileSync(filePath, { encoding: 'utf-8' });
}
exports.getFile = getFile;
function getFileAbsPath(relativePath) {
    return path_1.default.join(process.cwd(), relativePath);
}
exports.getFileAbsPath = getFileAbsPath;
//# sourceMappingURL=index.js.map