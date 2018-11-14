"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = require("./basemodel/Base");
class Students extends Base_1.Base {
    constructor(id, created, updated, deleted, name, email) {
        super(id, created, updated, deleted);
        this.name = name;
        this.email = email;
    }
}
exports.Students = Students;
//# sourceMappingURL=Students.js.map