import Register from "./componenets/Register"

const initApp = () => {
  const [logP, regP] = Register()
 
 logP()
 regP()
}
document.addEventListener("DOMContentLoaded", initApp)