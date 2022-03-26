
// Se pide que el usuario ingrese la cantidad de libros que va a comprar. SI está entre 1 y 4 se le pide que ingrese los nombres de los libros y los precios. Cada libro y precio conforman un nuevo objeto Libro que ingresa al array cantLibros y además se los escribe en la pagina con document.write.

class Libro {
	constructor(nombre,precio) {
	  this.nombre = nombre.toLowerCase();
	  this.precio = parseFloat(precio);
	}
  }
  const listaLibros = [];
  
  			let cantLibro = parseInt(prompt("Ingrese cantidad de libros "));
			
			if (cantLibro == 0 || cantLibro < 0) {
				alert("Por favor, ¡Compre algo!") }

			else if (cantLibro >= 5) {
				alert("Recuerde que la máxima cantidad permitida en una sola compra es de 4 libros.")	
			
			}
		
else {
do {
    let compra = prompt("¿Qué libro lleva?");
  let precio = parseFloat(prompt("Ingresar precio del libro "));
	listaLibros.push(new Libro(compra,precio));
	}
	while(listaLibros.length < cantLibro);

console.log(listaLibros)

for (let libro of listaLibros) {
  
  document.write( "Libro:  " + libro.nombre + ". Precio: " + libro.precio + " pesos. <br>")
}
}
// funcion que calcula el precio total de los libros. Si se compran más de 3, hay un descuento del 15% sobre el total
total = 0;
const calcularPrecio = arr => {
  for (let l of arr) { 
  total += l.precio; }
  if (arr.length > 3) {
	total = total - (total*15) /100;
}
  
  return console.log("Total a pagar: " + total);
 	
  }

// calcularPrecio(listaLibros)
