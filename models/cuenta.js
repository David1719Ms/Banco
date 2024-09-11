import { model, Schema } from 'mongoose';

const cuentaSchema = new Schema({
    numeroCuenta: { type: String, unique: true, required: true },
    documentoCliente: { type: String, unique: true, required: true },
    fechaApertura: { type: Date },
    saldo: {type: Number},
    claveAcceso: { type: String, maxlength: 100, minlenght: 4},
    observaciones: {type: String},
    estado: {type: String}
    
},
{
 versionkey: false 
}
);



export default model('Cuenta', cuentaSchema, 'Cuenta');

