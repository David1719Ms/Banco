import cuenta from '../models/cuenta.js'
import bcrypt from 'bcryptjs'
// const router = express.Router()

// GET /cuenta # Lista de todas las cuentas
export async function getCuenta(req,res) {
    const {estado} = req.params
    try{
        const status = await cuenta.find({ estado });
        if (status) {
            if (status === 'activo') {
                    msg = 'Estado activo:';
                } 
            } else if (status === 'inactivo') {
                msg = 'Estado inactivo:';
            } else {
                msg = 'Error';
            }
            return res.status(200).json({status});
    } catch (error) {
        res.status(500).json({ error });
    }
        
    }
    
// export async function getOneCuenta(req, res){
//     try{
//     const status = await cuenta.find({ estado });
//     if (status) {
//         if (option == 'activo') {
//                 msg = 'Estado activo';
//             } 
//         } else if (option === 'inactivo') {
//             msg = 'Estado inactivo';
//         } else {
//             msg = 'Error';
//         }
//         await status.save();
//         return res.status(200).json({ msg });
// } catch (error) {
//     msg = 'Error';
// }

// res.status(500).json({ msg });

// }
// POST /cuenta # Crear una nueva cuenta
export async function postCuenta(req,res) {
    let msg = 'account inserted'
    const body =req.body
    try{
        const accountt = new cuenta(body)
        accountt.claveAcceso = await bcrypt.hash(body.claveAcceso, 4)
        await accountt.save()
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}


export async function NuevoSaldo(req, res) {
    const { numeroCuenta, dinero, opcion } = req.body;
    let msg = '';

    if (dinero <= 0) {
        return res.status(400).json({ msg: 'El monto debe ser positivo' });
    }

    try {
        const cuentaO = await cuenta.findOne({ numeroCuenta });
        if (cuentaO) {
            if (opcion == 'retirar') {
                if (cuentaO.saldo >= dinero) {
                    cuentaO.saldo -= dinero;
                    msg = 'Dinero retirado';
                } else {
                    msg = 'Saldo insuficiente';
                }
            } else if (opcion === 'consignar') {
                cuentaO.saldo += dinero;
                msg = 'Dinero consignado';
            } else {
                msg = 'Error';
            }
            await cuentaO.save();
            return res.status(200).json({ msg });
        } else {
            msg = 'Numero de cuenta no existe';
        }
    } catch (error) {
        msg = 'Error';
    }

    res.status(500).json({ msg });
}


export async function deleteCuenta(req, res) {
    const id = req.params.id;
    let msg = 'Cuenta eliminada';

    try {
        const cuentaToDelete = await cuenta.findById(id);
        if (cuentaToDelete.saldo > 0) {
            await cuenta.findByIdAndDelete(id);
        } else {
            msg = 'La cuenta no puede eliminarse por saldo insuficiente.';
        }
    } catch (error) {
        msg = 'Problemas al eliminar la cuenta';
    }

    res.json({ msg });
}


