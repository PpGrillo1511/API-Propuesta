import ClienteDAO from "../dao/clientes.dao.js";

const clientesController = {};

export const getAllClientes = (req, res) => {
    ClienteDAO.getAll()
        .then(clientes => {
            res.render('../src/views/AgregarCliente.ejs', { clientes });
        })
        .catch(err => res.json({
            status: "Servidor no disponible"
        }));
}

export const getOneCliente = (req, res) => {
    const correo = req.params.correo;
    ClienteDAO.getOne(correo)
        .then(result => {
            if (result) {
                res.render("../src/views/editCliente.ejs", { cliente: result });
            } else {
                res.json({
                    status: "Cliente no encontrado"
                });
            }
        })
        .catch(err => res.json({
            status: "Servidor no disponible"
        }));
}

export const insertOneCliente = (req, res) => {
    ClienteDAO.insertOne(req.body)
        .then(result => res.redirect('/clientes/mostrar'))
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const updateOneCliente = (req, res) => {
    const correo = req.params.correo;
    const updatedCliente = req.body;

    ClienteDAO.updateOne(correo, updatedCliente)
        .then(result => {
            if (result) {
                res.redirect(`/clientes/mostrar`);
            } else {
                res.json({
                    status: "Cliente no encontrado"
                });
            }
        })
        .catch(err => res.json({
            status: "Servidor no disponible"
        }));
}

export const deleteOneCliente = (req, res) => {
    const correo = req.params.correo;

    ClienteDAO.deleteOne(correo)
        .then(result => {
            if (result) {
                res.redirect(`/clientes/mostrar`);
            } else {
                res.json({
                    status: "Cliente no encontrado"
                });
            }
        })
        .catch(err => res.json({
            status: "Servidor no disponible"
        }));
};

export const mostrarPaginaAgregarCliente = async (req, res) => {
    try {
        const clientes = await ClienteDAO.getAll();
        res.render('../src/views/AgregarCliente.ejs', { clientes });
    } catch (error) {
        res.json({ status: "Servidor no disponible" });
    }
};

export const mostrarPaginaCliente = async (req, res) => {
    try {
        const clientes = await ClienteDAO.getAll();
        res.render('../src/views/clientes.ejs', { clientes });
    } catch (error) {
        res.json({ status: "Servidor no disponible" });
    }
};
