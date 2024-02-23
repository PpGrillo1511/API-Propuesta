    import { Schema, model } from "mongoose";
    const productoSchema = new Schema({
        codigo_barras:{
            type:String,
            unique:true,
            required:true
        },
        descripcion:String,
        marca:String,
        precio:Number,
        costo:Number,
        stock:Number,
        fecha_expiracion:String,
        estatus:Number
    },{
        versionKey:false,
        timestamps:true
    })

    export default model('producto', productoSchema)