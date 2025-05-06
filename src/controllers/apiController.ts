import type {Response, Request } from 'express';

export const apiController = {
    get: (req:Request, res:Response) => {
        res.status(200).send('Api get controller');
    }
}