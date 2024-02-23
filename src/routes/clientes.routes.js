import { Router } from "express";
import { mostrarPaginaAgregarCliente, mostrarPaginaCliente, deleteOneCliente, updateOneCliente, insertOneCliente, getAllClientes, getOneCliente } from "../controllers/clientes.controller.js";

const router = Router();


router.get('/agregar', mostrarPaginaAgregarCliente);

router.get('/mostrar', mostrarPaginaCliente);

router.get('/deleteOneCliente/:correo', deleteOneCliente);

// Ruta para insertar un cliente
router.post('/insertOne', insertOneCliente);

// Ruta para actualizar un cliente
router.post("/editCliente/:correo", updateOneCliente)

// Ruta para obtener todos los clientes
router.get('/', getAllClientes);

// Ruta para obtener un solo producto por correo
router.get('/:correo', getOneCliente);


export default router;
