import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../db/data-source";
import { Address, User } from "../entities";

const addressRepository = AppDataSource.getRepository(Address);
const userRepository = AppDataSource.getRepository(User);

export const getAddress = async( req: Request, res: Response, next: NextFunction ) => {

    try {
        
        const { userId } = req.params;

        const user = await userRepository.findOneBy({
            id: parseInt(userId),
        })

        if ( !user ) {
            res.status( 404 ).json({
                msg: `No existe usuario con este ID: ${ userId }`
            })
        }

        const address = await addressRepository.findOne({
            where: { user: { id: parseInt( userId ) } },
            relations: ['user'],
        })

        res.json({ 
            address
        });

    } catch ( error ) {

        res.status( 500 ).json({
            msg: 'Hable con el administrador'
        });
        next( error );

    }

};

export const postAddress = async( req: Request, res: Response, next: NextFunction ) => {

    try {

        const { body } = req;
        const { userId } = body;

        const user = await userRepository.findOneBy({
            id: userId,
        })

        if ( !user ) {
            res.status( 400 ).json({
                msg: `No existe usuario con este ID: ${ userId }`
            })
        }

        const address = await addressRepository.create({
            ...body,
            user
        })

        await addressRepository.save( address );

        res.json({ 
            message: 'Se creó dirección con exito.',
            address
        });

    } catch ( error ) {
        
        res.status( 500 ).json({
            msg: 'Hable con el administrador'
        });
        next( error );

    }
};