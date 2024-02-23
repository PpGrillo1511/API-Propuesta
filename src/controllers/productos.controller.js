import ProductDAO from "../dao/productos.dao.js";

const productsController = {};

export const getAll = (req, res) => {
    ProductDAO.getAll()
        .then(products => {
            res.render('../src/views/AgregarProducto.ejs', { products });
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const getOne = (req, res) => {
    const codigo_barras = req.params.codigo_barras;
    ProductDAO.getOne(codigo_barras)
        .then(result => {
            if (result) {
                res.render("../src/views/edit.ejs", { product: result });
            } else {
                res.json({
                    status: "Product not found"
                });
            }
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const insertOne = (req, res) => {
    ProductDAO.insertOne(req.body)
        .then(result => res.redirect('/productos/mostrar'))
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const updateOne = (req, res) => {
    const codigo_barras = req.params.codigo_barras;
    const updatedProduct = req.body;

    ProductDAO.updateOne(codigo_barras, updatedProduct)
        .then(result => {
            if (result) {
                res.redirect(`/productos/mostrar`);
            } else {
                res.json({
                    status: "Product not found"
                });
            }
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
}

export const deleteOne = (req, res) => {
    const codigo_barras = req.params.codigo_barras;

    ProductDAO.deleteOne(codigo_barras)
        .then(result => {
            if (result) {
                res.redirect(`/productos/mostrar`);
            } else {
                res.json({
                    status: "Product not found"
                });
            }
        })
        .catch(err => res.json({
            status: "Server unavailable"
        }));
};


export const mostrarPaginaproductos = async (req, res) => {
    try {
        const products = await ProductDAO.getAll();
        res.render('../src/views/productos.ejs', { products });
    } catch (error) {
        res.json({ status: "Server unavailable" });
    }
};

export const mostrarPaginaAgregarProducto = async (req, res) => {
    try {
        const products = await ProductDAO.getAll();
        res.render('../src/views/AgregarProducto.ejs', { products });
    } catch (error) {
        res.json({ status: "Server unavailable" });
    }
};

export const mostrarPaginaAcercade = async (req, res) => {
    try {
        const products = await ProductDAO.getAll();
        res.render('../src/views/acercade.ejs', { products });
    } catch (error) {
        res.json({ status: "Server unavailable" });
    }
};