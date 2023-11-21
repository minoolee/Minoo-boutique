interface RegisterComponent {
 main: HTMLElement
 loginContainer: HTMLElement
 /* formBox: HTMLElement
 register: HTMLElement
 login: HTMLElement */
registr(): void

}

export class PageRender implements RegisterComponent{
    main: HTMLElement
    loginContainer: HTMLElement
    static instance: PageRender = new PageRender()
    constructor()
    {
        this.main = document.getElementById("main") as HTMLElement
        this.loginContainer = document.createElement("section") as HTMLDivElement
}       
   /*  registerLink(): void {

    } */
  registr(): void {
    this.main.innerHTML = ""
    this.loginContainer.className ="login-container"
    const linkBox = document.createElement("div") as HTMLDivElement
    linkBox.className = "logReg"
    const registerPage = document.createElement("a") as HTMLAnchorElement
    registerPage.id = "registerPage"
    registerPage.href = "#"
    registerPage.textContent = "Registrieren"
    const loginPage = document.createElement("a") as HTMLAnchorElement
    loginPage.id = "loginPage"
    loginPage.href = "#"
    loginPage.textContent = "Login"
    linkBox.append(loginPage, registerPage)
    const loginForm = document.createElement("form") as HTMLFormElement
    loginForm.id = "login-form"
    loginForm.action = ""
    loginForm.method = "post"
    const loginEmail = document.createElement("input") as HTMLInputElement
    loginEmail.id = "logi-email"
    loginEmail.type = "email"
    loginEmail.placeholder = "E-Mail"
    const loginPassword = document.createElement("input") as HTMLInputElement
    loginPassword.id = "login-ps"
    loginPassword.type = "password"
    loginPassword.placeholder = "Passwort"
    const loginBtn = document.createElement("button") as HTMLButtonElement
    loginBtn.id = "login-btn"
    loginBtn.type = "submit"
    loginBtn.textContent = "Anmelden"
    loginForm.append(loginEmail, loginPassword, loginBtn)

    this.loginContainer.append(linkBox, loginForm)

    registerPage.addEventListener('click', (e) => {
        e.preventDefault()
        this.main.innerHTML = ""
        const registerForm = document.createElement("form") as HTMLFormElement
    registerForm.id = "registration-form"
    registerForm.action = ""
    registerForm.method = "post"
    //registerForm.innerHTML = 
    const userFirstName = document.createElement("input") as HTMLInputElement
    userFirstName.id = "firstName"
    userFirstName.name = "firstName"
    userFirstName.type = "text"
    userFirstName.placeholder = "Vorname"
    const userLastName = document.createElement("input") as HTMLInputElement
    userLastName.id = "lastName"
    userLastName.name = "lastName"
    userLastName.type = "text"
    userLastName.placeholder = "Nachname"
    const userEmail = document.createElement("input") as HTMLInputElement
    userEmail.id = "registration-email"
    userEmail.type = "email"
    userEmail.placeholder = "E-Mail"
    const userPs = document.createElement("input") as HTMLInputElement
    userPs.id = "registration-ps"
    userPs.type = "password"
    userPs.placeholder = "Passwort"
    const registrationBtn = document.createElement("button") as HTMLButtonElement
    registrationBtn.id = "registration-btn"
    registrationBtn.type = "submit"
    registrationBtn.textContent = "Jetzt registrieren"
    registerForm.append(userFirstName, userLastName, userEmail, userPs, registrationBtn)

    this.loginContainer.innerHTML = ""
    this.loginContainer.append(linkBox, registerForm)
    return this.main.append(this.loginContainer)
    
    })
    loginPage.addEventListener('click', (e)=> {
      e.preventDefault()
      
      this.loginContainer.innerHTML = ""

   

    this.loginContainer.append(linkBox, loginForm)
    return this.main.append(this.loginContainer)



    })

    return this.main.append(this.loginContainer)

      }

}