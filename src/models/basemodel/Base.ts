export class Base {
    ID: BigInteger
    Created: BigInteger
    Updated: BigInteger
    Deleted: BigInteger
    
    constructor(ID: BigInteger, Created: BigInteger, Updated: BigInteger, Deleted: BigInteger) {
        this.ID = ID;
        this.Created = Created;
        this.Updated = Updated
        this.Deleted = Deleted
    }
}