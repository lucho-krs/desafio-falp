import cors from 'cors';
import express, { Application } from 'express';
import { AppDataSource } from '../db/data-source';

import userRoutes from '../routes/user.route';
import addressRoutes from '../routes/address.route';
import { errorHandler } from '../middleware/handleError';
import logger from '../middleware/logger';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users',
        address: '/api/address',
    };

    constructor() {

        this.app = express();
        this.port = process.env.PORT || '8000';

        // Metodos iniciales
        this.dbConnections();
        this.middlewares();
        this.routes();

    };

    async dbConnections() {
        try {
            
            AppDataSource.initialize();
            console.log('Database online :D');

        } catch ( error: any ) {
            
            throw new Error( error );

        };
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lesctura body
        this.app.use( express.json() );

        //Log
        this.app.use( logger );

        // Manejo de errores
        this.app.use( errorHandler );

    };


    routes() {

        this.app.use( this.apiPaths.users, userRoutes );
        this.app.use( this.apiPaths.address, addressRoutes );

    };

    listen() {

        this.app.listen( this.port, () => {

            console.log(`Servidor corriendo en puerto ${this.port}`);

        });

    };
    
}

export default Server;