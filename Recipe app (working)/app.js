
const display = document.querySelector('.form')
const ul = document.querySelector('ul')
let recipeSec =document.querySelector('.recipeSec')
const getRecipe = async(food)=>{
    const base = `https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=91cd7b5d&app_key=95b17c7e392c873b014c83f6039bc643`



    const result = await fetch(base)
    const convert = await result.json()

    return convert
    


}


// form
display.addEventListener('submit',e=>{
    e.preventDefault()
    let v =display.search.value
    console.log(v);
    
    getRecipe(v)
    .then((data)=>{return recipes(data)})
    .catch((err)=>{console.log(err);})
    display.reset()
    })



const recipes = (data)=>{

 const newV=   data.hits.
 map((data)=>{

return data.recipe})
.map((data)=>{

return {label:data.label,image:data.image,ingredients:data.ingredients}


    })

recipeUI(newV)


}



const recipeUI =(e)=>{
let html = ``
    
 let a =  e.forEach(e => {

   let dis=``
e.ingredients.forEach(e=>{
dis+= `<li>${e.text}</li>`

})


      console.log(dis);
   html+=`<div  class="one" ><img src="${e.image}" alt="">
   <h1>${e.label}</h1></div>

   <div  class="two" ><h1>Ingredients</h1>${dis}</div>`

  });


  
 
  

  recipeSec.innerHTML =  html


}





// check

// let a = [{name:'Rishad',age:24},{name:'Ali',age:23}]


// a.map((data)=>{

// return {name:data.name}

// })

// console.log(a);