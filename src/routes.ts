import express,{Express, Request, Response} from 'express'
//import Employees from './controller/employee.controller'
import config from '../config/default'
import fetch from "node-fetch";
import { GetEmployees,GetEmployeesNew,SaveEmployeeBasicDetail } from './controller/employee.controller';
import validateEmployeeInput from './validation/employeevalidation';
import {UserSchema} from './schema/employeeschema'
const app = express();
let routes:any=async (operation:string,app:Express, req:Request,res:Response)=>{
    if(operation==='get'){
        await app.get('/api/GetEmployeeBasicDetails',GetEmployees)
    }
    if(operation==='getnew'){
       await app.get('/api/GetEmployeeBasicDetailsNew',GetEmployeesNew);
    }
    if(operation==='save'){
        await app.post('/api/SaveEmployee',validateEmployeeInput(UserSchema),SaveEmployeeBasicDetail)
    }
}
export default routes;