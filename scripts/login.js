import navbar from "../components/navbar.js"

document.querySelector("#navbar").innerHTML = navbar()

let dataLS = JSON.parse(localStorage.getItem("users")) || [];

let login = (event) => {
    event.preventDefault();
    let form = document.querySelector("#form")
    let email = form.email.value
    let password = form.password.value
    let user = new User(email, password)
    let info = auth(email, password)
    if(info){
        localStorage.setItem("login",JSON.stringify(info))
        alert("Login successful!")
        window.location.href = 'index.html'
    }else{
        alert("Wrong Credentials!")
    }
}

let auth = (email, password) => {
    let dataLS = JSON.parse(localStorage.getItem('users')) || [];
    let flag = false;
    let details;
    dataLS.forEach((el)=>{
        if(el.email === email && el.password === password){
            flag = true;
            details = el
        }
    })
    if(flag){
        return details;
    }else{
        return false;
    }
}

class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }
}

document.querySelector("#form").addEventListener("submit", login);



