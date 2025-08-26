import { Producto } from './interfaces';
import { ProductoService } from './producto.service';
import { CarritoService } from './carrito.service';

const productosDisponibles: Producto[] = [
  { id: 1, nombre: "Notebook Lenovo", precio: 450000, stock: 5, categoria: "tecnologia" },
  { id: 2, nombre: "Mouse Inalámbrico", precio: 15000, stock: 20, categoria: "tecnologia" },
  { id: 3, nombre: "Zapatillas Nike", precio: 80000, stock: 10, categoria: "deportes" },
  { id: 4, nombre: "Remera Algodón", precio: 12000, stock: 0, categoria: "ropa" }
];

const productoService = new ProductoService(productosDisponibles);
const carritoService = new CarritoService();

// Caso 1
console.log(carritoService.agregar(productoService.obtenerProducto(1)!, 1));
console.log(carritoService.agregar(productoService.obtenerProducto(2)!, 2));
console.log(carritoService.calcularTotales());

// Caso 2
console.log(productoService.validarProducto(productoService.obtenerProducto(1), 10));

// Caso 3
console.log(productoService.validarProducto(productoService.obtenerProducto(4), 1));

// Caso 4
console.log(productoService.validarProducto(productoService.obtenerProducto(999), 1));

// Caso 5
console.log(carritoService.agregar(productoService.obtenerProducto(3)!, 3));
console.log(carritoService.calcularTotales());

// Caso 6
console.log(carritoService.modificarCantidad(2, 3));
console.log(carritoService.calcularTotales());

// Caso 7
console.log(carritoService.quitar(1));
console.log(carritoService.calcularTotales());