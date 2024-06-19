import { NextFunction, Request, Response } from 'express';
import { AppDataSource } from '../db/data-source';
import { validateRut } from '@fdograph/rut-utilities';

import { User } from '../entities';

const userRepository = AppDataSource.getRepository(User);

export const getUsers = async( req: Request, res: Response, next: NextFunction ) => {

    try {

        const query = req.query;
        const users = await userRepository.find({
            where: query
        })

        if ( !users || users.length === 0 ) {

            res.status( 404 ).json({
                msg: `No existe usuario con esta propiedad: ${ JSON.stringify(query) }`
            })

        }

        res.json({ 
            users
        });

    } catch (error) {
        
        res.status( 500 ).json({
            msg: 'Hable con el administrador'
        });
        next( error );

    }

};

export const postUsers = async( req: Request, res: Response, next: NextFunction ) => {
    
    try {

        const { body } = req;
        const { rut } = body;

        const isValid = validateRut(rut);
        if ( !isValid ) {
            res.status( 400 ).json({
                msg: `Rut: ${ rut }, es invalido`
            })
        }

        const respuesta = await userRepository.create( body );
        await userRepository.save( respuesta );

        res.json({ 
            message: 'Se creo usuario con exito!',
            respuesta
        });

    } catch (error) {

        res.status( 500 ).json({
            msg: 'Hable con el administrador'
        });
        next( error );

    }

};