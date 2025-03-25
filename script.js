let numeroSecreto = Math.floor(Math.random() * 10) + 1;

console.log(numeroSecreto);

const input = document.getElementById("input")
const guessBtn = document.getElementById("guess")
const mensaje = document.getElementById("ptext")
const intentosText = document.getElementById("intentos")
const resetBtn = document.getElementById("reset")

let intentos = 0;
let juegoTerminado = false;

function adivinarNumero () {
    let adivinanza = parseInt(input.value);
    
    
    if(isNaN(adivinanza) || adivinanza < 1 || adivinanza > 10) {
        mensaje.textContent = "Por favor, ingresá un número válido entre 1 y 10"
        return;
    }
    
    intentos++;
    intentosText.textContent = "Intentos: " + intentos;

    if (adivinanza ===  numeroSecreto) {
        mensaje.textContent = "¡Correcto! Adivinaste el número en " + intentos + " intentos"
        juegoTerminado = true;
        guessBtn.disabled = true;

    } else if (adivinanza > numeroSecreto) {
        mensaje.textContent = "Demasiado alto, intenta de nuevo"
    } else if (parseFloat(input.value) !== adivinanza) {
        mensaje.textContent = "Por favor, ingresá un número entero"
    } else {
        mensaje.textContent = "Demasiado bajo, intenta de nuevo"
    }
    


    console.log(adivinanza);
    
};

guessBtn.addEventListener("click", adivinarNumero)

// Enter
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        adivinarNumero(); 
    }
});



resetBtn.addEventListener("click", function(){
    juegoTerminado = false;
    guessBtn.disabled = false;

    numeroSecreto = Math.floor(Math.random() * 10) + 1
    console.log(numeroSecreto);

    intentos = 0;
    intentosText.textContent = "Intentos: " + intentos;

    input.value = "";

    mensaje.textContent = "Adivina un numero del 1 al 10"
    
})


