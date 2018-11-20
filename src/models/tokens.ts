import Base from "./basemodel/Base";

export default class Tokens extends Base {
    userID: number
    hash: String
    expiration: number

    constructor(userID: number, hash: String, expiration: number) {
        super();
        this.userID = userID
        this.hash = hash
        this.expiration = expiration
    }
}