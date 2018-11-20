"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./basemodel/Base"));
class Tokens extends Base_1.default {
    constructor(userID, hash, expiration) {
        super();
        this.userID = userID;
        this.hash = hash;
        this.expiration = expiration;
    }
}
exports.default = Tokens;
//# sourceMappingURL=tokens.js.map