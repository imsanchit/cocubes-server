export default class Base {
    id: number
    created: number
    updated: number
    deleted: number

    constructor() {
        this.id = 1;
        this.created = new Date().getTime();
        this.updated = 1;
        this.deleted = 1;
    }
}