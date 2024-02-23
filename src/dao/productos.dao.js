import Producto from "../models/productos.model.js";
const ProductoDAO={};
ProductoDAO.getAll=async()=>{
    const productos=await Producto.find({});
    return productos;
};
ProductoDAO.getOne=async(codigo_barras)=>{
    const productos=await Producto.findOne({codigo_barras:codigo_barras});
    return productos;
};
ProductoDAO.insertOne=async(producto)=>{
    return await Producto.create(producto);
};
ProductoDAO.updateOne=async(codigo_barras, producto)=>{
    return await Producto.findOneAndUpdate({codigo_barras:codigo_barras}, producto);
};

ProductoDAO.deleteOne=async(codigo_barras)=>{
    return await Producto.findOneAndDelete({codigo_barras:codigo_barras});
};


export default ProductoDAO;