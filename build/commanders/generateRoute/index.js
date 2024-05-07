"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var action_1 = __importDefault(require("./action"));
function regisCmd(program) {
    program.command('generator').alias('g').arguments('<string>').action(action_1.default);
}
exports.default = regisCmd;
//# sourceMappingURL=index.js.map