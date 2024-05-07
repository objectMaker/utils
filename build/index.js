"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootStrap = void 0;
var commander_1 = require("commander");
var generateRoute_1 = __importDefault(require("./commanders/generateRoute"));
var program = new commander_1.Command();
var bootStrap = function () {
    console.log('bootstrap');
    (0, generateRoute_1.default)(program);
    program.parse();
};
exports.bootStrap = bootStrap;
(0, exports.bootStrap)();
//# sourceMappingURL=index.js.map