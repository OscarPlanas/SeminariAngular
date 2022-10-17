export class User {
    _id?: number;
    id: number;
    name: string;
    email: string;
    username: string;
    password: string;


    constructor(id: number, name: string, email: string, username: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
    }   
}