import { Request, Response, NextFunction } from 'express';

export class ApiError extends Error {
    statusCode: number;
    constructor(statusCode: number, message: string) {
        super(message);    this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

export const errorHandler = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    
    const status = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
  
    res.status(status).json({
        status,
        message,
    });

    next(err);
};

