import { Producto } from './interfaces';
export declare class ProductoService {
    private productos;
    constructor(productos: Producto[]);
    obtenerProducto(id: number): Producto | undefined;
    validarProducto(producto: Producto | undefined, cantidad: number): string | null;
}
