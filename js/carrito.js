// Carrito
// #1 BASE DE DATOS
const db = [
  {
    id: 1,
    nombre: 'Caminadora',
    descripcion: 'Descripcion',
    precio: 49000.00,
    imagen: 'img/Caminadora.png',
    categoria: 'equipos electronicos',
    cantidad: 7
  },
  {
    id: 2,
    nombre: 'Pesas circulares (Par)',
    descripcion: 'Descripcion',
    precio: 1121.00,
    imagen: 'img/Pesas circulares.png',
    categoria: 'equipos metalicos',
    cantidad: 20
  },
  {
    id: 3,
    nombre: 'Pesas cuadradas',
    descripcion: 'descripcion',
    precio: 1500.00,
    imagen: 'img/Pesas hexagonales.png',
    categoria: 'equipos metalicos',
    cantidad: 13
  },
  {
    id: 4,
    nombre: 'Prensa',
    descripcion: 'descripcion',
    precio: 26900.00,
    imagen: 'img/PrensaP.png',
    categoria: 'equipos metalicos',
    cantidad: 4
  },
  {
    id: 5,
    nombre: 'Discos olimpicos 10KG (Par)',
    descripcion: 'descripcion',
    precio: 1240.00,
    imagen: 'img/Discos-olimpico.png',
    categoria: 'equipos metalicos',
    cantidad: 16
  },
  {
    id: 6,
    nombre: 'Máquina Biomecanica',
    descripcion: 'descripcion',
    precio: 19000.00,
    imagen: 'img/Maquina Biomecanica.png',
    categoria: 'equipos metalicos',
    cantidad: 20
  },
  {
    id: 7,
    nombre: 'Banco plano para pecho',
    descripcion: 'descripcion',
    precio: 1250.00,
    imagen: 'img/Gym-Machine-PNG-Image.png',
    categoria: 'equipo metalico',
    cantidad: 14
  },
  {
    id: 8,
    nombre: 'Caminadora escaladora',
    descripcion: 'descripcion',
    precio: 50000.00,
    imagen: 'img/caminadoraescalera.png',
    categoria: 'equipos electronicos',
    cantidad: 18
  },
  {
    id: 9,
    nombre: 'Bicicleta eléctrica',
    descripcion: 'descripcion',
    precio: 18000.00,
    imagen: 'img/bici.png',
    categoria: 'equipos electronicos',
    cantidad: 15
  }
]

// #2 Pintar los productos en el DOM
const productos = db

function pintarProductos() {
  for (let { id, nombre, precio, cantidad } of productos) {
    console.log(id, nombre, 'price', precio, 'qty:', cantidad)
  }
}

console.log('#1 pintando productos')
pintarProductos()

// #3 Carrito
let carrito = []

console.log('#Creando el carrito')

// #4 agregar al carrito
// De los productos que estan en la base de datos, buscar el producto en su propiedad ID es igual al ID que se se le esta otorgando 
function agregarCarrito(id, cantidad = 1) {
  const productoEncontrado = productos.find((p) => p.id === id)

  if (productoEncontrado && productoEncontrado.cantidad > 0) {
    const articuloEncontrado = carrito.find((p) => p.id === id)

    if (articuloEncontrado) {
      if (checarStock(id, cantidad + articuloEncontrado.cantidad)) {
        articuloEncontrado.cantidad++
      } else {
        window.alert('No hay stock suficiente')
      }
    } else {
      carrito.push({ id: productoEncontrado.id, cantidad })
    }
  } else {
    window.alert('Producto agotado')
  }
}

console.log('Agregando productos')
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(2)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)

function checarStock(id, cantidad) {
  const producto = productos.find((p) => p.id === id)

  return producto.cantidad - cantidad >= 0
}

// #5 remover articulos
function removerDelCarrito(id, cantidad = 1) {
  const articulo = carrito.find((p) => p.id === id)

  if (articulo && articulo.cantidad - cantidad > 0) {
    articulo.cantidad--
  } else {
    carrito = carrito.filter((p) => p.id !== id)
  }
}

console.log('Removiendo uno por uno del carrito')
removerDelCarrito(1)

// #6 Eliminar del carrito
function eliminarDelCarrito(id) {
  console.log(id)
  const articulo = carrito.find((p) => p.id === id)
  const findIndex = carrito.indexOf(articulo)

  carrito.splice(findIndex, 1)
}

console.log('Eliminando un producto del carrito')
eliminarDelCarrito(5)

// #7 Contar Articulos
function contadorDeArticulos() {
  let suma = 0

  for (let articulo of carrito) {
    suma += articulo.cantidad
  }

  return suma
}

// #8 El total
function obtenerTotal() {
  let suma = 0

  for (let articulo of carrito) {
    const producto = productos.find(p => p.id === articulo.id)

    suma += producto.precio * articulo.cantidad
  }

  return suma
}

// #9 Limpiar carrito
function limpiarCarrito() {
  carrito = []
}

// limpiarCarrito()

// #10 Comparar
function comprar() {
  for (let articulo of carrito) {
    const producto = productos.find(p => p.id === articulo.id)

    producto.cantidad -= articulo.cantidad
  }
  console.log('Productos actualizados')
  pintarProductos()
}


console.log('#Carrito:', carrito)
console.log('Total a pagar:', obtenerTotal())
console.log('Cantidad de articulos agregados al carrito:', contadorDeArticulos())

comprar()