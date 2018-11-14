export class Base {
    id: BigInteger
    created: BigInteger
    updated: BigInteger
    deleted: BigInteger

    constructor(id: BigInteger, created: BigInteger, updated: BigInteger, deleted: BigInteger) {
        this.id = id;
        this.created = created;
        this.updated = updated
        this.deleted = deleted
    }
}