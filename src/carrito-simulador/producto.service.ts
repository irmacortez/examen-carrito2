import { Producto } from './interfaces';

export class ProductoService {
  constructor(private productos: Producto[]) {}

  obtenerProducto(id: number): Producto | undefined {
    return this.productos.find(p => p.id === id);
  }

  validarProducto(producto: Producto | undefined, cantidad: number): string | null {
    if (!producto) return '❌ PRODUCTO NO ENCONTRADO';
    if (producto.stock === 0) return '❌ PRODUCTO SIN STOCK';
    if (cantidad <= 0) return '❌ CANTIDAD INVÁLIDA';
    if (cantidad > producto.stock) return `❌ ERROR DE STOCK. Disponible: ${producto.stock}, Solicitado: ${cantidad}`;
    return null;
  }
}

