/**
 * Agregué Bootstrap y modifiqué el HTML
 * Uso Sweet Alert para estilizar las alertas
 * Si el usuario ingresa el nombre en la caja de texto se captura el input y se lo escribe en la página.
 * Si ya hay datos guardados en Local Storage se pregunta si quiere usar esos datos. Si quiere se lo       * escribe en la página, si no quiere se inicia sin los datos y los tiene que cargar en la caja de texto.
 * Al clickear el botón subir compra se pide que el usuario ingrese la cantidad de libros que va a comprar. * Si está entre 1 y 4 se le pide que ingrese los nombres de los libros y los precios. 
 * Cada libro y precio conforman un nuevo objeto Libro que ingresa al array cantLibros 
 * Se arma una lista en html con los libros y precios usando DOM y eventos.
 * * Si ya hay datos de libros guardados en local Storage se muestra un alert con los libros y precios
 * Si el usuario quiere mantener esos datos confirma y listo, si no puede cargar los nuevos
 */

//////////////////////////7
let user = localStorage.getItem("nombre");
if (user == null || user == "undefined") {

  let saludo = document.getElementById("saludo");
  saludo.addEventListener("input", e => {
    let usuario = saludo.value
  })
  let usuario = saludo.addEventListener('keyup', e => {
    if (e.keyCode === 13) {

      let nombreH3 = document.createElement("h3")
      nombreH3.innerHTML = "¡Hola " + saludo.value + "!";
      document.getElementById("form").insertBefore(nombreH3, saludo);
      localStorage.setItem("nombre", saludo.value);
    }
    localStorage.setItem("nombre", saludo.value);
  })

} else {
  let nombreH3 = document.createElement("h3")
  nombreH3.innerHTML = "¡Hola " + user + "!";
  document.getElementById("form").insertBefore(nombreH3, saludo);
  let cambiar = prompt("La última vez ingresaste como " + user + `\n` + "¿Querés cambiar tu nombre de usuario? s/n")

  if (cambiar.toLowerCase() == "s" || cambiar.toLowerCase() == "si") {
    nombreH3.remove()
    let saludo = document.getElementById("saludo");
    saludo.addEventListener("input", e => {
      let usuario = saludo.value
    })
    let usuario = saludo.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        let nombreH3 = document.createElement("h3")
        nombreH3.innerHTML = "¡Hola " + saludo.value + "!";
        document.getElementById("form").insertBefore(nombreH3, saludo);
        localStorage.setItem("nombre", saludo.value);
      }
    })
  } else if (cambiar.toLowerCase() == "n" || cambiar.toLowerCase() == "no") {
    Swal.fire("Ok, tu nombre de usuario es " + user)
  } else {
    Swal.fire("Por favor elegir si o no")
  }
}

noCompra.onclick = function () {
  Swal.fire("Por favor, ¡Compre algo!");
};
class Libro {
  constructor(nombre, precio) {
    this.nombre = nombre.toLowerCase();
    this.precio = parseFloat(precio);
  }
}
let historial = localStorage.getItem("librosGuardados");
compra.onclick = () => {
  if (historial != null) {
    array = JSON.parse(historial);
    let salida = `La vez pasada usted guardó estos libros: \n`;
    for (let i = 0; i < array.length; i++) {
      salida = salida + (i + 1) + ". " + array[i].nombre + " $" + array[i].precio + `\n`;
    }
    
    let pregunta = prompt("¿Quiere borrar los libros guardados y guardar nuevos? si/no")
    if (pregunta.toLowerCase() == "s" || pregunta.toLowerCase() == "si") {
      localStorage.removeItem("librosGuardados");
      const listaLibros = [];
      let cantLibro = 0;
      total = 0;
      cantLibro = parseInt(prompt("Ingrese cantidad de libros "));

      if (cantLibro == 0 || cantLibro < 0) {
        Swal.fire("Por favor, ¡Compre algo!")
      } else if (cantLibro >= 5) {
        Swal.fire("Recuerde que la máxima cantidad permitida en una sola compra es de 4 libros.")

      } else {
        localStorage.setItem("cantidad", cantLibro);
        do {
          let compra = prompt("¿Qué libro lleva?");
          let precio = parseFloat(prompt("Ingresar precio del libro "));
          listaLibros.push(new Libro(compra, precio));
        }
        while (listaLibros.length < cantLibro);

        console.log(listaLibros)
        localStorage.setItem("librosGuardados", JSON.stringify(listaLibros));


        for (let libro of listaLibros) {
          let li = document.createElement("li")
          li.innerHTML = "Libro:  " + libro.nombre + ". Precio: " + libro.precio + " pesos. <br>";
          document.getElementById("lista").appendChild(li)
        }
      }
    } else if (pregunta.toLowerCase() == "n" || pregunta.toLowerCase() == "no") {
      Swal.fire("¡Guardamos su elección!")
      Swal.fire(salida)
    } else {
      Swal.fire("Por favor elija si o no")
    }
  } 
}