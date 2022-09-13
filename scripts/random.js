import navbar from "../components/navbar.js"
import {getData, append} from "../components/data.js"


document.querySelector("#navbar").innerHTML = navbar()

let main = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/random.php`
    let data = await getData(url)
    append(data.meals)

}



let showAll = () => {
    for(let i=0;i<10;i++){
        main()
    }
}

showAll()

let loginLS = JSON.parse(localStorage.getItem("login"))

if(loginLS!=null){
    let a = document.querySelector("a[href='login.html']")
    a.innerText= 'Logout'
    a.href = ''
    a.addEventListener("click",()=>{
        a.innerText = "Login";
        localStorage.setItem('login', null);
        a.removeEventListener('click')
    })
}