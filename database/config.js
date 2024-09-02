import { connect } from 'mongoose';

const dbConnection = async () => {
    try {
        await connect(process.env.MONGO_CNN);
        console.log('conect to server database');
    } catch (error){
        console.error('error connection to mongodb', error);
        
    }
}

export default dbConnection; //exportar la funcion dbconnection