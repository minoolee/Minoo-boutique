import UserItem from "./UserItem";
export interface List {
    list: UserItem[],
    save(): void,
    load(): void,
    add(user: UserItem): void,
    remove(id: number): void,
}

export default class UserList implements List {
    static instance: UserList = new UserList()
    constructor(
        public list: UserItem[] = []
    ){}
    save(): void{
      localStorage.setItem("userList", JSON.stringify(this.list))
    }
    load(): void {
        const storeList: string | null = localStorage.getItem("userList")
        if (typeof storeList !== "string"){
            console.error("Error loading user list from local storage.");
            return
        }
        try{
            const parsedList: {_id: number, _firstName: string, _lastName: string, _ps: string | number, _email: string} [] = JSON.parse(storeList)
            parsedList.forEach(user => {
                const newUserList = new UserItem(user._firstName, user._lastName, user._email, user._ps)
                this.list.push(newUserList)
            })
           /*  parsedList.find(user => {
                const newUserList = new UserItem(user._firstName, user._lastName, user._email, user._ps)
                this.list.push(newUserList) */
    
        }catch (error){
            console.error("Error parsing user list from local storage.", error);
        }
    }
    add(user: UserItem): void {
        this.list.push(user)
        this.save()
    }
    remove(id: number): void {
        this.list = this.list.filter(user => user.id !== id)
        this.save()
    }
}