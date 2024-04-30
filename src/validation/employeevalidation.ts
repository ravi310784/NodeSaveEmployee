import { Request,Response,NextFunction } from "express"
import {AnyZodObject} from "zod"
import pino from 'pino'

const logger = pino();
const validateEmployeeInput= (schema:AnyZodObject) => (req:Request,res:Response, next:NextFunction) =>{
    try{
        schema.parse(req.body);
        next();
    }catch(err:any){
        logger.error(err);
        res.status(400).send(err.message);
    }    
}

export default validateEmployeeInput;