let getData = async (url) => {
    let res= await fetch(url)
    let data = await res.json()
    return data
}

let append = (data)=>{
    if(!data){
        return
    }
    let container = document.querySelector("#container")
    // container.innerHTML = null
    console.log(data)
    data.forEach(element => {
        let div = document.createElement("div")
        let img = document.createElement("img")
        img.src = element.strMealThumb 
        let title = document.createElement("h3")
        title.innerText = element.strMeal
        let category = document.createElement("h4")
        category.innerText = `Category: ${element.strCategory}`
        let area = document.createElement("h4")
        area.innerText = `Country: ${element.strArea}`
        let link = document.createElement("a")
        link.href = `${element.strYoutube}`
        link.innerText = `Recipe Video`
        div.append(img,title,category,area,link)
        container.append(div)
    });
}

export {getData, append}