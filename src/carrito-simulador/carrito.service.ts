import { ItemCarrito, Producto } from './interfaces';

export class CarritoService {
  private carrito: ItemCarrito[] = [];

  agregar(producto: Producto, cantidad: number): string {
    const existente = this.carrito.find(i => i.productoId === producto.id);
    if (existente) {
      existente.cantidad += cantidad;
      existente.subtotal = existente.precio * existente.cantidad;
    } else {
      this.carrito.push({
        productoId: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad,
        subtotal: producto.precio * cantidad,
      });
    }
    return `✅ PRODUCTO AGREGADO\n${producto.nombre} x${cantidad} agregado al carrito\nSubtotal: $${producto.precio * cantidad}`;
  }

  quitar(id: number): string {
    const index = this.carrito.findIndex(i => i.productoId === id);
    if (index === -1) return '❌ PRODUCTO NO ENCONTRADO EN CARRITO';
    this.carrito.splice(index, 1);
    return '✅ PRODUCTO ELIMINADO DEL CARRITO';
  }

  modificarCantidad(id: number, nuevaCantidad: number): string {
    const item = this.carrito.find(i => i.productoId === id);
    if (!item) return '❌ PRODUCTO NO ENCONTRADO EN CARRITO';
    if (nuevaCantidad <= 0) return '❌ CANTIDAD INVÁLIDA';
    item.cantidad = nuevaCantidad;
    item.subtotal = item.precio * nuevaCantidad;
    return `✅ CANTIDAD ACTUALIZADA: ${item.nombre} x${nuevaCantidad}`;
  }

  calcularTotales(): string {
    const subtotal = this.carrito.reduce((acc, i) => acc + i.subtotal, 0);
    const descuento = this.calcularDescuento(subtotal);
    const iva = Math.round((subtotal - descuento) * 0.21);
    const total = subtotal - descuento + iva;

    const detalle = this.carrito.map(i => `- ${i.nombre} x${i.cantidad} = $${i.subtotal}`).join('\n');

    return `️ CARRITO ACTUAL\n${detalle}\n\nSubtotal: $${subtotal}\nDescuento: -$${descuento}\nIVA (21%): $${iva}\nTOTAL: $${total}`;
  }

  private calcularDescuento(subtotal: number): number {
    if (subtotal > 500000) return Math.round(subtotal * 0.08);
    if (subtotal > 100000) return Math.round(subtotal * 0.05);
    return 0;
  }

  mostrarEstado(): string {
    if (this.carrito.length === 0) return '🛒 Carrito vacío';
    const total = this.carrito.reduce((acc, i) => acc + i.subtotal, 0);
    return `️ ${this.carrito.length} productos en el carrito - Total: $${total}`;
  }
}

