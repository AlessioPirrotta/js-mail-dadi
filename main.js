let dado1= document.getElementById("n1")
let dado2= document.getElementById("n2")
const winner= document.getElementById("wn")
const button= document.getElementById("btn")

dado1.innerHTML= random(1, 100)
dado2.innerHTML= random(1, 100)


function random(min, max){
   return Math.floor(Math.random() * (max - min + 1)) + min
}

if(dado1.innerHTML > dado2.innerHTML){
    winner.innerHTML= `<span class="text-success"> Player 1 wins !</span>`
    
    
} 
else if (dado1.innerHTML < dado2.innerHTML) {
    winner.innerHTML = `<span class="text-danger"> Player 2 wins !</span>`;
} 
else {
    winner.innerHTML = "It's a tie!";
}

button.addEventListener("click", function(){
    document.location.reload()
})



let elencoMail = ["giacomo@giacomo.it", "dario@dario.it", "antonio@antonio.it"]

const buttonM = document.getElementById("btnm")
let variabileC= false
let esitoM= document.getElementById("esito")


buttonM.addEventListener("click", function(){
    let valueInputMail= document.getElementById("inpt").value
    elencoMail.push(valueInputMail)
    console.log(elencoMail)
    for(let i=0; i< elencoMail.length;i++){
        if(elencoMail[i]==="alessio@alessio.it"){
            variabileC= true
        }
    }
    
    if(variabileC==true){
        esitoM.innerHTML="La sua mail è presente in elenco"
    }
    
})
