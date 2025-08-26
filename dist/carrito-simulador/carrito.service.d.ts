import { Producto } from './interfaces';
export declare class CarritoService {
    private carrito;
    agregar(producto: Producto, cantidad: number): string;
    quitar(id: number): string;
    modificarCantidad(id: number, nuevaCantidad: number): string;
    calcularTotales(): string;
    private calcularDescuento;
    mostrarEstado(): string;
}
