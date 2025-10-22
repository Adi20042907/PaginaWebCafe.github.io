// 📚 Catálogo de libros de Fyodor Dostoievsky
const productos = [
  {
    nombre: 'El jugador',
    descripcion: 'Una novela intensa sobre la adicción al juego y las pasiones humanas.',
    precio: 249.00,
    imagen: 'img/img2.jpg'
  },
  {
    nombre: 'Crimen y castigo',
    descripcion: 'Explora la culpa, el castigo y la redención a través de Raskólnikov.',
    precio: 299.00,
    imagen: 'img/img3.jpg'
  },
  {
    nombre: 'Noches Blancas',
    descripcion: 'Una historia breve y emotiva sobre el amor, la soledad y los sueños, ambientada en las noches de San Petersburgo.',
    precio: 349.00,
    imagen: 'img/img1.jpg'
  },
  {
    nombre: 'Los hermanos Karamazov',
    descripcion: 'Novela profunda sobre fe, culpa y los lazos familiares entre tres hermanos y su padre.',
    precio: 349.00,
    imagen: 'img/img4.jpg'
  }
 
];


// 🎯 Punto de inserción en el HTML
const catalogo = document.getElementById('catalogo');


// 🧱 Función para crear cada tarjeta de libro
function crearTarjetaProducto(producto) {
  const card = document.createElement('div');
  card.className = 'producto-card';


  const imagen = document.createElement('img');
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;


  const titulo = document.createElement('h2');
  titulo.textContent = producto.nombre;


  const descripcion = document.createElement('p');
  descripcion.textContent = producto.descripcion;


  const precio = document.createElement('span');
  precio.className = 'precio';
  precio.textContent = `$${producto.precio.toFixed(2)}`;


  const boton = document.createElement('button');
  boton.className = 'btn-comprar';
  boton.textContent = 'Comprar';


  // 🧩 Ensamblar la tarjeta
  card.appendChild(imagen);
  card.appendChild(titulo);
  card.appendChild(descripcion);
  card.appendChild(precio);
  card.appendChild(boton);


  return card;
}


// 🖼️ Renderizar todas las tarjetas en el catálogo
function renderizarCatalogo() {
  productos.forEach(producto => {
    const tarjeta = crearTarjetaProducto(producto);
    catalogo.appendChild(tarjeta);
  });
}


// 🚀 Activar el catálogo al cargar la página
window.onload = renderizarCatalogo;



