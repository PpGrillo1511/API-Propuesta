import { Router } from "express";
import { 
    getAll, 
    getOne, 
    insertOne,
    updateOne,
    deleteOne,
    mostrarPaginaproductos,
    mostrarPaginaAgregarProducto,
    mostrarPaginaAcercade
} from "../controllers/productos.controller.js";

const router = Router();

// Ruta para obtener todos los productos
router.get('/', getAll);

// Ruta para obtener un solo producto por código de barras
router.get('/:codigo_barras', getOne);

// Ruta para insertar un producto
router.post('/', insertOne);

// Ruta para actualizar un producto
router.post("/:codigo_barras", updateOne)

// Ruta para eliminar un producto
router.get("/deleteOne/:codigo_barras", deleteOne);

router.get('/productos/mostrar', mostrarPaginaproductos);

router.get('/productos/agregar', mostrarPaginaAgregarProducto);

router.get('/acerca/de', mostrarPaginaAcercade);

export default router;
