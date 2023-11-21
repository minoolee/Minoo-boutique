export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    ps: string | number
}

export default class UserItem implements User {
    static counter: number = 0
    public id: number 
    constructor(
        
        public firstName: string,
        public lastName: string,
        public email: string,
        public ps: string | number
    
    ){ this.id = ++UserItem.counter}
    get userFirstName(): string {
       return this.firstName
    }
    set userFirstName(name: string){
        this.firstName = name
    }
    get userLastName(): string {
        return this.lastName
     }
     set userLastName(name: string){
         this.lastName = name
     }
    get userEmail(): string {
        return this.email
    }
    set userEmail(email: string){
        this.email = email
    }
    get userPs(): string | number {
        return this.ps
    }
    set userPs(ps: string | number){
        this.ps = ps
    }
get userId (): number {
    return this.id
}
}