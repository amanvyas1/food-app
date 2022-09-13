import navbar from "../components/navbar.js"
import {getData, append} from "../components/data.js"


let nav = document.querySelector("#navbar")
nav.innerHTML =  navbar()




let results = async () => {
   let query = document.querySelector("#query").value
   if(query.length<3){
    return
   }
   let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
   let data = await getData(url)
   document.querySelector("#container").innerHTML = null;
   append(data.meals)
}
let id;
let debounce = (func,delay)=>{
    if(id){
        clearTimeout(id)
    }
    id = setTimeout(()=>{
        func()
    },delay)
}

let main = ()=>{
    debounce(results, 1000)
}

let query = document.querySelector("#query")
query.addEventListener("input",main)


let loginLS = JSON.parse(localStorage.getItem("login"))

if(loginLS!=null){
    let a = document.querySelector("a[href='login.html']")
    a.innerText= 'Logout'
    a.href = ''
    let name = document.querySelector("#user")
    name.innerText = `Welcome, ${loginLS.name}`
    a.addEventListener("click",()=>{
        a.innerText = "Login";
        localStorage.setItem('login', null);
        a.removeEventListener('click')
    })
}








