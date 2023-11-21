import { PageRender } from "./componenets/PageRender"
import UserItem from "./componenets/UserItem"
import UserList from "./componenets/UserList"
//import Register, { register } from "./componenets/Register"
//import Register from "./componenets/Register"
import UserTemplate from "./componenets/userTemplate"
const initApp = () => {
 const userList = UserList.instance
 const userTemplate = UserTemplate.instance
 const pageRender = PageRender.instance
const userRegister = document.getElementById("userName") as HTMLSpanElement
userRegister.addEventListener('click', (e) => {
  e.preventDefault()
  pageRender.registr()
})


 const itemIntryForm = document.getElementById("registration-form") as HTMLFormElement
 itemIntryForm.addEventListener("submit", (e: SubmitEvent): void => {
  e.preventDefault()
  const firstName = (document.getElementById("firstName") as HTMLInputElement).value
  const lastName = (document.getElementById("lastName") as HTMLInputElement).value
  const email = (document.getElementById("registration-email") as HTMLInputElement).value
  const ps = (document.getElementById("registration-ps") as HTMLInputElement).value
  const user = new UserItem(firstName, lastName, email, ps)
  userList.add(user)
  userTemplate.render(userList)
 })
 }
 
document.addEventListener("DOMContentLoaded", initApp)