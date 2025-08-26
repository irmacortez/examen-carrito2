"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoService = void 0;
class ProductoService {
    constructor(productos) {
        this.productos = productos;
    }
    obtenerProducto(id) {
        return this.productos.find(p => p.id === id);
    }
    validarProducto(producto, cantidad) {
        if (!producto)
            return '❌ PRODUCTO NO ENCONTRADO';
        if (producto.stock === 0)
            return '❌ PRODUCTO SIN STOCK';
        if (cantidad <= 0)
            return '❌ CANTIDAD INVÁLIDA';
        if (cantidad > producto.stock)
            return `❌ ERROR DE STOCK. Disponible: ${producto.stock}, Solicitado: ${cantidad}`;
        return null;
    }
}
exports.ProductoService = ProductoService;
