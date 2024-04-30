import {Express, Request, Response, response} from 'express'
import {IEmployee} from '../../model/employee'
import config from '../../config/default'
import connect from '../dbconnect/dbconnect';
import {EmployeeSave} from '../querybuilder/userquerybuilder'

export async function GetEmployees(req:Request,res:Response){     
      await fetch(config.apibaseurl + '/api/GetEmployeeBasicDetails')
      .then(response => response.json())
      .then(emplist => {
          res.send(emplist);
   })
}
export async function GetEmployeesNew(req:Request,res:Response){     
    await fetch(config.apibaseurl + '/api/GetEmployeeBasicDetailsNew')
    .then(response => response.json())
    .then(emplist => {
        res.send(emplist);
 })
}

export async function SaveEmployeeBasicDetail(req:Request,res:Response){
     await EmployeeSave(req.body, async function(querybuilderresult){
        let query=querybuilderresult;
        await connect(query,req, res, function(result){
        if(res.statusCode==200){
          console.log(result.affectedRows);
        }
       });
     });
    
   
}
//export default GetEmployees; GetEmployeesNew;