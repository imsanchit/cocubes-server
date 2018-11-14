import { Base } from "./basemodel/Base";

export class Students extends Base {
    name: String
    email: String

    constructor(id: BigInteger, created: BigInteger, updated: BigInteger, deleted: BigInteger, name: String, email: String) {
        super(id, created, updated, deleted);
        this.name = name
        this.email = email
    }
}