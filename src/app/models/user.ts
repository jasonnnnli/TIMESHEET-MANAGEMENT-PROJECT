export class User {
    constructor(firstName:string,lastName:string,desc:string,
                email:string, password:string, type:string) {
                    
        this.firstName = firstName
        this.lastName = lastName
        this.desc = desc
        this.email = email
        this.password = password
        this.type = type
    }
    firstName:string;
    lastName:string;
    desc:string;
    email:string;
    password:string;
    type:string;
}