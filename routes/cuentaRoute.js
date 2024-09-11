import router from 'express'
import { getCuenta, postCuenta, deleteCuenta, NuevoSaldo} from '../controllers/cuentaController.js';



const cuentasRouter = router();

cuentasRouter.get('/:estado',getCuenta)
// cuentasRouter.get('/:estado',getOneCuenta)
cuentasRouter.post('/',postCuenta)
// cuentasRouter.put('/:id',putCuenta)
cuentasRouter.delete('/:id',deleteCuenta)
cuentasRouter.put('/:numeroCuenta',NuevoSaldo)



export default cuentasRouter;