// funcion que calcula el precio total de los libros. Si se compran más de 3, el 4to tiene descuento del 50%
const calcularPrecio = (libro1 = 0,libro2 = 0,libro3 = 0,libro4 = 0) => {
	if (libro4 != 0) {
		libro4 = (libro4 * 50)/ 100; }
	return precio = parseFloat(libro1 + libro2 + libro3 + libro4);
}

// calcula el precio total de los libros que compra el usuario. Acepta máximo 4 libros y hay descuento si hay al menos 2 del mismo género
			let cantLibro = parseInt(prompt("Ingrese cantidad de libros "));
			let precioTotal = 0;
			if (cantLibro == 0 || cantLibro < 0) {
				alert("Por favor, ¡Compre algo!") }

			else if (cantLibro >= 5) {
				alert("Recuerde que la máxima cantidad permitida en una sola compra es de 4 libros.")	
			
			}
			else {
			let genero = prompt("¿Lleva 2 o más libros del mismo género?");
			
				for (let k = 1; k <= cantLibro; k++) {
					let str = parseFloat(prompt("INGRESAR PRECIO DEL LIBRO " + k));
					precioTotal += str;
							} 
			if(genero.toLowerCase() == "si") {
				precioTotal -= (precioTotal *15)/100;
			}
				alert("El precio total es de " + precioTotal + " pesos");
		};
		
		
		
