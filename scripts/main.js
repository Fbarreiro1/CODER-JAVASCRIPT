/**
 * Uso Bootstrap para estilizar el HTML
  * Uso Sweet Alert para estilizar las alertas
  * Recomendación semanal: Utilizo la Books API del New York Times para agarrar el libro top 1 de la semana. escribo en html titulo y autor
 * Usuario y cambiar usuario: Si el usuario ingresa el nombre en la caja de texto se captura el input y se lo escribe en la página.
 * Si ya hay datos guardados en Local Storage se pregunta si quiere usar esos datos. Si quiere se lo escribe en la página, si no quiere se inicia sin los datos y los tiene que cargar en la caja de texto.
 * Agregar libros:  se pide que el usuario ingrese  los nombres de los libros y los precios. 
 * Cada libro y precio conforman un nuevo objeto Libro que ingresa al array cantLibros 
 * Se arma una lista en html con los libros y precios usando DOM y eventos.
 * Libros guardados: Si ya hay datos de libros guardados en local Storage se muestra un alert con los libros y precios.
 * Si el usuario quiere mantener esos datos confirma y listo, si no puede cargar los nuevos.
 */

//////////////////////////
let formNombre = document.getElementById("formNombre");
let user = localStorage.getItem("nombre");
let form = document.getElementById("formLibros");
let nombreLibro = document.getElementById("nombreLibro");
let precioLibro = document.getElementById("precioLibro");
let lista = document.getElementById("listaLibros")
let guardados = document.getElementById("guardados");
const listaLibros = [];
let cantLibro = 4;
let historial = localStorage.getItem("librosGuardados");
let btnRecomendar = document.getElementById("getBooks");
let recomendacion = document.getElementById("recomendacion");

class Libro {
  constructor(compra, precio) {
    this.compra = compra.toLowerCase();
    this.precio = parseFloat(precio);
  }
}

if (user == null || user == "undefined") {
  let nuevoDiv= document.createElement("div")
      nuevoDiv.innerHTML = `<input type = "text" id="nombreUser" placeholder="nombre"/>
	  <button> Enviar </button>`;
      formNombre.append(nuevoDiv)
  formNombre.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("nombre", nombreUser.value);
   let nuevoH1 = document.createElement("h1")
   nuevoH1.innerHTML = `¡Hola ${nombreUser.value}!`;
    nombreH1.append(nuevoH1)
  })
}
else {
  Swal.fire("¡Hola " + user + "!");
  let nuevoH1 = document.createElement("h1")
   nuevoH1.innerHTML = `¡Hola ${user}!`;
    nombreH1.append(nuevoH1)
  let cambiarUser = document.createElement("div")
  cambiarUser.innerHTML = `<input class="form-control" type = "text" id="cambioUser" placeholder="Cambiar usuario"/>
	  <button class="btn text-black btn-outline-primary mt-1"><h4> Cambiar</h4>  </button>`;
   formNombre.append(cambiarUser)
      
  formNombre.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("nombre", cambioUser.value);
   let nuevoH1 = document.createElement("h1")
   nuevoH1.innerHTML = `Hola ${cambioUser.value}`;
    nombreH1.append(nuevoH1)
    
})
}
guardados.onclick = () => {
    if (historial != null) {
    array = JSON.parse(historial);
    let salida = `La vez pasada usted guardó estos libros: \n`;
    for (let i = 0; i < array.length; i++) {
      salida = salida + (i + 1) + ". " + array[i].compra + " $" + array[i].precio + `\n`;
      Swal.fire(salida).then(() => {
        Swal.fire({
  title: "¿Quiere quedarse con los libros guardados o borrarlos y guardar nuevos?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Quedarme con los libros guardados',
  cancelButtonText: 'Borrarlos y guardar nuevos'
}).then((result) => {
  if (!result.isConfirmed) {
    localStorage.removeItem("librosGuardados");
    Swal.fire("Su historial de libros se ha borrado. Por favor cargue nuevos")
    
  }
  else if (result.isConfirmed) {
    for (let libro of array) {
          let li = document.createElement("li")
          li.innerHTML = `<li class="list-group-item active"> Libro: ${libro.compra}. Precio: ${libro.precio} pesos. </li><br>`;
          lista.appendChild(li)
        }
    
  }
})
      }
      
    )}
    
    }
else {
  Swal.fire("No tiene libros guardados. Agregue libros y recordaremos su elección ")
}}
    
  btnRecomendar.addEventListener("click", () => {
            let key = "ExykLl7MFfhTZSBq2QwA9dSGmOyks0Y5";
             
  let url = "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=ExykLl7MFfhTZSBq2QwA9dSGmOyks0Y5"
                fetch(url)
                    .then((data) => {
                        return data.json()
                }).then((libros) => {
                  let titulo = libros.results.lists[0].books[0].title;
                  let autor = libros.results.lists[0].books[0].author;
                  recomendacion.innerHTML = `<h3>Recomendación de la semana: <br> Libro: ${titulo} <br> Autor: ${autor}<h3>`;
        
            }).catch((err) => {
        Swal.fire("Algo salió mal. Por favor pruebe en otro momento")
      })
  }) 

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nombreLibro.value && precioLibro.value ) {
    if (!isNaN(parseFloat(precioLibro.value))) {
      if(listaLibros.length <4 ) {
      listaLibros.push(new Libro(nombreLibro.value, precioLibro.value));
      localStorage.setItem("librosGuardados", JSON.stringify(listaLibros));
      let nuevaLi = document.createElement("li")
      nuevaLi.innerHTML = `<li class="list-group-item active"> Libro: ${nombreLibro.value}. Precio: ${precioLibro.value} pesos. </li><br>`;
      lista.append(nuevaLi)}
      else {
        Swal.fire("Recuerde que la máxima cantidad permitida en una sola compra es de 4 libros.")
      }
      
    }
    else {
      Swal.fire("El precio debe ser un número")
    }
  } else {
    Swal.fire("Complete ambos campos")
  }
})