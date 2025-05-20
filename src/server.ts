import colors from 'colors';
import express from 'express';
import router from './router';
import db from './config/db';

// Conneting db

async function connectDB(){
    try {
        await db.authenticate();
        db.sync()
        console.log(colors.magenta("Conexión existosa"));
    } catch (error) {
        console.log(error);
        console.log(colors.red("Hubo un error al conectar la base de datos"));
        
    }
}

connectDB()
const server = express();

server.use(express.json())
server.use('/api/products', router)

export default server