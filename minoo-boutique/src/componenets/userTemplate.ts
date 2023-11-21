import UserList from "./UserList";

interface DOMList {
    span: HTMLElement,
    clear(): void
    render(userList: UserList): void
}

export default class UserTemplate implements DOMList {
    span: HTMLElement
    static instance: UserTemplate = new UserTemplate()
    private constructor(){
        this.span = document.getElementById("userName") as HTMLSpanElement
    }
    clear(): void {
        this.span.innerHTML = ''
    }
    render(userList: UserList): void {
        this.clear()
     userList.list.forEach(item => {
      const userElement = document.createElement('div');
        userElement.textContent = `${item.firstName} ${item.lastName}`;
        this.span.appendChild(userElement);
        })
        
    }
}