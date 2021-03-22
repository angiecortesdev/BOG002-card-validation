import validator from './validator.js';

// console.log(validator);


let tarjeta = document.getElementById("card");
let ingreso = document.getElementById("ingresar");
let boton = document.getElementById("ingresar");


boton.addEventListener('click', () => {
    alert('hola')
});

ingreso.addEventListener('click', () => {
    let open = validator.isValid(tarjeta.value)
    let open2 = validator.maskify(tarjeta.value)

    if (open) {
        alert(`su ${open} es valida`)
    } else {
        alert(`su ${open2} NO es valida`)
    }

})


//SOLO LA PALABRA BANK
let elemento = document.createElement("h2")
    //crrear texto
let contenido = document.createTextNode("MANCHESTER CITY")
    //agregar el texto al documneto
elemento.appendChild(contenido)
    //Agregar elemento al documento HTML
document.querySelector("#imagenM").appendChild(elemento)
    //setAttributo recibe como parámetro un atributo y su respectivo valor
    //variable.setAttribute("atributo, "valor")
elemento.setAttribute("class", "white")



//PALABRA CARD CREDIT

// let credito = document.createElement("h3");
// // let tarjeta = document.createTextNode("PASS V.I.P");
// credito.appendChild(tarjeta);
// document.getElementById("padre").appendChild(credito);
// credito.setAttribute("class", "white2");