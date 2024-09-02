import router from 'express'
import { getCuenta, postCuenta, putCuenta, deleteCuenta} from '../controllers/cuentaController.js';



const cuentasRouter = router();

cuentasRouter.get('/',getCuenta)
cuentasRouter.post('/',postCuenta)
cuentasRouter.put('/:id',putCuenta)
cuentasRouter.delete('/:id',deleteCuenta)



export default cuentasRouter;