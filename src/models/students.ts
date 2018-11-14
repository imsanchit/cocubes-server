import Base from "./basemodel/Base";

export default class Students extends Base {
    name: String
    email: String
    passwordHash: String
    userTypeId: number
    schoolID: number
    phoneNumber: String
    gender: String
    dob: Date
    addressLine1: String
    addressLine2: String
    city: String
    state: String
    country: String
    schoolRollNo: number
    className: String


    constructor(name: String, email: String, passwordHash: String, userTypeId: number, schoolID: number, phoneNumber: String, gender: String, dob: Date, addressLine1: String, addressLine2: String, city: String, state: String, country: String, schoolRollNo: number, className: String) {
        super();
        this.name = name
        this.email = email
        this.passwordHash = passwordHash
        this.userTypeId = userTypeId
        this.schoolID = schoolID
        this.phoneNumber = phoneNumber
        this.gender = gender
        this.dob = dob
        this.addressLine1 = addressLine1
        this.addressLine2 = addressLine2
        this.city = city
        this.state = state
        this.country = country
        this.schoolRollNo = schoolRollNo
        this.className = className
    }
}