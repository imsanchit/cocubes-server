"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Base_1 = __importDefault(require("./basemodel/Base"));
class Students extends Base_1.default {
    constructor(name, email, passwordHash, userTypeId, schoolID, phoneNumber, gender, dob, addressLine1, addressLine2, city, state, country, schoolRollNo, className) {
        super();
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
        this.userTypeId = userTypeId;
        this.schoolID = schoolID;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.dob = dob;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.city = city;
        this.state = state;
        this.country = country;
        this.schoolRollNo = schoolRollNo;
        this.className = className;
    }
}
exports.default = Students;
//# sourceMappingURL=Students.js.map