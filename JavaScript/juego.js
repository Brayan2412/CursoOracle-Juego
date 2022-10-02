import {pantalla,pincel,dibujarHorca} from '../JavaScript/dibujar.js';
let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS","FRONTEND","BACKEND","JAVA"];
let content_inicio = document.querySelector(".content-inicio");
let content_juego = document.querySelector(".content-juego");
let content = document.querySelector(".content-agregar");
let pAleatoria='';
let letrasGuardadas=[];
let bloquearTeclas = false;
let intentos = 0;
let activarEventoTeclas=false;

function jugar() {
        content_inicio.style.display = "none";
        content_juego.style.display = "block";
        dibujarBase();
        palabraAleatoria();
        agregarCajas();
        bloquearTeclas=true;
        activarEventoTeclas=true;
}
document.querySelector(".boton-iniciar").addEventListener("click", jugar);

function dibujarBase() {
    pincel.lineWidth = 2;
    pincel.fillStyle = "blue";
    pincel.strokeStyle = "green";
    //linea Horizontal
    pincel.beginPath();
    pincel.moveTo(10, 360);
    pincel.lineTo(160, 360);
    pincel.stroke();
    
}

function palabraAleatoria() {
    pAleatoria = palabras[Math.floor(Math.random() * palabras.length)];

}
var nCaja = 0;
function agregarCajas() {
    let cantidadPalabras = pAleatoria.length;
    for (let index = 0; index < cantidadPalabras; index++) {
        $(".input-letras").append(
            `<input type="text" maxlength="1" id="caja${nCaja++}" class="inputs" readonly>`
        );
    }
}

function nuevoJuego() {
    eliminarCajas();
    pAleatoria='';
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    jugar();
    bloquearTeclas=true;
    p=0;x=0;
    letrasGuardadas=[];
    intentos=0;
    document.querySelector('.letras-Incorrectas').innerHTML='';
}
document.querySelector('.btn-nuevojuego').addEventListener('click',nuevoJuego)

function cancelar() {
    content_juego.style.display="none";
    content_inicio.style.display="block";
    eliminarCajas();
    pAleatoria='';
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    x=0;
    p=0;
    bloquearTeclas=true;
    letrasGuardadas=[];
    intentos=0;
    activarEventoTeclas=false;
    document.querySelector('.letras-Incorrectas').innerHTML='';
}
document.querySelector(".btn-dsistir").addEventListener("click", cancelar);

function eliminarCajas(){
    for (let index = 0; index < pAleatoria.length; index++) {
        $(`#caja${index}`).remove();
    }
    nCaja=0;
    
}

function agregar() {
    content.style.display = "block";
    content_inicio.style.display = "none";
    activarEventoTeclas=false;
}
function guardar() {
    let palabra = (document.querySelector("#palabra").value).replace(/\s+/g, '');
    if (palabra == palabra.toUpperCase()) {
        palabras.push(palabra);
        pAleatoria=palabra;
        console.log(palabras);
        content.style.display = "none";
        content_inicio.style.display = "none";
        content_juego.style.display = "block";
        pincel.clearRect(0, 0, pantalla.width, pantalla.height);
        dibujarBase();
        agregarCajas();
        bloquearTeclas=true;
        activarEventoTeclas=true;
    }
}


function cancelarAdd() {
    content.style.display = "none";
    content_inicio.style.display = "block";

}

document.querySelector(".boton-agregar").addEventListener("click", agregar);
document.querySelector(".btn-guardar").addEventListener("click", guardar);
document.querySelector(".btn-cancelar").addEventListener("click", cancelarAdd);


let x = 0;
let p = 0;
document.addEventListener(
    "keydown",
    (event) => {
        if (activarEventoTeclas) {
        let keyValue = event.key.toUpperCase();
            verificarLetra(keyValue);
            //codeValue = event.code;
            let bol = false;
            if (bloquearTeclas) {
                let palabraSeparada=pAleatoria.split("");
                letrasGuardadas[p] = keyValue;
                p++;
                
                if (
                    (event.keyCode != 32 && event.keyCode < 65) ||
                    (event.keyCode > 90 && event.keyCode < 97) ||
                    event.keyCode > 122 || event.which > 115
                ) {
                } else {
                    for (let i = 0; i < palabraSeparada.length; i++) {
                        if (palabraSeparada[i] == keyValue) {
                            document.querySelector("#caja" + i).value = keyValue;
                            bol = true;
                            palabraSeparada[i] = true;
                            x++;
                            console.log(x);
                        }
                    }
                    if (!bol) {
                        bloquearTeclas = dibujarHorca(++intentos);
                        document.querySelector(".letras-Incorrectas").innerHTML += keyValue;
                        
                        bol = false;
                    }
                    console.log('Cantidad = '+palabraSeparada.length);
                    if (x == palabraSeparada.length) {
                        document.querySelector(".modal-container").style.display = "flex";
                        document.querySelector("#mensaje").innerHTML='Fin del juego. Has ganado';
                        bloquearTeclas = false;
                    }
                }
            }
    }
    },
    false
);


function verificarLetra(params) {
    let bol = false;
    for (let i = 0; i < letrasGuardadas.length; i++) {
        if (letrasGuardadas[i] == params) {
            bol = true;
            break;
        }
    }
    if (bol) {
        bloquearTeclas=false;
    }else{
        bloquearTeclas=true;
    }
}

document.querySelector('#close').addEventListener('click',()=>{
    document.querySelector('.modal-container').style.display = "none";
})




