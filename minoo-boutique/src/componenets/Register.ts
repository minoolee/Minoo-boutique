export const register = document.getElementById("register") as HTMLUListElement
export const main = document.getElementById("main") as HTMLDivElement
export const registerPage = document.getElementById("registerPage") as HTMLAnchorElement

const Register = ()=> { 
  const logP = () => {
    register.addEventListener('click', (e)=> {
      e.preventDefault()
      main.innerHTML = ""
      const loginContainer = document.createElement("section") as HTMLDivElement
      loginContainer.className="login-container"
      loginContainer.innerHTML=`
      <div class="logReg">
      <a id="loginPage" href="">Login</a>
      <a name="registerPage" id="registerPage" href="">Registrieren</a>
      </div>
      <h3>Anmelden</h3>
      <form id="login-form" action="" method="post">
      <input id="logi-email"  type="email" placeholder="E-Mail">
      <input id="login-ps" type="password" placeholder="Passwort">
      <button id="login-btn" type="submit">Anmelden</button>
      </form>`
     return main.append(loginContainer)
      })
  }
const regP = ()=> {
if(registerPage){
registerPage.addEventListener('click',(e) =>{
  e.preventDefault()
  main.innerHTML = ""
  const registerContainer = document.createElement("section") as HTMLDivElement
  registerContainer.className="registration-container"
  registerContainer.innerHTML=`
  <div class="logReg">
  <a id="loginPage" href="">Login</a>
  <a id="registerPage" href="">Registrieren</a>
  </div>
  <h3>Registrieren</h3>
  <form id="registration-form" action="" method="post">
  <input id="firstName" name="firstName" type="text" placeholder="Vorname">
  <input id="lastName" name="lastName" type="text" placeholder="Nachname">
  <input id="registration-email"  type="email" placeholder="E-Mail">
  <input id="registration-ps" type="password" placeholder="Passwort">
  <button id="registration-btn" type="submit">Jetzt registrieren</button>
  </form>
  `
  return main.append(registerContainer)
})}}
return [logP,regP]
}

export default Register

