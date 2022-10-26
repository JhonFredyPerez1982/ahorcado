
let changeColor;
changeColor=setInterval(firtsBox,100);
let btnNuevoJuego = document.getElementById("btn-nuevo-juego").style.display = "none" ;
document.getElementById("question").style.display = 'block';  
let btnCancelar = document.getElementById("btn-cancelar");
let pantalla = document.querySelector("canvas");

let palabras = ["CHICKEN", "COW", "PIG"];
let tablero = document.getElementById("horca").getContext("2d");

let palabraSecreta = "";
let letras=[];
let errores=8;
//PalabraSecreta

var palabraCorrecta = "";
let letrasIncorrectas = [];
let numeroDeErrores = 8;
let letraElegida = [];

document.getElementById("iniciar-juego").onclick = () => {
  iniciarJuego();
  adivinar();
}
function escojerPalabraSecreta() {
  let palabra = palabras[Math.floor(Math.random() * palabras.length)]
  palabraSecreta = palabra
  return palabra
}

function verificarLetra(keyCode) {
  if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
}

function verificarLetraClicada(key) {
  if (letras.length < 1 || letras.indexOf(key) <  0) {
    letras.push(key)
    return false
    
  }
  else {
    letras.push(key)
    return true
  }
}




function anadirLetraIncorrecta() {
  errores -= 1;
}
//_________________
function adicionarLetraCorrecta(i) {
  palabraCorrecta += palabraSecreta[i].toUpperCase()
}
function verificarVencedor(letra) {
  letraElegida.push(letra.toUpperCase());
  if (letraElegida.length == palabraSecreta.length) {
ganaste()
     }
}


function adicionarLetraIncorrecta(letter) {
  if (palabraSecreta.indexOf(letter) <=0) {
    errores -= 1;
  }
}
function verificarFinJuego(letra) {
  //checa si la letra ha sido incluída en el array de  las letras correctas o incorrectas
 if(letraElegida.length < palabraSecreta.length) { 
    //incluye las letras ya digitadas en el arrau
    letrasIncorrectas.push(letra);
   // escribirLetraIncorrecta(letra, errores);
     //adicionarLetraIncorrecta(letra);
      
    //valida se el usuário cometió el numero maximo de errores
    if (letrasIncorrectas.length > numeroDeErrores) {
      perdiste()
    } else if(letraElegida.length < palabraSecreta.length) {
      adicionarLetraIncorrecta(letra)
      escribirLetraIncorrecta(letra, errores)
    }
  }
 } 
 
function adivinar(){
  if(palabraSecreta==="PIG"){
    document.querySelector(".question").innerHTML="hoing hoing";
      setInterval(dibujarCerdo,1000);
  }else if(palabraSecreta==="COW"){
 
   document.querySelector(".question").innerHTML="muuuuuuh!";
      setInterval(dibujarVaca,1000);
  }else if(palabraSecreta==="CHICKEN"){
    document.querySelector(".question").innerHTML="ki ki ri ki";
       setInterval(dibujarPollo,1000);
  }
  }
//____________________________-


function iniciarJuego() {
  document.getElementById("div-desaparece").style.display = 'none';
  document.getElementById("question").style.display = 'block';
  
  dibujarTablero();
  escojerPalabraSecreta();
  dibujarLinea();
  document.getElementById("btn-nuevo-juego").style.display = "block";
  

  document.onkeydown = (e) => {
    
    let letra = e.key.toUpperCase()
    if (letrasIncorrectas.length <= numeroDeErrores) {
      if (!verificarLetraClicada(e.key) && verificarLetra(e.keyCode)){
      if (palabraSecreta.includes(letra)) {
        adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
        
      for (let i = 0; i < palabraSecreta.length; i++) {
    if (palabraSecreta[i] === letra) {
    escribirLetraCorrecta(i);
    verificarVencedor(letra);
    adivinar(i);
      }
  }

}
else{
  if (!verificarLetraClicada(e.key) && !verificarVencedor(letra)) return
      
  
  dibujarAhorcado(errores)
  verificarFinJuego(letra)
}}
}
    }
  }

