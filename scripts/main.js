/**
 * Si el usuario ingresa el nombre en la caja de texto se captura el input y se lo escribe en la página.
 * Al clickear el botón subir compra se pide que el usuario ingrese la cantidad de libros que va a comprar. * Si está entre 1 y 4 se le pide que ingrese los nombres de los libros y los precios. 
 * Cada libro y precio conforman un nuevo objeto Libro que ingresa al array cantLibros 
 * Se arma una lista en html con los libros y precios usando DOM y eventos.
 * * Al clickear el botón calcular precio se calcula el total y se puede aplicar un descuento.
*/
let saludo = document.getElementById("saludo");
saludo.addEventListener("input", e => {
  let hola = saludo.value
})
let hola = saludo.addEventListener('keyup', e => {
  if (e.keyCode === 13) {
    let h3 = document.createElement("h3")
    h3.innerHTML = "¡Hola " + saludo.value + "!";
    document.getElementById("form").insertBefore(h3, saludo);

  }
})
noCompra.onclick = function () {
  alert("Por favor, ¡Compre algo!");
};
class Libro {
  constructor(nombre, precio) {
    this.nombre = nombre.toLowerCase();
    this.precio = parseFloat(precio);
  }
}
const listaLibros = [];
let cantLibro = 0;
total = 0;

compra.onclick = () => {

  cantLibro = parseInt(prompt("Ingrese cantidad de libros "));

  if (cantLibro == 0 || cantLibro < 0) {
    alert("Por favor, ¡Compre algo!")
  } else if (cantLibro >= 5) {
    alert("Recuerde que la máxima cantidad permitida en una sola compra es de 4 libros.")

  } else {
    do {
      let compra = prompt("¿Qué libro lleva?");
      let precio = parseFloat(prompt("Ingresar precio del libro "));
      listaLibros.push(new Libro(compra, precio));
    }
    while (listaLibros.length < cantLibro);

    console.log(listaLibros)


    for (let libro of listaLibros) {
      let li = document.createElement("li")
      li.innerHTML = "Libro:  " + libro.nombre + ". Precio: " + libro.precio + " pesos. <br>";
      document.getElementById("lista").appendChild(li)
    }

  }

};

calcular.onclick = () => {
  total = 0;
  if (cantLibro <= 0 || cantLibro >= 5) {
    alert("Recuerde completar correctamente su compra")
  } else {

    for (let l of listaLibros) {
      total += l.precio;
    }
    if (listaLibros.length > 3) {
      total = total - (total * 15) / 100;
    }
    let h2 = document.createElement("h2")
    h2.innerHTML = "Total a pagar: " + total;
    document.body.appendChild(h2);

  }
}