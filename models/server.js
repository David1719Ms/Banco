import express, { json } from 'express';
import dbConnect from '../database/config.js';
import '../database/config.js';

import cuentasRouter from '../routes/cuentaRoute.js';
import { getCuenta, postCuenta, putCuenta, deleteCuenta } from '../controllers/cuentaController.js';

class Server {
    constructor(){
        this.app = express();
        this.listen();
        this.dbConnection(); 
        this.pathCuentas = '/api/cuenta';
        this.route();
    }

    async dbConnection(){  //llamar la coneccion de la base de datos
        await dbConnect();
    }
    route(){
        this.app.use(json())
        this.app.use(this.pathCuentas, cuentasRouter)
        //////////////////////////////////////////////////
        this.app.get(this.pathCuentas, getCuenta)
        this.app.post(this.pathCuentas, postCuenta)
        this.app.put(this.pathCuentas, putCuenta)
        this.app.delete(this.pathCuentas, deleteCuenta)

    }
    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('server is running')
        })
    }
}

export default Server; // exportar la clase server

