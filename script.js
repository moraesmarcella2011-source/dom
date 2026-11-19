const cont = document.querySelector("#contador")
const btn1 = document.querySelector("#subtrair")
const btn2 = document.querySelector("#somar") 

let numero = 0

cont.textContent = "0"

btn1.addEventListener("click", function() {
    numero --
    cont.textContent = numero 
})

btn2.addEventListener("click", function() {
    numero ++
    cont.textContent = numero 
})

const form = document.querySelector("form")

form.addEventListener("submit" , function (event){
    event.preventDefault()

    let nome = document.querySelector("input").value

    alert(nome)
})