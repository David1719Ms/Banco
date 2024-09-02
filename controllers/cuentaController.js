import cuenta from '../models/cuenta.js'

// GET /cuenta # Lista de todas las cuentas
export async function getCuenta(req,res) {
    const account = await cuenta.find()
    res.json(account)
}

// POST /cuenta # Crear una nueva cuenta
export async function postCuenta(req,res) {
    let msg = 'account inserted'
    const body =req.body
    try{
        const accountt = new cuenta(body)
        await accountt.save()
    }catch(error){
        msg = error
    }
    res.json({msg:msg})
}

// export async function postCuenta(req,res){
//     const body = req.body;
//     try{
//         const cuent = new cuenta(body);
//         //bcrypt
        // cuent.password = await bcrypt.hash(body.password,10);
//         await user.save();
//         res.status(200).json({msg:'user created successfully'});
//     }catch (error){
//         res.status(500).json({msg:error});
//     }
// }



// PUT /cuenta/{id} # Actualizar una cuenta específica

// export async function putCuenta(req, res)  {
//     let msg = 'account updated'
//     // const {numeroCuenta,fechaApertura, saldo, claveAcceso}=req.body
//     const id = req.params.id
//     try{
//         // await cuenta.findByIdAndUpdate({numeroCuenta:numeroCuenta,documentoCliente:documentoCliente, fechaApertura:fechaApertura, saldo:saldo, claveAcceso:claveAcceso})
//         await cuenta.findByIdAndUpdate(id)
//     }catch(error){
//         msg = error
//     }
//     res.json({msg:msg})
// }

export async function putCuenta(req,res) {
    const {numeroCuenta, documentoCliente, fechaApertura, saldo, claveAcceso} = req.body
    let msg = 'Cuenta Update'
    try {
        const result = await cuenta.findOneAndUpdate(
            { numeroCuenta: numeroCuenta },
            { documentoCliente: documentoCliente, fechaApertura: fechaApertura, saldo: saldo, claveAcceso: claveAcceso },
            { new: true } // Devuelve el documento actualizado
        );

        if (!result) {
            msg = 'Not found';
        }
    } catch (error) {
        msg = error.message; // Utiliza el mensaje de error
    }
    res.json({ msg: msg });
}


// DELETE /cuenta/{id} # Eliminar un cuenta específico

// export async function deleteCuenta (req,res) {
//     let msg = 'cuenta deleted'
//     id = req.params.id
//     let Saldo = cuenta.req.params.saldo
//     if (Saldo == 0) {
//         try{
//             await celda.findOneAndDelete({_id:id})
//         }catch(error){
//             msg = 'there was an error deleting'
//         }       
//     }
//     res.json({msg:msg})
// }

export async function deleteCuenta(req,res) {
    let msg = 'Export deleted'
    let id = req.params.id
    if (saldo == 0) {
        try{
            await cuenta.findByIdAndDelete({_id:id})
        }catch (error){
            msg = 'Problems with the elimination'
        }
        res.json({msg:msg})
    }

}


