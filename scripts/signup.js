import navbar from "../components/navbar.js"

document.querySelector("#navbar").innerHTML = navbar()

let dataLS = JSON.parse(localStorage.getItem("users")) || []

let register = (event) => {
    event.preventDefault()
    let form = document.querySelector("#form")
    let name = form.name.value
    let email = form.email.value
    let password = form.password.value
    let phone = form.phone.value
    let user = new User(name, email, phone, password)
    if(checkEmail(email)==true){
        dataLS.push(user)
        localStorage.setItem('users',JSON.stringify(dataLS))
        alert('Sign up successful')
    }else{
        alert('Email already in use')
    }
}

let checkEmail = (email) => {
    let flag = true
    let dataLS = JSON.parse(localStorage.getItem('users')) || [];
    dataLS.forEach((el)=> {
        if(el.email == email){
            flag = false;
        }
    })
    if(!flag){
        return false;
    }
    return true;
}

document.querySelector("#form").addEventListener("submit", register)

class User{
    constructor(name, email,phone,password){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
    }
}





