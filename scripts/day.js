import navbar from "../components/navbar.js"
import { getData } from "../components/data.js"

document.querySelector("#navbar").innerHTML = navbar()

let main = async () => {
    const url = `https://www.themealdb.com/api/json/v1/1/random.php`
    let data = await getData(url)
    append(data.meals)

}


let append = (data) => {
    let container = document.querySelector('#container')
    container.innerHTML = null;
    data = data[0]
    let div1 = document.createElement('div')
    let img = document.createElement('img')
    img.src = data.strMealThumb
    div1.append(img)
    let div2 = document.createElement('div')
    let title = document.createElement('h2')
    title.innerText = data.strMeal
    let category = document.createElement('h3')
    category.innerText = `Category: ${data.strCategory}`
    let country = document.createElement('p');
    country.innerText = `Country: ${data.strArea}`
    let des = document.createElement('p');
    des.innerText = `Instructions: ${data.strInstructions}`
    let link = document.createElement("a")
    link.href = `${data.strYoutube}`
    link.innerText = `Recipe Video`
    div2.append(title,category,country,link,des)
    container.append(div1,div2)
}

main()

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