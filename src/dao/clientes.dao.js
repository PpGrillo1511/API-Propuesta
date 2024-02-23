import Cliente from "../models/clientes.model.js";

const ClienteDAO = {};

ClienteDAO.getAll = async () => {
    const clientes = await Cliente.find({});
    return clientes;
};

ClienteDAO.getOne = async (correo) => {
    const cliente = await Cliente.findOne({ correo: correo });
    return cliente;
};

ClienteDAO.insertOne = async (cliente) => {
    return await Cliente.create(cliente);
};

ClienteDAO.updateOne = async (correo, cliente) => {
    return await Cliente.findOneAndUpdate({ correo: correo }, cliente);
};

ClienteDAO.deleteOne = async (correo) => {
    return await Cliente.findOneAndDelete({ correo: correo });
};

export default ClienteDAO;
