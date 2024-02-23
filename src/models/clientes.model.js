import { Schema, model } from "mongoose";

const clienteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: String,
    correo: {
        type: String,
        unique: true,
        required: true
    },
    telefono: String,
    direccion: String,
    puntos_fidelidad: {
        type: Number,
        default: 0
    },
    fecha_registro: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false,
    timestamps: true
});

export default model('Cliente', clienteSchema);
