const parafo = document.getElementById("parrafo");
const boton = document.querySelector("#btn"); //va con #

const escribir = () =>{
    let texto = prompt("Desea agregar algo al texto? SI/NO");
    if (texto === 'SI') {
        texto1 = prompt("Escriba el texto:")
        parafo.innerHTML = texto1;
        parafo.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"; 
}}

let div = document.querySelector("div");
let titulo = document.createElement("h2");
titulo.setAttribute("id", "titulo1");
titulo.innerHTML ="Entrega 3";
// console.log(titulo);

texto.onkeyup = (e)=> {  
    console.log(texto.value)
    texto.innerHTML = texto.value;
    console.log(e)
};

boton.addEventListener("mouseover", ()=>{
    console.log("Paso por el boton enviar")  
});

//Guardar
localStorage.setItem("texto", texto);
let textoNew = localStorage.getItem("texto");
console.log(textoNew);

//Agregar texto
function agregarTexto () {
    let texto1 = document.getElementById("texto1").value;
    let boton = document.getElementById("btn");
    
    boton.addEventListener("click", () => {
        e.preventDefault();
        localStorage.setItem("texto agregado", texto1);
    })
    }

const jugador = {
        nombre: "alan",
        edad: 20 }   

const mostrarDatos = ({nombre, edad}) => {
        jugador.innerHTML += `
            <h3>${nombre}</h3>
            <p>Edad: ${edad}</p>
        `   
    }
    
let clave = localStorage.key(texto);
let valor = localStorage.getItem(clave);
console.log(`la clave es ${clave} y el valor es ${valor}`);

const nuevoParrafo = prompt("Escriba el texto:")
parafo.innerHTML = nuevoParrafo;
parafo.style.background ='red'; 
//lo puse rojo para ver si se agrega
mensaje = "-- Este es el texto agregado --"
let parrafoAgregado = localStorage.getItem("nuevoParafo") + mensaje;
//los uno como string

//Guardar el nuevo texto
localStorage.setItem("Parrafo new", parrafoAgregado); //GUARDARLO
let parrafoAgregado1 = localStorage.getItem("Parrafo new"); //TRAERLO
