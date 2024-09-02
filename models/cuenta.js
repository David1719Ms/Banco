import { model, Schema } from 'mongoose';

const cuentaSchema = new Schema({
    numeroCuenta: { type: String, unique: true, required: true },
    documentoCliente: { type: String, unique: true, required: true },
    fechaApertura: { type: Date },
    saldo: {type: Number},
    claveAcceso: { type: String, maxlength: 4, minlenght: 4, timestamp: true, versionkey: false },
    
});



export default model('Cuenta', cuentaSchema, 'Cuenta');

